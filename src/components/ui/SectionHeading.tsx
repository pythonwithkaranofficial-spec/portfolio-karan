"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  pillText: string;
  title: string;
  titleGradient?: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeading({
  pillText,
  title,
  titleGradient,
  description,
  center = true,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-16 md:mb-20 ${center ? "text-center mx-auto" : ""} max-w-3xl`}
    >
      {/* Greeting/Section Pill Badge */}
      <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mb-4 ${center ? "mx-auto" : ""}`}>
        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
          {pillText}
        </span>
      </div>

      {/* Main Section Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
        {title}{" "}
        {titleGradient && (
          <span className="text-gradient-primary">{titleGradient}</span>
        )}
      </h2>

      {/* Description Body (Max 700px width as specified in prompt spacing rules) */}
      {description && (
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-[700px] mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}
