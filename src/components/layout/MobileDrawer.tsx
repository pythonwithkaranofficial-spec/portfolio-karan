"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ArrowRight, Mail, Github, Linkedin } from "lucide-react";
import Button from "../ui/Button";
import ThemeToggle from "../ui/ThemeToggle";
import { PROFILE } from "@/data/portfolioData";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: { name: string; href: string }[];
  activeSection: string;
}

export default function MobileDrawer({
  isOpen,
  onClose,
  navItems,
  activeSection,
}: MobileDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl"
          />

          {/* Drawer Panel */}
          <motion.div
            data-lenis-prevent="true"
            data-lenis-prevent-wheel="true"
            onWheel={(e) => e.stopPropagation()}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-slate-950/95 border-l border-white/10 p-6 flex flex-col justify-between overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-blue-400/50 shadow-neon-blue shrink-0">
                  <Image
                    src="/images/logo.jpg"
                    alt="Karan Saini Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base">{PROFILE.name}</h3>
                  <p className="text-xs text-slate-400">Full Stack & Mobile Developer</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <ThemeToggle size="sm" />
                <button
                  onClick={onClose}
                  aria-label="Close navigation menu"
                  className="p-2.5 rounded-full text-slate-400 hover:text-white bg-white/5 border border-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Nav Links */}
            <div className="py-6 flex flex-col gap-2">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={onClose}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index }}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? "bg-blue-600/20 text-white border border-blue-500/30 font-semibold"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{item.name}</span>
                    <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? "text-blue-400 translate-x-1" : "opacity-40"}`} />
                  </motion.a>
                );
              })}
            </div>

            {/* Footer / CTA */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <a href="#contact" onClick={onClose} className="w-full block">
                <Button variant="primary" size="lg" className="w-full">
                  Hire Me Now
                </Button>
              </a>

              <div className="flex items-center justify-center gap-4 text-slate-400 pt-2">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Karan Saini GitHub Profile"
                  className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Karan Saini LinkedIn Profile"
                  className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${PROFILE.email}`}
                  aria-label="Email Karan Saini"
                  className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
