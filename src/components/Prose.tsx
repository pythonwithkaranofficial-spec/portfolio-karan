import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Prose({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <article className="container max-w-3xl py-10 sm:py-14">
      <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink">
        <ArrowLeft size={16} /> Home
      </Link>
      <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
      <p className="mt-2 text-sm text-muted">Last updated: {updated}</p>
      <div className="mt-8 space-y-4 leading-relaxed text-muted [&_a]:text-accent [&_h2]:mt-10 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-ink [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-ink [&_ul]:space-y-2">
        {children}
      </div>
    </article>
  );
}
