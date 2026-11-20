import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { PROFILE } from "@/data/profile";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const title = `${PROFILE.name} — ${PROFILE.role}`;
const description =
  "Websites, web apps and Android apps built for businesses in India. See live projects, Play Store apps, screenshots, prices and delivery times.";

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s · ${PROFILE.name}` },
  description,
  icons: { icon: "/icon.jpg", apple: "/images/logo.jpg" },
  openGraph: {
    title,
    description,
    siteName: `${PROFILE.name} Portfolio`,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: title }],
    locale: "en_IN",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.jpg"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0c0f" },
  ],
};

// Sets the theme before paint: saved choice, else the device setting.
const themeScript = `try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PROFILE.name,
    jobTitle: PROFILE.role,
    email: PROFILE.email,
    telephone: PROFILE.phone,
    sameAs: [PROFILE.linkedin, PROFILE.github],
  };
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
