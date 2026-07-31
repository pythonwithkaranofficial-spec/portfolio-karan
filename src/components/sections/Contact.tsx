"use client";

import { motion } from "framer-motion";
import { Mail, Clock, MapPin, Linkedin, Github } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import { PROFILE } from "@/data/portfolioData";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 z-10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          pillText="Get In Touch"
          title="Let's Build Something"
          titleGradient="Extraordinary Together"
          description="Have a web platform, Android application, or software consulting request? Feel free to reach out via direct email or social channels."
        />

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard glowColor="blue" className="p-8 sm:p-10 space-y-8">
              {/* Availability Badge */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-semibold text-emerald-300">
                    {PROFILE.availability}
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-medium">
                  Location: <strong className="text-slate-200">{PROFILE.location}</strong>
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all group">
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-medium">Direct Email</span>
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="block text-base font-bold text-white hover:text-cyan-300 transition-colors break-all"
                    >
                      {PROFILE.email}
                    </a>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-all group">
                  <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-medium">Average Response Time</span>
                    <p className="text-base font-bold text-white">{PROFILE.responseTime}</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-all group md:col-span-2">
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0 group-hover:scale-105 transition-transform">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-medium">Location & Work Mode</span>
                    <p className="text-base font-bold text-white">{PROFILE.location} (Remote Available Globally)</p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <span className="text-xs text-slate-400 uppercase font-semibold tracking-wider block text-center sm:text-left">
                  Connect On Social Channels
                </span>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    className="flex-1 min-w-[140px] p-3.5 rounded-xl bg-white/5 hover:bg-blue-600/20 text-slate-300 hover:text-white border border-white/10 hover:border-blue-500/40 transition-all flex items-center justify-center gap-2.5 text-sm font-semibold"
                  >
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={PROFILE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    className="flex-1 min-w-[140px] p-3.5 rounded-xl bg-white/5 hover:bg-purple-600/20 text-slate-300 hover:text-white border border-white/10 hover:border-purple-500/40 transition-all flex items-center justify-center gap-2.5 text-sm font-semibold"
                  >
                    <Github className="w-4 h-4 text-purple-400" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

