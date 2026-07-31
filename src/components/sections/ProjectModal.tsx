"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  X,
  ExternalLink,
  Github,
  Play,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Layers,
  MapPin,
  TrendingUp,
} from "lucide-react";
import Button from "../ui/Button";
import { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        data-lenis-prevent="true"
        data-lenis-prevent-wheel="true"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-xl"
        />

        {/* Modal Container */}
        <motion.div
          data-lenis-prevent="true"
          data-lenis-prevent-wheel="true"
          onWheel={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[85vh] bg-slate-900/95 border border-white/15 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-y-auto z-10 p-6 sm:p-10 space-y-8 cursor-default"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="absolute top-6 right-6 p-3 rounded-full text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header & Badges */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className={`px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                project.status === "completed"
                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                  : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
              }`}>
                {project.status === "completed" ? "Completed Production Project" : "In Active Development"}
              </span>
              <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/20 uppercase">
                {project.category === "website" ? "Web Application" : "Android App"}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">{project.title}</h2>
            <p className="text-lg font-medium text-cyan-400">{project.tagline}</p>
          </div>

          {/* Hero Banner Preview */}
          <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden border border-white/10 bg-slate-950">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              onError={(e) => {
                e.currentTarget.srcset = "";
                e.currentTarget.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Key Metrics Grid (if available) */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {project.metrics.map((m) => (
                <div key={m.label} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="text-2xl font-extrabold text-gradient-primary">{m.value}</div>
                  <div className="text-xs font-medium text-slate-400 mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Description Overview */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white">Project Overview</h3>
            <p className="text-slate-300 leading-relaxed text-base">{project.description}</p>
          </div>

          {/* Key Features List */}
          {project.features && project.features.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architecture (if available) */}
          {project.architecture && (
            <div className="p-5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 space-y-2">
              <h4 className="text-base font-bold text-indigo-300 flex items-center gap-2">
                <Layers className="w-5 h-5 text-indigo-400" />
                System Architecture
              </h4>
              <p className="text-sm text-slate-300 font-mono leading-relaxed">{project.architecture}</p>
            </div>
          )}

          {/* Challenges & Solutions */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-3">
                <h4 className="text-base font-bold text-amber-300 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-400" />
                  Engineering Challenges
                </h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  {project.challenges.map((c, i) => (
                    <li key={i} className="list-disc list-inside">{c}</li>
                  ))}
                </ul>
              </div>

              {project.solutions && (
                <div className="p-5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 space-y-3">
                  <h4 className="text-base font-bold text-cyan-300 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-cyan-400" />
                    Technical Solutions
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {project.solutions.map((s, i) => (
                      <li key={i} className="list-disc list-inside">{s}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Technology Badges */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white">Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span key={t} className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-300 border border-blue-500/30">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Future Roadmap (if available) */}
          {project.roadmap && project.roadmap.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-400" />
                Future Roadmap
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.roadmap.map((rm, i) => (
                  <div key={i} className="px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs font-medium text-purple-300">
                    • {rm}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" icon={<ExternalLink className="w-4 h-4" />}>
                  Visit Live Demo
                </Button>
              </a>
            )}

            {project.playStoreUrl && (
              <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" icon={<Play className="w-4 h-4" />}>
                  Play Store Page
                </Button>
              </a>
            )}

            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="glass" icon={<Github className="w-4 h-4" />}>
                  View Repository
                </Button>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
