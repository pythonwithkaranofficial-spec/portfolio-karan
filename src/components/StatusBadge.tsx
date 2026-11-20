import type { Project } from "@/types";

const MAP: Record<Project["status"], { label: string; cls: string }> = {
  live: { label: "Live", cls: "text-good border-good/30 bg-good/10" },
  published: { label: "On Play Store", cls: "text-good border-good/30 bg-good/10" },
  ready: { label: "Ready to launch", cls: "text-accent border-accent/30 bg-accent/10" },
  "in-progress": { label: "In progress", cls: "text-warn border-warn/30 bg-warn/10" },
};

export default function StatusBadge({ status }: { status: Project["status"] }) {
  const s = MAP[status];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${s.cls}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {s.label}
    </span>
  );
}

export const KIND_LABEL: Record<Project["kind"], string> = {
  website: "Website",
  webapp: "Web app",
  android: "Android app",
  game: "Game",
};
