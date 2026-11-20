"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/types";
import ProjectCard from "./ProjectCard";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "client", label: "Client work" },
  { id: "web", label: "Websites & web apps" },
  { id: "android", label: "Android apps" },
  { id: "game", label: "Games" },
  { id: "store", label: "On Play Store" },
] as const;
type FilterId = (typeof FILTERS)[number]["id"];

const match = (p: Project, f: FilterId) =>
  f === "all" ||
  (f === "client" && !!p.client) ||
  (f === "web" && (p.kind === "website" || p.kind === "webapp")) ||
  (f === "android" && p.kind === "android") ||
  (f === "game" && p.kind === "game") ||
  (f === "store" && !!p.links.play);

export default function WorkGrid({ projects }: { projects: Project[] }) {
  const [f, setF] = useState<FilterId>("all");
  const list = useMemo(() => projects.filter((p) => match(p, f)), [projects, f]);
  return (
    <>
      <div className="-mx-4 mb-6 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0" role="tablist">
        {FILTERS.map((x) => {
          const n = projects.filter((p) => match(p, x.id)).length;
          if (!n) return null;
          const on = f === x.id;
          return (
            <button
              key={x.id}
              role="tab"
              aria-selected={on}
              onClick={() => setF(x.id)}
              className={`shrink-0 rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                on ? "border-ink bg-ink text-bg" : "border-line text-muted hover:text-ink"
              }`}
            >
              {x.label} <span className={on ? "opacity-70" : "opacity-60"}>{n}</span>
            </button>
          );
        })}
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <ProjectCard key={p.slug} p={p} />
        ))}
      </div>
    </>
  );
}
