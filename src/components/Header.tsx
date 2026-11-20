"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { PROFILE, whatsappLink } from "@/data/profile";

const NAV = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services & Prices" },
  { href: "/#process", label: "How I work" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/85 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 font-semibold" onClick={() => setOpen(false)}>
          <Image src={PROFILE.photo} alt="" width={32} height={32} className="rounded-full bg-surface" />
          <span>{PROFILE.name}</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-ink">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href={whatsappLink()} target="_blank" rel="noopener" className="btn-primary hidden !py-2 sm:inline-flex">
            Hire me
          </a>
          <button
            className="grid h-9 w-9 place-items-center rounded-full border border-line md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="container flex flex-col gap-1 border-t border-line pb-4 pt-2 md:hidden">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-lg px-2 py-2.5 hover:bg-surface">
              {n.label}
            </Link>
          ))}
          <a href={whatsappLink()} target="_blank" rel="noopener" className="btn-primary mt-2">
            Hire me on WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
