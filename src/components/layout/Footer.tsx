"use client";

import Image from "next/image";
import { ArrowUp, Github, Linkedin, Mail, Heart } from "lucide-react";
import { PROFILE } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-white/10 pt-20 pb-12 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-blue-400/50 shadow-neon-blue shrink-0">
                <Image
                  src="/images/logo.jpg"
                  alt="Karan Saini Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                {PROFILE.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Full Stack Website Developer & Native Android Application Developer creating world-class digital platforms.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold border border-blue-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {PROFILE.availability}
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><a href="#hero" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Story</a></li>
              <li><a href="#skills" className="hover:text-blue-400 transition-colors">Technical Skills</a></li>
              <li><a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">Featured Projects</a></li>
            </ul>
          </div>

          {/* Col 3: Services Offered */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Specialized Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Web App Development</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Native Android Apps</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Full Stack SaaS Platforms</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">AI & LLM API Integration</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">UI/UX & Motion Design</a></li>
            </ul>
          </div>

          {/* Col 4: Quick Links & Back to Top */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Connect & Resources
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-full bg-white/5 hover:bg-blue-600/20 text-slate-300 hover:text-white border border-white/10 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3 rounded-full bg-white/5 hover:bg-purple-600/20 text-slate-300 hover:text-white border border-white/10 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                aria-label="Send email"
                className="p-3 rounded-full bg-white/5 hover:bg-cyan-600/20 text-slate-300 hover:text-white border border-white/10 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back To Top</span>
              <ArrowUp className="w-4 h-4 text-cyan-400" />
            </button>
          </div>
        </div>

        {/* Animated Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Engineered with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> using Next.js 15 & React 19
          </p>
        </div>
      </div>
    </footer>
  );
}
