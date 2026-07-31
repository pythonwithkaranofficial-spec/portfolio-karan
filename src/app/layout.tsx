import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
import AmbientBackground from "@/components/ui/AmbientBackground";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PROFILE } from "@/data/portfolioData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${PROFILE.name} | ${PROFILE.title}`,
  description: PROFILE.tagline,
  keywords: [
    "Karan Saini",
    "Full Stack Developer",
    "Android Application Developer",
    "Next.js 15 Developer",
    "React 19 Architect",
    "SmartPaperGenerator",
    "SeminarKaran",
    "PythonWithKaran",
    "SaaS Developer",
    "Kotlin Developer",
  ],
  authors: [{ name: PROFILE.name, url: PROFILE.github }],
  creator: PROFILE.name,
  icons: {
    icon: "/icon.jpg",
    shortcut: "/icon.jpg",
    apple: "/images/logo.jpg",
  },
  openGraph: {
    title: `${PROFILE.name} | Developer Portfolio`,
    description: PROFILE.tagline,
    siteName: `${PROFILE.name} Portfolio`,
    images: [
      {
        url: PROFILE.profilePhoto,
        width: 1200,
        height: 630,
        alt: `${PROFILE.name} - Full Stack & Android Developer`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PROFILE.name} | Developer Portfolio`,
    description: PROFILE.tagline,
    creator: "@karansaini",
    images: [PROFILE.profilePhoto],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PROFILE.name,
    jobTitle: PROFILE.title,
    email: PROFILE.email,
    sameAs: [PROFILE.linkedin, PROFILE.github],
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Android SDK",
      "Kotlin",
      "Python",
      "Node.js",
      "MongoDB",
      "Firebase",
      "Tailwind CSS",
      "OpenAI API",
    ],
  };

  return (
    <html lang="en" className={`dark ${inter.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#030712] text-slate-100 antialiased selection:bg-blue-500 selection:text-white min-h-screen flex flex-col relative overflow-x-hidden">
        <ThemeProvider>
          <SmoothScrollProvider>
            {/* Ambient Lighting & Background Canvas */}
            <AmbientBackground />

            {/* Floating Pill Header Navigation */}
            <Navbar />

            {/* Main Application Page */}
            <main className="flex-grow z-10">{children}</main>

            {/* Spacious Footer */}
            <Footer />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

