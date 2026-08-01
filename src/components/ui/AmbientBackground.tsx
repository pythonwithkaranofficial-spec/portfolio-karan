"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AmbientBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const touchCheck = window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;
    setIsTouchDevice(touchCheck);

    if (touchCheck) return;

    let ticking = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setMousePos({
            x: e.clientX,
            y: e.clientY,
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Ambient Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Noise Texture */}
      <div className="absolute inset-0 bg-noise opacity-30" />

      {/* Radial Soft Light Beam 1 (Top Left) */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -left-32 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-gradient-to-br from-blue-600/30 via-indigo-600/20 to-transparent blur-[60px] md:blur-[120px] transform-gpu will-change-transform"
      />

      {/* Radial Soft Light Beam 2 (Center Right) */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.12, 0.2, 0.12],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/3 -right-32 w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] rounded-full bg-gradient-to-tl from-purple-600/25 via-cyan-600/15 to-transparent blur-[65px] md:blur-[130px] transform-gpu will-change-transform"
      />

      {/* Radial Soft Light Beam 3 (Bottom Left) */}
      <motion.div
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute -bottom-40 left-1/4 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full bg-gradient-to-tr from-cyan-600/20 via-blue-700/15 to-transparent blur-[70px] md:blur-[140px] transform-gpu will-change-transform"
      />

      {/* Interactive Mouse Ambient Follower Glow (Desktop fine pointer only) */}
      {!isTouchDevice && mousePos.x > 0 && (
        <motion.div
          className="absolute w-[350px] h-[350px] rounded-full bg-gradient-radial from-blue-500/10 via-purple-500/05 to-transparent blur-[60px] transform-gpu pointer-events-none"
          animate={{
            x: mousePos.x - 175,
            y: mousePos.y - 175,
          }}
          transition={{
            type: "spring",
            damping: 35,
            stiffness: 180,
            mass: 0.5,
          }}
        />
      )}
    </div>
  );
}
