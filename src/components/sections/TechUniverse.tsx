"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { TECH_UNIVERSE } from "@/data/portfolioData";
import { Sparkles } from "lucide-react";

export default function TechUniverse() {
  return (
    <section id="tech-universe" className="relative py-28 px-4 sm:px-6 lg:px-8 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          pillText="Interactive Ecosystem"
          title="The Technology"
          titleGradient="Universe"
          description="An orbiting visualization of core frameworks, SDKs, and data engines powering my software architecture."
        />

        {/* Orbit Visualization Container */}
        <div className="relative w-full max-w-4xl mx-auto h-[480px] sm:h-[580px] flex items-center justify-center">
          {/* Orbital Ring 1 */}
          <div className="absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full border border-blue-500/20 animate-pulse-slow pointer-events-none" />
          {/* Orbital Ring 2 */}
          <div className="absolute w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] rounded-full border border-purple-500/20 pointer-events-none" />

          {/* Center Emblem (KS) */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 0 40px rgba(59,130,246,0.3)",
                "0 0 70px rgba(139,92,246,0.5)",
                "0 0 40px rgba(59,130,246,0.3)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex flex-col items-center justify-center text-white z-20 border-2 border-white/30 shadow-2xl"
          >
            <span className="text-2xl sm:text-3xl font-black tracking-wider">KS</span>
            <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-cyan-300 uppercase">Core</span>
          </motion.div>

          {/* Orbiting Tech Nodes */}
          {TECH_UNIVERSE.map((tech, i) => {
            const angle = (i * 360) / TECH_UNIVERSE.length;
            const radius = 170; // Orbit radius
            const isReverse = i % 2 === 1;

            return (
              <motion.div
                key={tech.name}
                suppressHydrationWarning
                animate={{
                  rotate: isReverse ? [360, 0] : [0, 360],
                }}
                transition={{
                  duration: Math.abs(tech.speed) * 1.2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  position: "absolute",
                  width: `${radius * 2}px`,
                  height: `${radius * 2}px`,
                  borderRadius: "50%",
                  pointerEvents: "none",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "0%",
                    transform: "translate(-50%, -50%)",
                    pointerEvents: "auto",
                  }}
                  className="group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-full glass-panel border border-white/15 shadow-glass cursor-pointer transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]"
                  >
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: tech.color }}
                    />
                    <span className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors whitespace-nowrap">
                      {tech.name}
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
