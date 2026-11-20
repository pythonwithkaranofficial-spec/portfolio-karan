import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/types";
import StatusBadge, { KIND_LABEL } from "./StatusBadge";

/** Card preview: a desktop screenshot fills the frame; phone screenshots sit side by side. */
function Preview({ p }: { p: Project }) {
  const desktop = p.cover ?? p.shots.find((s) => s.frame === "desktop");
  if (desktop && (p.kind === "website" || p.kind === "webapp" || p.cover)) {
    return (
      <Image
        src={desktop.src}
        alt={`${p.name} preview`}
        fill
        sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
      />
    );
  }
  const phones = p.shots.filter((s) => s.frame === "phone").slice(0, 3);
  if (phones.length) {
    return (
      <div className="absolute inset-0 flex items-end justify-center gap-2 px-4 pt-5">
        {phones.map((s, i) => (
          <div
            key={s.src}
            className={`relative aspect-[9/19] w-[30%] overflow-hidden rounded-t-xl border border-b-0 border-line bg-bg shadow-sm ${i === 1 ? "translate-y-0" : "translate-y-3"}`}
          >
            <Image src={s.src} alt="" fill sizes="120px" className="object-cover object-top" />
          </div>
        ))}
      </div>
    );
  }
  return p.icon ? (
    <div className="absolute inset-0 grid place-items-center">
      <Image src={p.icon} alt="" width={96} height={96} className="rounded-2xl" />
    </div>
  ) : null;
}

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <Link
      href={`/work/${p.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl2 border border-line bg-bg transition-shadow hover:shadow-lg hover:shadow-black/5"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-surface">
        <Preview p={p} />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start gap-3">
          {p.icon && <Image src={p.icon} alt="" width={40} height={40} className="h-10 w-10 shrink-0 rounded-xl border border-line" />}
          <div className="min-w-0">
            <h3 className="truncate font-semibold">{p.name}</h3>
            <p className="text-xs text-muted">
              {KIND_LABEL[p.kind]}
              {p.client ? " · Client project" : ""}
            </p>
          </div>
        </div>
        <p className="line-clamp-2 text-sm text-muted">{p.tagline}</p>
        <div className="mt-auto flex items-center justify-between gap-2 pt-1">
          <StatusBadge status={p.status} />
          <span className="text-xs font-medium text-accent">View details →</span>
        </div>
      </div>
    </Link>
  );
}
