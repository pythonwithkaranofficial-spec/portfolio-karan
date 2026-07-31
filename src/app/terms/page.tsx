import type { Metadata } from "next";
import Link from "next/link";
import { Scale, ArrowLeft, Mail, ShieldAlert, CheckCircle2, Code2, Globe, Cpu, AlertTriangle } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import { PROFILE } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: `Terms of Service | ${PROFILE.name}`,
  description: `Terms of service and legal agreement governing the use of ${PROFILE.name}'s portfolio website, web platforms, and mobile applications.`,
};

export default function TermsOfServicePage() {
  const lastUpdated = "July 31, 2026";

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      {/* Header Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-sm font-semibold text-slate-300 hover:text-white border border-white/10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-cyan-400" />
          <span>Back to Portfolio</span>
        </Link>
        <span className="text-xs text-slate-400 font-medium">Last Updated: {lastUpdated}</span>
      </div>

      {/* Page Title Header */}
      <div className="space-y-4 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold">
          <Scale className="w-4 h-4" />
          <span>Legal Agreement & Conduct</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Terms of Service
        </h1>
        <p className="text-base sm:text-lg text-slate-400 max-w-3xl leading-relaxed">
          Please review these Terms of Service carefully before accessing or using {PROFILE.name}&apos;s website, software solutions, or Android applications.
        </p>
      </div>

      {/* Main Terms Content */}
      <div className="space-y-8">
        {/* Section 1: Acceptance */}
        <GlassCard glowColor="purple" className="p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3 text-xl font-bold text-white border-b border-white/10 pb-4">
            <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" />
            <h2>1. Acceptance of Terms</h2>
          </div>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            By accessing this portfolio website (<strong className="text-white">karansaini.dev</strong>), interacting with live software demonstrations, or downloading/installing Android applications developed by <strong className="text-white">{PROFILE.name}</strong>, you agree to be legally bound by these Terms of Service. If you do not agree to all terms, you must discontinue using the site and applications immediately.
          </p>
        </GlassCard>

        {/* Section 2: Intellectual Property */}
        <GlassCard glowColor="blue" className="p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3 text-xl font-bold text-white border-b border-white/10 pb-4">
            <Code2 className="w-5 h-5 text-blue-400 shrink-0" />
            <h2>2. Intellectual Property Rights</h2>
          </div>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            All original source code, UI/UX designs, custom glassmorphism design tokens, micro-animations, text content, logos, graphics, and architectural implementations displayed on this site or in published mobile applications are the exclusive intellectual property of <strong className="text-white">{PROFILE.name}</strong>, unless otherwise noted.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-300">
            <li>Portfolio projects shared for educational or client demonstration purposes remain protected by applicable copyright and trademark laws.</li>
            <li>Open-source software modules published under explicit repositories (e.g. on GitHub) are subject to their respective open-source licenses (MIT, Apache 2.0).</li>
          </ul>
        </GlassCard>

        {/* Section 3: Professional Consulting & Client Engagements */}
        <GlassCard glowColor="cyan" className="p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3 text-xl font-bold text-white border-b border-white/10 pb-4">
            <Globe className="w-5 h-5 text-cyan-400 shrink-0" />
            <h2>3. Professional Services & Consulting</h2>
          </div>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {PROFILE.name} provides specialized web development (Next.js 15, React 19), native Android application development (Kotlin, Jetpack Compose), full-stack SaaS engineering, and AI/LLM integration services.
          </p>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Formal client engagements, deliverables, milestones, payment schedules, and custom software ownership terms are governed by specific individual client agreements executed prior to project commencement.
          </p>
        </GlassCard>

        {/* Section 4: Acceptable Use & Conduct */}
        <GlassCard glowColor="purple" className="p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3 text-xl font-bold text-white border-b border-white/10 pb-4">
            <ShieldAlert className="w-5 h-5 text-purple-400 shrink-0" />
            <h2>4. Acceptable Use & Prohibited Conduct</h2>
          </div>
          <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>When using this website or any published application, you agree not to:</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li>Attempt to reverse-engineer, decompile, or extract source code from compiled Android binaries (.apk/.aab) without permission.</li>
              <li>Launch automated scrapers, bots, or malicious stress tests against portfolio endpoints or backend microservices.</li>
              <li>Use any application or code asset for unlawful, fraudulent, or malicious purposes.</li>
            </ul>
          </div>
        </GlassCard>

        {/* Section 5: Third-Party Links & Disclaimers */}
        <GlassCard glowColor="blue" className="p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3 text-xl font-bold text-white border-b border-white/10 pb-4">
            <Cpu className="w-5 h-5 text-blue-400 shrink-0" />
            <h2>5. External Links & Third-Party Platforms</h2>
          </div>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            This site contains external links to third-party platforms, including GitHub, LinkedIn, Google Play Store, live client websites, and API providers. {PROFILE.name} is not responsible for the privacy practices, content, or availability of third-party external sites.
          </p>
        </GlassCard>

        {/* Section 6: Limitation of Liability */}
        <GlassCard glowColor="cyan" className="p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3 text-xl font-bold text-white border-b border-white/10 pb-4">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
            <h2>6. Disclaimer of Warranties & Limitation of Liability</h2>
          </div>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Portfolio demonstrations and public utilities are provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind, express or implied. In no event shall {PROFILE.name} be liable for direct, indirect, incidental, or consequential damages resulting from site usage, temporary downtime, or third-party service outages.
          </p>
        </GlassCard>

        {/* Section 7: Governing Law & Inquiries */}
        <GlassCard glowColor="purple" className="p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3 text-xl font-bold text-white border-b border-white/10 pb-4">
            <Mail className="w-5 h-5 text-purple-400 shrink-0" />
            <h2>7. Governing Law & Contact Details</h2>
          </div>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            These terms are governed by and construed in accordance with the laws of India. If you have any questions or contractual inquiries regarding these Terms of Service, please reach out via email:
          </p>
          <div className="pt-2">
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300 font-bold hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-purple-400" />
              <span>{PROFILE.email}</span>
            </a>
          </div>
        </GlassCard>
      </div>

      {/* Bottom Navigation */}
      <div className="pt-6 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-sm shadow-neon-blue hover:brightness-110 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
}
