"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AmbientBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#030712]">
      {/* Dark Ambient Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Noise Texture */}
      <div className="absolute inset-0 bg-noise opacity-30" />

      {/* Radial Soft Light Beam 1 (Top Left) */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-600/30 via-indigo-600/20 to-transparent blur-[120px]"
      />

      {/* Radial Soft Light Beam 2 (Center Right) */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.2, 0.12],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/3 -right-32 w-[650px] h-[650px] rounded-full bg-gradient-to-tl from-purple-600/25 via-cyan-600/15 to-transparent blur-[130px]"
      />

      {/* Radial Soft Light Beam 3 (Bottom Left) */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute -bottom-40 left-1/4 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-cyan-600/20 via-blue-700/15 to-transparent blur-[140px]"
      />

      {/* Interactive Mouse Ambient Follower Glow */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-gradient-radial from-blue-500/10 via-purple-500/05 to-transparent blur-[80px]"
        animate={{
          x: mousePos.x - 200,
          y: mousePos.y - 200,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
      />
    </div>
  );
}
