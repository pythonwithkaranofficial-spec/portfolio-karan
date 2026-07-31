"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Zap, Code, ShieldCheck, HeartHandshake } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import AnimatedCounter from "../ui/AnimatedCounter";
import { PROFILE, STATS } from "@/data/portfolioData";

const TIMELINE_EVENTS = [
  { year: "2020", title: "Started Programming Journey", desc: "Mastered Python, Core Java, algorithms, and fundamental web development." },
  { year: "2021", title: "Android Mobile Mastery", desc: "Engineered first utility mobile apps (TouchLock, QRScanner Pro) for Google Play." },
  { year: "2022", title: "Full Stack Expansion", desc: "Built full-stack client web portals with Node.js, Express, MongoDB, and Firebase." },
  { year: "2023", title: "React & Next.js Architecture", desc: "Transitioned to modern Next.js App Router, SSR micro-frontends, and Tailwind CSS." },
  { year: "2024", title: "SmartPaperGenerator & AI", desc: "Launched AI exam generation platforms serving 50,000+ users with sub-1.5s latency." },
  { year: "2025+", title: "Enterprise Scalability", desc: "Architecting high-concurrency SaaS apps & native Kotlin mobile platforms." },
];

const VALUES = [
  { icon: Zap, title: "Peak Performance", desc: "Sub-second response times and 100/100 Lighthouse benchmark scores." },
  { icon: ShieldCheck, title: "Zero-Defect Code", desc: "Strict TypeScript types, clean MVVM/App Router patterns, and comprehensive unit tests." },
  { icon: HeartHandshake, title: "Client First", desc: "Transparent communication, on-time delivery, and long-term technical support." },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          pillText="About Me"
          title="Engineering Digital Solutions With"
          titleGradient="Precision & Passion"
          description="A look inside my journey, core principles, and technical achievements over 4+ years of building web and mobile software."
        />

        {/* Animated Counter Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <GlassCard glowColor="blue" className="p-6 text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-gradient-primary mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-semibold text-white mb-1">{stat.label}</div>
                <p className="text-xs text-slate-400">{stat.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Main Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Professional Story & Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-8"
          >
            <GlassCard glowColor="indigo" className="p-8 space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <Code className="w-6 h-6 text-blue-400" />
                The Story & Mission
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                {PROFILE.bio}
              </p>
              <p className="text-slate-300 text-base leading-relaxed">
                Whether creating AI-driven web engines like <strong className="text-blue-400 font-semibold">SmartPaperGenerator</strong> or native mobile utilities like <strong className="text-purple-400 font-semibold">PythonWithKaran App</strong>, I focus on intuitive glassmorphism UI, tight performance budgets, and reliable system stability.
              </p>
            </GlassCard>

            {/* Core Values */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white px-2">Core Principles</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {VALUES.map((val) => {
                  const Icon = val.icon;
                  return (
                    <GlassCard key={val.title} glowColor="cyan" className="p-4 space-y-2">
                      <Icon className="w-6 h-6 text-cyan-400" />
                      <h5 className="font-bold text-sm text-white">{val.title}</h5>
                      <p className="text-xs text-slate-400 leading-normal">{val.desc}</p>
                    </GlassCard>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Career Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <GlassCard glowColor="purple" className="p-8">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <Award className="w-6 h-6 text-purple-400" />
                Career Evolution Timeline
              </h3>

              <div className="relative border-l-2 border-slate-800 ml-4 space-y-8 pl-6">
                {TIMELINE_EVENTS.map((evt, idx) => (
                  <motion.div
                    key={evt.year}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative group"
                  >
                    {/* Node Dot */}
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500 group-hover:border-purple-400 group-hover:scale-125 transition-all shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

                    <div className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-2">
                      {evt.year}
                    </div>
                    <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {evt.title}
                    </h4>
                    <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                      {evt.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
