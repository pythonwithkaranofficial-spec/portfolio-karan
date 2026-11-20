import type { Metadata } from "next";
import Prose from "@/components/Prose";
import { PROFILE } from "@/data/profile";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms for using ${PROFILE.name}'s portfolio website and apps.`,
};

export default function TermsPage() {
  return (
    <Prose title="Terms of Service" updated="20 November 2026">
      <p>
        By using this website or installing an app published by {PROFILE.name}, you agree to these terms. If you don&apos;t agree,
        please don&apos;t use them.
      </p>
      <h2>Ownership</h2>
      <p>
        The code, designs, text and graphics of my own apps and this website belong to me unless stated otherwise. Work built for a
        client belongs to that client as agreed in their project agreement. Screenshots of client work are shown here with permission
        as examples.
      </p>
      <h2>Client projects</h2>
      <p>
        Prices on this site are starting prices. Each project gets a written quote with its scope, timeline and payment schedule
        (usually 50% advance and 50% on delivery) before work begins. That agreement governs the project.
      </p>
      <h2>Acceptable use</h2>
      <ul>
        <li>Don&apos;t copy, resell or redistribute my apps or their content without permission.</li>
        <li>Don&apos;t attack, overload or scrape this website or app servers.</li>
        <li>Don&apos;t use the apps for anything unlawful.</li>
      </ul>
      <h2>Links to other sites</h2>
      <p>
        This site links to Google Play, client websites, GitHub and LinkedIn. I&apos;m not responsible for their content or privacy
        practices.
      </p>
      <h2>No warranty</h2>
      <p>
        Free apps and demos are provided &quot;as is&quot;. To the extent the law allows, I&apos;m not liable for losses from using them or
        from downtime of third-party services.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about these terms: <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>.
      </p>
    </Prose>
  );
}
