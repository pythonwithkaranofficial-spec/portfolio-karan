import Image from "next/image";
import { Check, Clock, Mail, MessageCircle, Phone } from "lucide-react";
import WorkGrid from "@/components/WorkGrid";
import { MORE_PROJECTS, PROJECTS } from "@/data/projects";
import { PROCESS, PROFILE, SERVICES, STACK, whatsappLink } from "@/data/profile";

// Cards only need a few fields and up to 3 screenshots; sending less keeps the page light.
const cardData = PROJECTS.map((p) => ({
  ...p,
  description: "",
  features: [],
  tech: [],
  shots: [...p.shots.filter((s) => s.frame === "desktop").slice(0, 1), ...p.shots.filter((s) => s.frame === "phone").slice(0, 3)],
}));

export default function Home() {
  const stats = [
    { n: PROJECTS.length + MORE_PROJECTS.length, label: "apps & websites built" },
    { n: PROJECTS.filter((p) => p.links.play).length, label: "apps on Play Store" },
    { n: PROJECTS.filter((p) => p.links.live).length, label: "live websites" },
    { n: PROJECTS.filter((p) => p.client).length, label: "client projects" },
  ].filter((s) => s.n > 0);

  return (
    <>
      {/* Intro */}
      <section className="container pb-14 pt-12 sm:pt-20">
        <div className="flex flex-col-reverse gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl xl:max-w-4xl">
            <p className="eyebrow mb-4">{PROFILE.role}</p>
            <h1 className="text-[2rem] font-semibold leading-[1.15] tracking-tight sm:text-5xl xl:text-6xl">
              Hi, I&apos;m {PROFILE.name.split(" ")[0]}. I build websites and Android apps that businesses actually use.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{PROFILE.intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={whatsappLink()} target="_blank" rel="noopener" className="btn-primary">
                <MessageCircle size={16} /> WhatsApp me
              </a>
              <a href="#work" className="btn-ghost">See my work</a>
            </div>
          </div>
          <Image
            src={PROFILE.photo}
            alt={PROFILE.name}
            width={300}
            height={300}
            priority
            className="h-28 w-28 shrink-0 rounded-full bg-surface object-cover sm:h-52 sm:w-52 xl:h-72 xl:w-72"
          />
        </div>
        <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl2 border border-line bg-line sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-bg p-5">
              <dt className="text-sm text-muted">{s.label}</dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight">{s.n}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Work */}
      <section id="work" className="border-t border-line bg-surface/50 py-16">
        <div className="container">
          <div className="mb-8 max-w-2xl">
            <p className="eyebrow mb-2">Portfolio</p>
            <h2 className="section-title">Everything I&apos;ve built</h2>
            <p className="mt-3 text-muted">
              Real projects with screenshots, the technology used and when each was built. Tap any project for the full details and links.
            </p>
          </div>
          <WorkGrid projects={cardData} />

          <div className="mt-16">
            <h3 className="text-lg font-semibold">Also built</h3>
            <p className="mt-1 text-sm text-muted">Smaller apps, tools and work in progress. Screenshots coming soon.</p>
            <ul className="mt-5 divide-y divide-line overflow-hidden rounded-xl2 border border-line bg-bg">
              {MORE_PROJECTS.map((m) => (
                <li key={m.name} className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-center sm:gap-4">
                  <span className="font-medium sm:w-64 sm:shrink-0">{m.name}</span>
                  <span className="flex-1 text-sm text-muted">{m.tagline}</span>
                  <span className="text-xs text-muted sm:w-28 sm:text-right">
                    {m.status === "ready" ? "Ready to launch" : "In progress"}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container py-16">
        <div className="mb-8 max-w-2xl">
          <p className="eyebrow mb-2">Services & prices</p>
          <h2 className="section-title">Clear prices, fixed before we start</h2>
          <p className="mt-3 text-muted">
            Starting prices for common projects. You get an exact quote after a short call — no hidden charges. 50% advance, 50% on delivery.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <div key={s.title} className="flex flex-col rounded-xl2 border border-line p-5">
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-muted">{s.forWho}</p>
              <p className="mt-4 text-2xl font-semibold tracking-tight">{s.price}</p>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
                <Clock size={14} /> Delivery in {s.time}
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {s.includes.map((i) => (
                  <li key={i} className="flex gap-2">
                    <Check size={16} className="mt-0.5 shrink-0 text-good" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="border-t border-line bg-surface/50 py-16">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="eyebrow mb-2">How I work</p>
            <h2 className="section-title">From idea to launch</h2>
            <p className="mt-3 text-muted">
              You always know what&apos;s happening. Most business websites go live within a week; apps within 2–4 weeks.
            </p>
          </div>
          <ol className="space-y-5">
            {PROCESS.map((p, i) => (
              <li key={p.step} className="flex gap-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line bg-bg text-sm font-semibold">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-medium">{p.step}</h3>
                  <p className="mt-0.5 text-sm text-muted">{p.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Stack */}
      <section className="container py-16">
        <p className="eyebrow mb-2">Technology</p>
        <h2 className="section-title mb-8">Tools I use</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {STACK.map((g) => (
            <div key={g.group}>
              <h3 className="mb-3 text-sm font-medium">{g.group}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-line py-16">
        <div className="container">
          <div className="rounded-xl2 bg-ink px-6 py-10 text-bg sm:px-10 sm:py-14">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Have a project in mind?</h2>
            <p className="mt-3 max-w-xl opacity-75">
              Tell me what you need — a website for your shop, an app for your students, or something new. I usually reply within a few hours.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={whatsappLink()} target="_blank" rel="noopener" className="btn bg-[#25D366] text-white hover:bg-[#1fbe5a]">
                <MessageCircle size={16} /> WhatsApp
              </a>
              <a href={`tel:+${PROFILE.phoneRaw}`} className="btn border border-bg/25 hover:bg-bg/10">
                <Phone size={16} /> {PROFILE.phone}
              </a>
              <a href={`mailto:${PROFILE.email}`} className="btn border border-bg/25 hover:bg-bg/10">
                <Mail size={16} /> Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
