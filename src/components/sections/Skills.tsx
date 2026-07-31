"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Code2,
  Palette,
  Zap,
  Server,
  FileCode2,
  Radio,
  Smartphone,
  Cpu,
  Play,
  Database,
  Flame,
  Layers,
  Cloud,
  Box,
  Sparkles,
  BrainCircuit,
  Figma,
  Layout,
  LucideIcon,
} from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import { SKILL_CATEGORIES, SKILLS } from "@/data/portfolioData";
import { SkillCategory } from "@/types";

const ICON_MAP: Record<string, LucideIcon> = {
  Globe,
  Code2,
  Palette,
  Zap,
  Server,
  FileCode2,
  Radio,
  Smartphone,
  Cpu,
  Play,
  Database,
  Flame,
  Layers,
  Cloud,
  Box,
  Sparkles,
  BrainCircuit,
  Figma,
  Layout,
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState<SkillCategory["id"]>("frontend");

  const filteredSkills = SKILLS.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8 z-10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          pillText="Technical Stack"
          title="Skills & Core"
          titleGradient="Competencies"
          description="Categorized breakdown of technical proficiency across web frameworks, native mobile OS, databases, AI APIs, and design tools."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {SKILL_CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "text-white shadow-neon-blue"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full border border-blue-400/40"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <span className="relative z-10">{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Skills Grid - Generous Spacing */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredSkills.map((skill, idx) => {
              const IconComponent = ICON_MAP[skill.iconName] || Code2;

              return (
                <GlassCard key={skill.name} glowColor="blue" className="p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">{skill.name}</h4>
                        <p className="text-xs text-slate-400 font-medium">
                          Experience: <span className="text-blue-300">{skill.experience}</span>
                        </p>
                      </div>
                    </div>
                    <span className="text-lg font-black text-cyan-400 font-mono">
                      {skill.level}%
                    </span>
                  </div>

                  {skill.description && (
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {skill.description}
                    </p>
                  )}

                  {/* Animated Progress Meter Bar */}
                  <div className="w-full h-2.5 rounded-full bg-slate-800/80 overflow-hidden relative border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 shadow-[0_0_12px_rgba(59,130,246,0.8)]"
                    />
                  </div>
                </GlassCard>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
