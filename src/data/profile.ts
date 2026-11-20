import type { Service } from "@/types";

export const PROFILE = {
  name: "Karan Saini",
  role: "Website & Android App Developer",
  location: "India · works with clients anywhere",
  intro:
    "I design and build websites, web apps and Android apps for shops, schools, coaching centres, clinics and startups — from the first screen to the live Play Store listing.",
  phone: "+91 99286 05425",
  phoneRaw: "919928605425",
  email: "tpaofficial1999@gmail.com",
  github: "https://github.com/pythonwithkaranofficial-spec",
  linkedin: "https://www.linkedin.com/in/karan-saini-mrperfect/",
  photo: "/images/profile.jpeg",
};

export const whatsappLink = (text = "Hi Karan, I saw your portfolio and I want to discuss a project.") =>
  `https://wa.me/${PROFILE.phoneRaw}?text=${encodeURIComponent(text)}`;

export const SERVICES: Service[] = [
  {
    title: "Business Website",
    price: "from ₹4,999",
    time: "5–7 days",
    forWho: "Shops, clinics, coaching centres, schools, salons",
    includes: [
      "Up to 5 pages, mobile-friendly",
      "WhatsApp & call buttons, enquiry form",
      "Google Maps & basic SEO",
      "Hosting setup on your domain",
    ],
  },
  {
    title: "Web App / E-commerce",
    price: "from ₹15,000",
    time: "2–4 weeks",
    forWho: "Online stores, booking systems, portals, SaaS",
    includes: [
      "Login, admin dashboard, database",
      "Razorpay / UPI payments",
      "Products, orders, reports",
      "Deployed and handed over with guide",
    ],
  },
  {
    title: "Android App",
    price: "from ₹20,000",
    time: "2–4 weeks",
    forWho: "Businesses, education, utilities, startups",
    includes: [
      "Flutter or native Kotlin app",
      "Backend & admin panel if needed",
      "Ads, in-app payments, notifications",
      "Play Store listing & publishing",
    ],
  },
  {
    title: "Game / Learning App",
    price: "on request",
    time: "3–8 weeks",
    forWho: "Kids' learning, quiz, casual & 3D games",
    includes: [
      "Flutter or Godot 4 engine",
      "Original art, 3D models, sound",
      "Levels, rewards, achievements",
      "AdMob & Play Games setup",
    ],
  },
];

export const PROCESS = [
  { step: "Call / WhatsApp", detail: "You tell me what you need. I suggest the simplest thing that works and give a fixed price." },
  { step: "Design preview", detail: "Within 2–3 days you see the main screens and can ask for changes." },
  { step: "Build & weekly demo", detail: "You get a working link or APK to test as it grows." },
  { step: "Launch", detail: "I publish the website or Play Store app on your account and hand over everything." },
  { step: "Support", detail: "Free fixes for 30 days, then optional yearly maintenance." },
];

export const STACK: { group: string; items: string[] }[] = [
  { group: "Websites & web apps", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Prisma", "PostgreSQL", "MongoDB", "Supabase", "Vercel"] },
  { group: "Android apps", items: ["Flutter", "Dart", "Kotlin", "Jetpack Compose", "Room", "Firebase", "AdMob", "Play Billing", "Capacitor"] },
  { group: "Games & 3D", items: ["Godot 4", "Flame", "Blender", "Play Games Services"] },
  { group: "AI & tools", items: ["OpenAI API", "Gemini API", "Python", "Playwright", "Git & GitHub"] },
];
