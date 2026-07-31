"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Play, ArrowUpRight, Sparkles } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import Button from "../ui/Button";
import ProjectModal from "./ProjectModal";
import { PROJECTS } from "@/data/portfolioData";
import { Project, ProjectCategory, ProjectStatus } from "@/types";

export default function Projects() {
  const [level1Tab, setLevel1Tab] = useState<ProjectCategory>("website");
  const [level2Tab, setLevel2Tab] = useState<"all" | ProjectStatus>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter logic
  const filteredProjects = PROJECTS.filter((p) => {
    const matchesCategory = p.category === level1Tab;
    const matchesStatus = level2Tab === "all" ? true : p.status === level2Tab;
    return matchesCategory && matchesStatus;
  });

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          pillText="Featured Portfolio"
          title="Engineered Web Apps &"
          titleGradient="Native Android Systems"
          description="Explore production platforms and active mobile developments. Click any project card to open full architecture details."
        />

        {/* Level 1 Filter Tabs: Website Projects vs Android Applications */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex p-1.5 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-xl">
            <button
              onClick={() => {
                setLevel1Tab("website");
                setLevel2Tab("all");
              }}
              className={`px-6 py-3 rounded-full text-sm sm:text-base font-bold transition-all duration-300 cursor-pointer ${
                level1Tab === "website"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-neon-blue"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Website Projects
            </button>
            <button
              onClick={() => {
                setLevel1Tab("android");
                setLevel2Tab("all");
              }}
              className={`px-6 py-3 rounded-full text-sm sm:text-base font-bold transition-all duration-300 cursor-pointer ${
                level1Tab === "android"
                  ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-neon-purple"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Android Applications
            </button>
          </div>
        </div>

        {/* Level 2 Sub-Filter Tabs: All / Completed / In Development */}
        <div className="flex justify-center gap-2 mb-16">
          {[
            { label: "All Projects", val: "all" },
            { label: "Completed Production", val: "completed" },
            { label: "In Active Development", val: "in-development" },
          ].map((sub) => {
            const isActive = level2Tab === sub.val;
            return (
              <button
                key={sub.val}
                onClick={() => setLevel2Tab(sub.val as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                  isActive
                    ? "bg-white/15 text-cyan-300 border border-cyan-400/40"
                    : "text-slate-400 hover:text-slate-200 bg-white/5 border border-white/5"
                }`}
              >
                {sub.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid: STRICT MAX 2 PER ROW DESKTOP, 1 PER ROW MOBILE */}
        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <GlassCard
                  glowColor={project.category === "website" ? "blue" : "purple"}
                  className="p-8 space-y-6 flex flex-col justify-between h-full group"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="space-y-6">
                    {/* Status Pill & Title */}
                    <div className="flex items-center justify-between gap-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                          project.status === "completed"
                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                            : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                        }`}
                      >
                        {project.status === "completed" ? "Completed" : "In Development"}
                      </span>

                      <div className="p-2 rounded-full bg-white/5 group-hover:bg-blue-500/20 group-hover:text-blue-400 text-slate-400 transition-colors">
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>

                    {/* Image Thumbnail */}
                    <div className="relative w-full h-56 rounded-xl overflow-hidden border border-white/10 bg-slate-950">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.srcset = "";
                          e.currentTarget.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm font-semibold text-blue-400">{project.tagline}</p>
                      <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Metrics Highlights (if available) */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="grid grid-cols-3 gap-2 py-2 border-y border-white/10">
                        {project.metrics.map((m) => (
                          <div key={m.label} className="text-center">
                            <div className="text-base font-extrabold text-cyan-400">{m.value}</div>
                            <div className="text-[10px] font-medium text-slate-400 uppercase tracking-tight">{m.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-800/80 text-slate-300 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400">
                          +{project.technologies.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Footer CTA */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-400 group-hover:text-white transition-colors">
                      Click to inspect full architecture →
                    </span>
                    <Button variant="glass" size="sm">
                      Details
                    </Button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Fullscreen Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
