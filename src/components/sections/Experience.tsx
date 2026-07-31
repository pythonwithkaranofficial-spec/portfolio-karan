"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import { EXPERIENCES } from "@/data/portfolioData";

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string>(EXPERIENCES[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? "" : id));
  };

  return (
    <section id="experience" className="relative py-28 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          pillText="Work History"
          title="Professional Experience &"
          titleGradient="Key Milestones"
          description="A track record of technical leadership, web app engineering, and mobile product delivery."
        />

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-blue-500/20 ml-4 md:ml-8 space-y-12 pl-6 md:pl-10">
          {EXPERIENCES.map((exp, idx) => {
            const isExpanded = expandedId === exp.id;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative group"
              >
                {/* Glowing Node Dot */}
                <div className="absolute -left-[31px] md:-left-[47px] top-6 w-5 h-5 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:border-blue-400 group-hover:scale-125 transition-all shadow-[0_0_15px_rgba(6,182,212,0.6)] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                </div>

                <GlassCard glowColor="purple" className="p-8 space-y-6">
                  {/* Header Row */}
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold border border-indigo-500/20">
                        <Briefcase className="w-3.5 h-3.5" />
                        <span>{exp.type}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-base font-semibold text-blue-400">{exp.company}</p>
                    </div>

                    <div className="flex flex-col items-start md:items-end text-xs text-slate-400 space-y-1 font-medium">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-purple-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-cyan-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Role Description */}
                  <p className="text-slate-300 text-base leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Expandable Achievements Section */}
                  <div>
                    <button
                      onClick={() => toggleExpand(exp.id)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                    >
                      <span>{isExpanded ? "Hide Impact Details" : "View Key Impact & Achievements"}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {isExpanded && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 space-y-3 pt-3 border-t border-white/10"
                      >
                        {exp.achievements.map((ach, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </div>

                  {/* Technologies Badges */}
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-800/80 text-slate-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
