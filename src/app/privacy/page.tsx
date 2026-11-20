import type { Metadata } from "next";
import Link from "next/link";
import Prose from "@/components/Prose";
import { PROFILE } from "@/data/profile";
import { PROJECTS } from "@/data/projects";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${PROFILE.name}'s portfolio website and apps.`,
};

export default function PrivacyPage() {
  const apps = PROJECTS.filter((p) => p.links.play);
  return (
    <Prose title="Privacy Policy" updated="20 November 2026">
      <p>
        Your privacy matters to me. I collect as little information as possible and only use it to help you. This policy covers
        this portfolio website and the apps and websites published by {PROFILE.name} (&quot;I&quot;, &quot;me&quot;). Apps that
        have their own privacy policy inside the app or on their Play Store listing follow that policy first.
      </p>
      {apps.length > 0 && (
        <>
          <h2>Apps covered</h2>
          <ul>
            {apps.map((a) => (
              <li key={a.slug}>{a.name}</li>
            ))}
          </ul>
        </>
      )}
      <h2>What I collect</h2>
      <ul>
        <li>
          <strong>Messages you send me.</strong> If you contact me by WhatsApp, phone or email, I keep your name, number or email and
          your message only to reply and to work on your project.
        </li>
        <li>
          <strong>Basic website logs.</strong> The hosting provider (Vercel) records standard technical data such as browser type and IP
          address for security and performance. I don&apos;t run my own tracking on this website.
        </li>
        <li>
          <strong>App data.</strong> My apps store progress and settings on your device. Data stays on your phone unless a feature
          clearly needs an account or online sync.
        </li>
      </ul>
      <h2>Advertising and third-party services</h2>
      <p>
        Some free apps show ads through Google AdMob and use Google Play services or Firebase for sign-in, achievements and crash
        reports. These services may collect device identifiers under Google&apos;s own privacy policy. Apps that generate content with
        AI send only the text you enter to the AI provider.
      </p>
      <h2>Children</h2>
      <p>
        Learning apps for children are designed to follow Google Play&apos;s Families policy: no personal information is asked from
        children, and any ads shown are limited to family-safe ad settings.
      </p>
      <h2>Sharing and security</h2>
      <p>Your information is safe with me: I never sell or rent personal data, and this website uses secure HTTPS connections.</p>
      <h2>Your rights</h2>
      <p>
        You can ask anytime what data I hold about you or have it deleted — just email{" "}
        <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a> and I&apos;ll take care of it. See also the{" "}
        <Link href="/terms">Terms &amp; Conditions</Link> and <Link href="/refund-policy">Refund Policy</Link>.
      </p>
    </Prose>
  );
}
