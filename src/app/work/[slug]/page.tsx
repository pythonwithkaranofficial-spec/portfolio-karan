import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, MessageCircle } from "lucide-react";
import Gallery from "@/components/Gallery";
import StatusBadge, { KIND_LABEL } from "@/components/StatusBadge";
import { PROJECTS } from "@/data/projects";
import { whatsappLink } from "@/data/profile";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = PROJECTS.find((x) => x.slug === slug);
  if (!p) return {};
  const img = p.cover?.src ?? p.shots[0]?.src ?? p.icon;
  return {
    title: p.name,
    description: p.tagline,
    openGraph: { title: p.name, description: p.tagline, images: img ? [img] : undefined },
  };
}

export default async function ProjectPage({ params }: Params) {
  const slug = (await params).slug;
  const i = PROJECTS.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const p = PROJECTS[i];
  const next = PROJECTS[(i + 1) % PROJECTS.length];
  const shots = p.cover && !p.shots.some((s) => s.src === p.cover!.src) ? [p.cover, ...p.shots] : p.shots;

  const facts = [
    { k: "Type", v: KIND_LABEL[p.kind] + (p.client ? ` for ${p.client}` : "") },
    { k: "Built", v: p.timeline ?? String(p.year) },    p.play?.downloads && { k: "Downloads", v: p.play.downloads },
    p.play?.rating && { k: "Rating", v: `${p.play.rating} ★` },
  ].filter(Boolean) as { k: string; v: string }[];

  return (
    <article className="container pb-24 pt-8 sm:pt-12">
      <Link href="/#work" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink">
        <ArrowLeft size={16} /> All projects
      </Link>

      <header className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-start">
        {p.icon && (
          <Image src={p.icon} alt={`${p.name} icon`} width={88} height={88} className="h-20 w-20 rounded-2xl border border-line sm:h-[88px] sm:w-[88px]" />
        )}
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <StatusBadge status={p.status} />
            {p.client && <span className="chip">Client project</span>}
          </div>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{p.name}</h1>
          <p className="mt-2 max-w-2xl text-lg text-muted">{p.tagline}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {p.links.play && (
              <a href={p.links.play} target="_blank" rel="noopener" className="btn-primary">
                Get it on Google Play <ArrowUpRight size={16} />
              </a>
            )}
            {p.links.live && (
              <a href={p.links.live} target="_blank" rel="noopener" className="btn-primary">
                Visit website <ArrowUpRight size={16} />
              </a>
            )}
            <a
              href={whatsappLink(`Hi Karan, I saw ${p.name} in your portfolio. I want something similar.`)}
              target="_blank"
              rel="noopener"
              className="btn-ghost"
            >
              <MessageCircle size={16} /> I want something like this
            </a>
          </div>
        </div>
      </header>

      {shots.length > 0 && (
        <section className="mt-10">
          <h2 className="sr-only">Screenshots</h2>
          <Gallery shots={shots} name={p.name} />
        </section>
      )}

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <h2 className="text-lg font-semibold">About this project</h2>
          <p className="mt-3 whitespace-pre-line leading-relaxed text-muted">{p.description}</p>
          {p.features.length > 0 && (
            <>
              <h2 className="mt-8 text-lg font-semibold">What it does</h2>
              <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm">
                    <Check size={16} className="mt-0.5 shrink-0 text-good" />
                    {f}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        <aside className="h-fit rounded-xl2 border border-line p-5">
          <dl className="space-y-3 text-sm">
            {facts.map((f) => (
              <div key={f.k} className="flex justify-between gap-4">
                <dt className="text-muted">{f.k}</dt>
                <dd className="text-right font-medium">{f.v}</dd>
              </div>
            ))}
          </dl>
          <h3 className="mt-5 border-t border-line pt-5 text-sm font-medium">Built with</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        </aside>
      </div>

      <Link
        href={`/work/${next.slug}`}
        className="mt-14 flex items-center justify-between gap-4 rounded-xl2 border border-line p-5 pr-6 hover:bg-surface sm:mr-20"
      >
        <span className="text-sm text-muted">Next project</span>
        <span className="flex items-center gap-2 font-medium">
          {next.name} <ArrowUpRight size={16} />
        </span>
      </Link>
    </article>
  );
}
