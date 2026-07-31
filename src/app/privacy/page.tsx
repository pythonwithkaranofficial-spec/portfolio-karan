import type { Metadata } from "next";
import Link from "next/link";
import { Shield, ArrowLeft, Mail, Lock, FileText, CheckCircle, Smartphone, Globe, Cpu } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import { PROFILE } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: `Privacy Policy | ${PROFILE.name}`,
  description: `Privacy policy and data protection guidelines for ${PROFILE.name}'s portfolio website and associated web and native Android applications.`,
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "July 31, 2026";

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      {/* Header Breadcrumb / Back Navigation */}
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
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
          <Shield className="w-4 h-4" />
          <span>Data Governance & Trust</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-base sm:text-lg text-slate-400 max-w-3xl leading-relaxed">
          Your privacy is paramount. This policy outlines how information is collected, protected, and handled across {PROFILE.name}&apos;s portfolio website and associated web platforms and native Android applications.
        </p>
      </div>

      {/* Main Content Sections */}
      <div className="space-y-8">
        {/* Section 1: Overview */}
        <GlassCard glowColor="blue" className="p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3 text-xl font-bold text-white border-b border-white/10 pb-4">
            <Globe className="w-5 h-5 text-blue-400 shrink-0" />
            <h2>1. Overview & Scope</h2>
          </div>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            This Privacy Policy applies to all services, websites (including <strong className="text-white">karansaini.dev</strong>, <strong className="text-white">smartpapergenerator.com</strong>, and <strong className="text-white">seminarkaran.com</strong>), and native Android applications (such as <strong className="text-white">PythonWithKaran</strong>, <strong className="text-white">SmartPaperGenerator App</strong>, <strong className="text-white">TouchLock</strong>, <strong className="text-white">QRScanner Pro</strong>, and <strong className="text-white">KlipNest</strong>) engineered and maintained by <strong className="text-white">{PROFILE.name}</strong> (&quot;Developer&quot;, &quot;I&quot;, &quot;Me&quot;, or &quot;My&quot;).
          </p>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            By accessing my portfolio or using any associated software applications, you acknowledge the data practices described in this document.
          </p>
        </GlassCard>

        {/* Section 2: Information We Collect */}
        <GlassCard glowColor="purple" className="p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3 text-xl font-bold text-white border-b border-white/10 pb-4">
            <FileText className="w-5 h-5 text-purple-400 shrink-0" />
            <h2>2. Information We Collect</h2>
          </div>
          <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>I prioritize minimal data collection. Depending on how you interact with my website and apps, the following data may be processed:</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li>
                <strong className="text-white">Voluntary Communication Data:</strong> If you reach out directly via email ({PROFILE.email}) or social channels, I collect your email address, name, and message content to respond to inquiries or consulting requests.
              </li>
              <li>
                <strong className="text-white">Technical & Usage Telemetry:</strong> Standard web analytics (such as browser type, IP address, page response times, referring URLs) collected by hosting platforms (e.g. Vercel, Cloudflare) for performance diagnostics and DDoS protection.
              </li>
              <li>
                <strong className="text-white">Mobile Application Local Data:</strong> Native Android applications operate primarily offline or local-first. User preferences, progress state, and cached documents are saved on your local device (via SQLite/Room DB or EncryptedSharedPreferences) and are never sold or extracted without explicit user consent.
              </li>
            </ul>
          </div>
        </GlassCard>

        {/* Section 3: Android App Permissions & Local Storage */}
        <GlassCard glowColor="cyan" className="p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3 text-xl font-bold text-white border-b border-white/10 pb-4">
            <Smartphone className="w-5 h-5 text-cyan-400 shrink-0" />
            <h2>3. Android Application Permissions & Security</h2>
          </div>
          <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>My published Android applications request runtime permissions strictly necessary for their core utility features:</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li>
                <strong className="text-white">Camera Access (e.g., QRScanner Pro, Translator App OCR):</strong> Used exclusively to process real-time camera frames on-device for barcode scanning or text recognition. Camera streams are not stored or transmitted to external servers.
              </li>
              <li>
                <strong className="text-white">Storage & File System Access:</strong> Used only when exporting generated PDF exam papers, saving code files, or exporting CSV logs locally on your device.
              </li>
              <li>
                <strong className="text-white">System Overlay & Service Permissions (e.g., TouchLock, KlipNest):</strong> Used to provide floating screen locking bubbles or encrypted clipboard snippet management on-device.
              </li>
            </ul>
          </div>
        </GlassCard>

        {/* Section 4: Third-Party APIs & Integrations */}
        <GlassCard glowColor="blue" className="p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3 text-xl font-bold text-white border-b border-white/10 pb-4">
            <Cpu className="w-5 h-5 text-blue-400 shrink-0" />
            <h2>4. Third-Party Services & Integrations</h2>
          </div>
          <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>Some applications leverage trusted third-party providers for hosting, AI generation, and mobile distribution:</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li><strong className="text-white">Vercel & Cloudflare:</strong> Website hosting, global CDN distribution, and SSL security.</li>
              <li><strong className="text-white">OpenAI & Google Gemini APIs:</strong> Leveraged by SaaS platforms (e.g., SmartPaperGenerator) for dynamic question and content generation. Prompts submitted do not contain personal user identity unless explicitly entered by the user.</li>
              <li><strong className="text-white">Google Play Services & Firebase:</strong> Used for app distribution, crash reporting, and real-time database sync in supported mobile applications.</li>
              <li><strong className="text-white">YouTube Data API:</strong> Used in SeminarKaran to fetch public educational videos and lecture streams.</li>
            </ul>
          </div>
        </GlassCard>

        {/* Section 5: Data Security */}
        <GlassCard glowColor="purple" className="p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3 text-xl font-bold text-white border-b border-white/10 pb-4">
            <Lock className="w-5 h-5 text-purple-400 shrink-0" />
            <h2>5. Data Security & Retention</h2>
          </div>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            I implement industry-standard security protocols, including HTTPS/TLS encryption in transit, strict database access controls, and zero-knowledge storage principles where applicable. I do not monetize, sell, trade, or rent personal data to third-party advertisers or data brokers under any circumstances.
          </p>
        </GlassCard>

        {/* Section 6: User Rights & Inquiries */}
        <GlassCard glowColor="cyan" className="p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3 text-xl font-bold text-white border-b border-white/10 pb-4">
            <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0" />
            <h2>6. Your Rights & Inquiries</h2>
          </div>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            You have the right to inquire about any personal data associated with your interactions, request data deletion, or clarify any privacy concerns. For any questions or data requests regarding this Privacy Policy, please contact me directly at:
          </p>
          <div className="pt-2">
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-cyan-300 font-bold hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>{PROFILE.email}</span>
            </a>
          </div>
        </GlassCard>
      </div>

      {/* Bottom Back Button */}
      <div className="pt-6 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-sm shadow-neon-blue hover:brightness-110 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
}
