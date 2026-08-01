"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "blue" | "purple" | "cyan" | "indigo";
  tilt?: boolean;
  onClick?: () => void;
}

export default function GlassCard({
  children,
  className = "",
  glowColor = "blue",
  tilt = true,
  onClick,
}: GlassCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt || (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches)) return;
    const card = e.currentTarget.getBoundingClientRect();
    const centerX = card.left + card.width / 2;
    const centerY = card.top + card.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rX = (-mouseY / (card.height / 2)) * 6; // max 6deg tilt
    const rY = (mouseX / (card.width / 2)) * 6;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    if (rotateX !== 0 || rotateY !== 0) {
      setRotateX(0);
      setRotateY(0);
    }
  };

  const glowStyles = {
    blue: "hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
    purple: "hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
    cyan: "hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
    indigo: "hover:border-indigo-500/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]",
  };

  return (
    <motion.div
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
      }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 250,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={cn(
        "relative rounded-2xl p-8 transition-all duration-300",
        "bg-slate-900/40 backdrop-blur-xl border border-white/10 shadow-glass",
        glowStyles[glowColor],
        onClick && "cursor-pointer",
        className
      )}
    >
      {/* Subtle Light Beam Accent Line */}
      <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
      {children}
    </motion.div>
  );
}
