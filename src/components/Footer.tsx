import Link from "next/link";
import { PROFILE } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container flex flex-col gap-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {PROFILE.name}. Websites & Android apps.
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <a href={PROFILE.github} target="_blank" rel="noopener" className="hover:text-ink">GitHub</a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener" className="hover:text-ink">LinkedIn</a>
          <Link href="/privacy" className="hover:text-ink">Privacy</Link>
          <Link href="/terms" className="hover:text-ink">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
