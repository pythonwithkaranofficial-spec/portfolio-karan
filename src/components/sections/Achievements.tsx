"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Star, CheckCircle, Target } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import { ACHIEVEMENTS } from "@/data/portfolioData";

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-28 px-4 sm:px-6 lg:px-8 z-10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          pillText="Track Record"
          title="Major Achievements &"
          titleGradient="Industry Recognition"
          description="Key metrics and historical milestones achieved throughout my software development tenure."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((ach, idx) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <GlassCard glowColor="cyan" className="p-6 h-full flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {ach.badge}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">{ach.year}</span>
                  </div>

                  <div className="text-3xl sm:text-4xl font-extrabold text-gradient-cyan">
                    {ach.metric}
                  </div>

                  <h3 className="text-lg font-bold text-white leading-snug">
                    {ach.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {ach.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span>Verified Milestone</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
