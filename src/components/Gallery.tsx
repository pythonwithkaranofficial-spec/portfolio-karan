"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Shot } from "@/types";

/** Screenshot rail (swipe on phone, scroll on desktop) with a full-screen viewer. */
export default function Gallery({ shots, name }: { shots: Shot[]; name: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const touchX = useRef(0);
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + shots.length) % shots.length)),
    [shots.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  if (!shots.length) return null;
  const phones = shots.every((s) => s.frame !== "desktop");

  return (
    <>
      <div className="rail -mx-4 flex gap-3 overflow-x-auto px-4 pb-3 sm:mx-0 sm:px-0">
        {shots.map((s, i) => {
          const wide = s.frame === "desktop" || s.w > s.h;
          return (
            <button
              key={s.src}
              onClick={() => setOpen(i)}
              className={`group shrink-0 text-left ${wide ? "w-[85%] sm:w-[560px]" : phones ? "w-[44%] sm:w-[220px]" : "w-[44%] sm:w-[200px]"}`}
            >
              <div
                className="relative overflow-hidden rounded-xl border border-line bg-surface"
                style={{ aspectRatio: `${s.w} / ${s.h}` }}
              >
                <Image
                  src={wide ? s.thumb ?? s.src : s.src}
                  alt={s.label ? `${name}: ${s.label}` : `${name} screenshot ${i + 1}`}
                  fill
                  loading={i < 3 ? "eager" : "lazy"}
                  placeholder={s.blur ? "blur" : "empty"}
                  blurDataURL={s.blur}
                  sizes={wide ? "(min-width: 640px) 560px, 85vw" : "(min-width: 640px) 220px, 44vw"}
                  className="object-cover transition-opacity group-hover:opacity-90"
                />
              </div>
              {s.label && <p className="mt-2 truncate text-xs text-muted">{s.label}</p>}
            </button>
          );
        })}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#050505]/[0.97] p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${name} screenshots`}
          onClick={close}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
          }}
        >
          <button className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white" aria-label="Close" onClick={close}>
            <X size={20} />
          </button>
          {shots.length > 1 && (
            <>
              <button
                className="absolute left-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white sm:left-6"
                aria-label="Previous"
                onClick={(e) => (e.stopPropagation(), step(-1))}
              >
                <ChevronLeft size={22} />
              </button>
              <button
                className="absolute right-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white sm:right-6"
                aria-label="Next"
                onClick={(e) => (e.stopPropagation(), step(1))}
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}
          <figure className="flex max-h-full flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <Image
              src={shots[open].src}
              alt={shots[open].label ?? `${name} screenshot`}
              width={shots[open].w}
              height={shots[open].h}
              className="max-h-[82vh] w-auto rounded-lg object-contain"
              sizes="90vw"
            />
            <figcaption className="mt-3 text-sm text-white/70">
              {shots[open].label ?? ""} {open + 1} / {shots.length}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
