"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";

interface TechItem {
  name: string;
  color: string;
  angle: number;
}

interface RingConfig {
  id: string;
  mobileRadius: number;
  desktopRadius: number;
  duration: number;
  reverse: boolean;
  borderColor: string;
  items: TechItem[];
}

const RINGS: RingConfig[] = [
  {
    id: "inner",
    mobileRadius: 115,
    desktopRadius: 145,
    duration: 28,
    reverse: false,
    borderColor: "border-blue-500/30",
    items: [
      { name: "React 19", color: "#61DAFB", angle: 0 },
      { name: "Firebase", color: "#FFCA28", angle: 120 },
      { name: "Next.js 15", color: "#FFFFFF", angle: 240 },
    ],
  },
  {
    id: "middle",
    mobileRadius: 165,
    desktopRadius: 215,
    duration: 38,
    reverse: true,
    borderColor: "border-purple-500/30",
    items: [
      { name: "Android SDK", color: "#3DDC84", angle: 40 },
      { name: "MongoDB", color: "#47A248", angle: 160 },
      { name: "Python", color: "#3776AB", angle: 280 },
    ],
  },
  {
    id: "outer",
    mobileRadius: 215,
    desktopRadius: 285,
    duration: 48,
    reverse: false,
    borderColor: "border-cyan-500/25 border-dashed",
    items: [
      { name: "Node.js", color: "#68A063", angle: 90 },
      { name: "Tailwind CSS", color: "#06B6D4", angle: 270 },
    ],
  },
];

export default function TechUniverse() {
  return (
    <section id="tech-universe" className="relative py-28 px-4 sm:px-6 lg:px-8 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          pillText="Interactive Ecosystem"
          title="The Technology"
          titleGradient="Universe"
          description="An orbiting, multi-layered visualization of core frameworks, SDKs, and data engines powering my software architecture."
        />

        {/* Orbit Visualization Container */}
        <div className="relative w-full max-w-5xl mx-auto h-[520px] sm:h-[640px] flex items-center justify-center">
          {/* Visual Orbiting Ring Circles */}
          <div className="absolute w-[230px] h-[230px] sm:w-[290px] sm:h-[290px] rounded-full border border-blue-500/20 animate-pulse-slow pointer-events-none" />
          <div className="absolute w-[330px] h-[330px] sm:w-[430px] sm:h-[430px] rounded-full border border-purple-500/20 pointer-events-none" />
          <div className="absolute w-[430px] h-[430px] sm:w-[570px] sm:h-[570px] rounded-full border border-cyan-500/20 border-dashed pointer-events-none" />

          {/* Center Emblem (KS Core) */}
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
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex flex-col items-center justify-center text-white z-20 border-2 border-white/30 shadow-2xl shrink-0"
          >
            <span className="text-2xl sm:text-3xl font-black tracking-wider">KS</span>
            <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-cyan-300 uppercase">Core</span>
          </motion.div>

          {/* Render Rings & Nodes */}
          {RINGS.map((ring) => (
            <div key={ring.id} className="contents">
              {/* Desktop / Responsive Orbit Container */}
              <div className="hidden sm:block">
                <motion.div
                  animate={{
                    rotate: ring.reverse ? [360, 0] : [0, 360],
                  }}
                  transition={{
                    duration: ring.duration,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    marginLeft: `-${ring.desktopRadius}px`,
                    marginTop: `-${ring.desktopRadius}px`,
                    width: `${ring.desktopRadius * 2}px`,
                    height: `${ring.desktopRadius * 2}px`,
                    borderRadius: "50%",
                    pointerEvents: "none",
                  }}
                >
                  {ring.items.map((tech) => {
                    const rad = (tech.angle * Math.PI) / 180;
                    const x = 50 + 50 * Math.cos(rad);
                    const y = 50 + 50 * Math.sin(rad);

                    return (
                      <div
                        key={tech.name}
                        style={{
                          position: "absolute",
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                          pointerEvents: "auto",
                        }}
                        className="group"
                      >
                        <motion.div
                          animate={{
                            rotate: ring.reverse ? [0, 360] : [360, 0],
                          }}
                          transition={{
                            duration: ring.duration,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.18 }}
                            className="flex items-center gap-2 px-3.5 py-2 rounded-full glass-panel border border-white/15 shadow-glass cursor-pointer transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]"
                          >
                            <div
                              className="w-3 h-3 rounded-full shrink-0"
                              style={{ backgroundColor: tech.color }}
                            />
                            <span className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors whitespace-nowrap">
                              {tech.name}
                            </span>
                          </motion.div>
                        </motion.div>
                      </div>
                    );
                  })}
                </motion.div>
              </div>

              {/* Mobile Orbit Container */}
              <div className="block sm:hidden">
                <motion.div
                  animate={{
                    rotate: ring.reverse ? [360, 0] : [0, 360],
                  }}
                  transition={{
                    duration: ring.duration,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    marginLeft: `-${ring.mobileRadius}px`,
                    marginTop: `-${ring.mobileRadius}px`,
                    width: `${ring.mobileRadius * 2}px`,
                    height: `${ring.mobileRadius * 2}px`,
                    borderRadius: "50%",
                    pointerEvents: "none",
                  }}
                >
                  {ring.items.map((tech) => {
                    const rad = (tech.angle * Math.PI) / 180;
                    const x = 50 + 50 * Math.cos(rad);
                    const y = 50 + 50 * Math.sin(rad);

                    return (
                      <div
                        key={tech.name}
                        style={{
                          position: "absolute",
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                          pointerEvents: "auto",
                        }}
                        className="group"
                      >
                        <motion.div
                          animate={{
                            rotate: ring.reverse ? [0, 360] : [360, 0],
                          }}
                          transition={{
                            duration: ring.duration,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.15 }}
                            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full glass-panel border border-white/15 shadow-glass cursor-pointer transition-all duration-300 group-hover:border-cyan-400"
                          >
                            <div
                              className="w-2.5 h-2.5 rounded-full shrink-0"
                              style={{ backgroundColor: tech.color }}
                            />
                            <span className="text-[11px] font-bold text-white group-hover:text-cyan-300 transition-colors whitespace-nowrap">
                              {tech.name}
                            </span>
                          </motion.div>
                        </motion.div>
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
