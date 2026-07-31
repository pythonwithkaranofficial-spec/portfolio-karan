"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  MousePointer,
  Code2,
  Globe,
  Smartphone,
  Flame,
  Server,
  FileCode2,
} from "lucide-react";
import Button from "../ui/Button";
import GlassCard from "../ui/GlassCard";
import { PROFILE } from "@/data/portfolioData";

const ROLES = [
  "Full Stack Website Developer",
  "Native Android Application Developer",
  "AI & SaaS Systems Architect",
  "UI/UX & Performance Engineer",
];

const TECH_ORBITS = [
  { icon: Code2, label: "React 19", color: "text-cyan-400 border-cyan-500/30" },
  { icon: Globe, label: "Next.js 15", color: "text-white border-white/30" },
  { icon: Smartphone, label: "Android", color: "text-green-400 border-green-500/30" },
  { icon: Flame, label: "Firebase", color: "text-amber-400 border-amber-500/30" },
  { icon: Server, label: "Node.js", color: "text-emerald-400 border-emerald-500/30" },
  { icon: FileCode2, label: "Python", color: "text-blue-400 border-blue-500/30" },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden z-10"
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Bio & Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start space-y-6 text-left"
        >
          {/* Greeting Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/25 backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs sm:text-sm font-medium text-blue-300">
              {PROFILE.availability}
            </span>
          </div>

          {/* Main Name */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
              Hello, I'm <br />
              <span className="text-gradient-primary">{PROFILE.name}</span>
            </h1>

            {/* Role Switcher */}
            <div className="h-10 sm:h-12 overflow-hidden flex items-center">
              <motion.div
                key={roleIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-lg sm:text-2xl font-semibold text-cyan-400 flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5 text-indigo-400 animate-pulse" />
                <span>{ROLES[roleIndex]}</span>
              </motion.div>
            </div>
          </div>

          {/* Tagline / Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 max-w-[650px] leading-relaxed font-normal">
            {PROFILE.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a href="#projects">
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Projects
              </Button>
            </a>

            <a href={PROFILE.resumeUrl} download target="_blank" rel="noopener noreferrer">
              <Button
                variant="glass"
                size="lg"
                icon={<Download className="w-4 h-4" />}
              >
                Download Resume
              </Button>
            </a>
          </div>

          {/* Quick Social & Email Links */}
          <div className="flex items-center gap-4 pt-4 border-t border-white/10 w-full max-w-[600px]">
            <span className="text-xs text-slate-400 uppercase tracking-widest font-semibold">
              Connect With Me
            </span>
            <div className="flex items-center gap-3">
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Karan Saini LinkedIn"
                className="p-2.5 rounded-full bg-slate-900/60 hover:bg-blue-600/20 text-slate-300 hover:text-white border border-white/10 hover:border-blue-500/40 transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Karan Saini GitHub"
                className="p-2.5 rounded-full bg-slate-900/60 hover:bg-purple-600/20 text-slate-300 hover:text-white border border-white/10 hover:border-purple-500/40 transition-all duration-300"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                aria-label="Email Karan Saini"
                className="p-2.5 rounded-full bg-slate-900/60 hover:bg-cyan-600/20 text-slate-300 hover:text-white border border-white/10 hover:border-cyan-500/40 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Profile Card with Tech Orbit Icons & Glowing Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex items-center justify-center relative"
        >
          {/* Orbital Tech Badges (Floating Ring) */}
          <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] flex items-center justify-center">
            {/* Outer Glowing Pulsing Orbit Track */}
            <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-pulse-slow shadow-[0_0_50px_rgba(59,130,246,0.15)] pointer-events-none" />
            <div className="absolute inset-8 rounded-full border border-purple-500/20 pointer-events-none" />

            {/* Continuous 360° Orbit Container Revolving Around Profile Photo */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
              suppressHydrationWarning
            >
              {TECH_ORBITS.map((tech, i) => {
                const angle = (i * 360) / TECH_ORBITS.length;
                const radius = 175; // Distance from center
                const x = Math.round(Math.cos((angle * Math.PI) / 180) * radius * 10) / 10;
                const y = Math.round(Math.sin((angle * Math.PI) / 180) * radius * 10) / 10;
                const IconComp = tech.icon;

                return (
                  <div
                    key={tech.label}
                    style={{
                      position: "absolute",
                      left: `calc(50% + ${x}px - 22px)`,
                      top: `calc(50% + ${y}px - 22px)`,
                    }}
                    className="pointer-events-auto"
                  >
                    {/* Counter-rotate badge so tech icon remains upright while orbiting */}
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                      className={`p-3 rounded-full glass-panel border shadow-lg flex items-center gap-1.5 group hover:scale-110 transition-transform ${tech.color}`}
                      title={tech.label}
                    >
                      <IconComp className="w-5 h-5" />
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>

            {/* Center Profile Image Container */}
            <GlassCard glowColor="purple" className="relative p-3 rounded-full w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] overflow-hidden flex items-center justify-center shadow-[0_0_60px_rgba(139,92,246,0.3)] border-2 border-indigo-500/30 z-10">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900 border border-white/20">
                <Image
                  src={PROFILE.profilePhoto}
                  alt={PROFILE.name}
                  fill
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                {/* Subtle Inner Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </GlassCard>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
      >
        <a href="#about" aria-label="Scroll down to About section" className="flex flex-col items-center gap-1">
          <span className="text-xs tracking-widest text-slate-400 uppercase font-medium">Scroll</span>
          <div className="w-5 h-9 rounded-full border-2 border-slate-500/50 p-1 flex justify-center">
            <div className="w-1 h-2 rounded-full bg-blue-400 animate-pulse" />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
