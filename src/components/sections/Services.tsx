"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Layers,
  Sparkles,
  Palette,
  Gauge,
  Server,
  Cpu,
  ArrowRight,
  Check,
  LucideIcon,
} from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import Button from "../ui/Button";
import { SERVICES } from "@/data/portfolioData";

const ICON_MAP: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  Layers,
  Sparkles,
  Palette,
  Gauge,
  Server,
  Cpu,
};

export default function Services() {
  return (
    <section id="services" className="relative py-28 px-4 sm:px-6 lg:px-8 z-10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          pillText="What I Offer"
          title="Specialized Engineering"
          titleGradient="& Consulting Services"
          description="High-value software development services crafted for startups, enterprises, and individual product founders."
        />

        {/* Grid: 4 Columns Desktop, 2 Tablet, 1 Mobile (Exactly 8 Services) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {SERVICES.map((service, idx) => {
            const IconComponent = ICON_MAP[service.icon] || Globe;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <GlassCard
                  glowColor={idx % 2 === 0 ? "blue" : "purple"}
                  className="p-6 h-full flex flex-col justify-between space-y-6 group hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="space-y-4">
                    {/* Icon */}
                    <div className="p-3.5 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 w-fit group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Deliverables List */}
                    <div className="space-y-2 pt-2 border-t border-white/10">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Key Deliverables
                      </span>
                      <ul className="space-y-1.5">
                        {service.deliverables.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                            <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA */}
                  <a href="#contact" className="block pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between text-xs font-semibold text-blue-400 group-hover:text-cyan-300 transition-colors">
                      <span>Inquire Service</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
