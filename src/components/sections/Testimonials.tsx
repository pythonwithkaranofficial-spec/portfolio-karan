"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote, Globe, Smartphone, Sparkles } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import { TESTIMONIALS } from "@/data/portfolioData";

export default function Testimonials() {
  const [activeCategory, setActiveCategory] = useState<"all" | "website" | "app">("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  // Filter testimonials based on active category tab
  const filteredTestimonials = TESTIMONIALS.filter((item) => {
    if (activeCategory === "website") return item.company.toLowerCase().includes("website");
    if (activeCategory === "app") return item.company.toLowerCase().includes("app");
    return true;
  });

  // Reset index when category changes
  const handleCategoryChange = (cat: "all" | "website" | "app") => {
    setActiveCategory(cat);
    setCurrentIndex(0);
  };

  useEffect(() => {
    if (!isAutoplay || filteredTestimonials.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoplay, filteredTestimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const activeItem = filteredTestimonials[currentIndex] || filteredTestimonials[0];
  const isApp = activeItem.company.toLowerCase().includes("app");

  return (
    <section id="testimonials" className="relative py-28 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          pillText="Client & User Feedback"
          title="What Collaborators &"
          titleGradient="Clients Say"
          description="Authentic reviews and testimonials from educators, students, and users who use my web platforms and mobile applications."
        />

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <button
            onClick={() => handleCategoryChange("all")}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeCategory === "all"
                ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-neon-blue"
                : "bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10"
            }`}
          >
            All Reviews ({TESTIMONIALS.length})
          </button>
          <button
            onClick={() => handleCategoryChange("website")}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeCategory === "website"
                ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-neon-blue"
                : "bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10"
            }`}
          >
            <Globe className="w-3.5 h-3.5 text-cyan-300" />
            <span>Websites (4)</span>
          </button>
          <button
            onClick={() => handleCategoryChange("app")}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeCategory === "app"
                ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-neon-blue"
                : "bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10"
            }`}
          >
            <Smartphone className="w-3.5 h-3.5 text-emerald-300" />
            <span>Apps (5)</span>
          </button>
        </div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoplay(false)}
          onMouseLeave={() => setIsAutoplay(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <GlassCard glowColor={isApp ? "cyan" : "purple"} className="p-8 sm:p-12 space-y-6 relative overflow-hidden">
                <Quote className="absolute top-6 right-6 w-16 h-16 text-purple-500/10 pointer-events-none" />

                {/* Top Badge: Rating & Project Tag */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(activeItem.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs font-bold text-amber-300 ml-1.5">5.0 / 5.0</span>
                  </div>

                  {/* Project Tag */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-cyan-300">
                    {isApp ? <Smartphone className="w-3.5 h-3.5" /> : <Globe className="w-3.5 h-3.5" />}
                    <span>{activeItem.company}</span>
                  </span>
                </div>

                {/* Review Quote Content */}
                <blockquote className="text-lg sm:text-xl text-slate-100 leading-relaxed font-medium italic">
                  "{activeItem.content}"
                </blockquote>

                {/* Reviewer Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-purple-400/40 bg-gradient-to-tr from-blue-600 to-purple-600 shrink-0 flex items-center justify-center text-white font-bold text-lg shadow-md">
                    <Image
                      src={activeItem.avatar}
                      alt={activeItem.name}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <span>{activeItem.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">{activeItem.name}</h4>
                    <p className="text-xs text-cyan-300 font-semibold">{activeItem.role} • <span className="text-slate-400">{activeItem.company}</span></p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-8">
            {/* Pagination Numbers */}
            <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
              <span className="text-white font-bold text-sm">
                0{currentIndex + 1}
              </span>
              <span>/</span>
              <span>0{filteredTestimonials.length}</span>
              <span className="text-slate-500 hidden sm:inline">|</span>
              <span className="text-slate-400 hidden sm:inline flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400 inline" /> Hover to pause auto-scroll
              </span>
            </div>

            {/* Slide Dots */}
            <div className="flex items-center gap-1.5">
              {filteredTestimonials.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    idx === currentIndex
                      ? "bg-gradient-to-r from-cyan-400 to-blue-500 w-6"
                      : "bg-white/20 hover:bg-white/40 w-2"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
