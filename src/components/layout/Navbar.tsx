"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X, Sparkles, ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import ThemeToggle from "../ui/ThemeToggle";
import MobileDrawer from "./MobileDrawer";

const NAV_ITEMS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Achievements", href: "#achievements" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      // ScrollSpy section detection
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
          >
            <nav className="pointer-events-auto inline-flex items-center gap-1.5 md:gap-3 px-4 py-2.5 rounded-full glass-pill border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.6)] backdrop-blur-2xl max-w-7xl">
              {/* Logo / Brand Avatar */}
              <a
                href="#hero"
                className="flex items-center gap-2.5 px-3 py-1 rounded-full hover:bg-white/5 transition-colors group"
              >
                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-blue-400/50 shadow-neon-blue group-hover:scale-105 transition-transform">
                  <Image
                    src="/images/logo.jpg"
                    alt="Karan Saini Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-sm font-semibold text-white tracking-tight hidden sm:inline">
                  Karan Saini
                </span>
              </a>

              {/* Divider */}
              <div className="h-4 w-[1px] bg-white/10 hidden md:block" />

              {/* Desktop Nav Items */}
              <div className="hidden lg:flex items-center gap-1">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                        isActive ? "text-white font-semibold" : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activePill"
                          className="absolute inset-0 bg-blue-500/20 border border-blue-500/30 rounded-full"
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{item.name}</span>
                    </a>
                  );
                })}
              </div>

              {/* Right CTA & Theme Toggle */}
              <div className="flex items-center gap-2">
                <ThemeToggle size="sm" />

                <a href="#contact" className="hidden sm:inline-block">
                  <Button variant="primary" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                    Hire Me
                  </Button>
                </a>

                {/* Mobile Hamburger Toggle */}
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  aria-label="Open Mobile Navigation Menu"
                  className="lg:hidden p-2 rounded-full text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </div>
            </nav>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Mobile Menu Drawer */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={NAV_ITEMS}
        activeSection={activeSection}
      />
    </>
  );
}
