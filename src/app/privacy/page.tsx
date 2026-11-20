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
    <Prose title="Privacy Policy" updated="21 November 2026">
      <p>
        <strong>Your privacy matters to me.</strong>{" "}I collect <strong>as little information as possible</strong>{" "}and only use it
        to help you. This policy covers this portfolio website and the apps and websites published by {PROFILE.name} (&quot;I&quot;,
        &quot;me&quot;). Apps that have their own privacy policy inside the app or on their Play Store listing follow that policy
        first.
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
          <strong>Messages you send me.</strong>{" "}If you contact me by WhatsApp, phone or email, I keep your name, number or email and
          your message <strong>only to reply and to work on your project</strong>.
        </li>
        <li>
          <strong>Basic website logs.</strong>{" "}The hosting provider (Vercel) records standard technical data such as browser type and IP
          address for security and performance. <strong>I don&apos;t run my own tracking</strong>{" "}on this website.
        </li>
        <li>
          <strong>App data.</strong>{" "}My apps store progress and settings <strong>on your device</strong>. Data stays on your phone
          unless a feature clearly needs an account or online sync.
        </li>
      </ul>
      <h2>Your project files and details</h2>
      <ul>
        <li>
          Content you share for your project — logos, photos, text, login details for your hosting or Play Console — is used{" "}
          <strong>only to build your project</strong>{" "}and is <strong>never shared</strong>{" "}with anyone else.
        </li>
        <li>
          <strong>If you pause or stop a project</strong>, your files, designs and our conversation are kept safely for{" "}
          <strong>up to 12 months</strong>, so you can <strong>continue from where you left off</strong>{" "}if you come back. A project
          you didn&apos;t take at delivery is <strong>never published or given to anyone else</strong>.
        </li>
        <li>
          After 12 months, or <strong>anytime you ask</strong>, your project files and details are <strong>deleted</strong>. Payment
          records are kept only as long as Indian tax law requires.
        </li>
        <li>
          Your finished project may appear in this portfolio as <strong>screenshots and a short description only</strong>{" "}—{" "}
          <strong>never your customers&apos; data, passwords or private details</strong>. If you&apos;d like it kept private, just tell
          me and it won&apos;t be shown.
        </li>
        <li>
          Once your project is complete, <strong>please change any passwords</strong>{" "}you shared with me during the work, for your
          own peace of mind.
        </li>
      </ul>
      <h2>Advertising and third-party services</h2>
      <p>
        Some free apps show ads through Google AdMob and use Google Play services or Firebase for sign-in, achievements and crash
        reports. These services may collect device identifiers under Google&apos;s own privacy policy. Apps that generate content with
        AI send <strong>only the text you enter</strong>{" "}to the AI provider.
      </p>
      <h2>Children</h2>
      <p>
        Learning apps for children are designed to follow Google Play&apos;s Families policy: <strong>no personal information is
        asked from children</strong>, and any ads shown are limited to <strong>family-safe ad settings</strong>.
      </p>
      <h2>Sharing and security</h2>
      <p>
        Your information is safe with me: <strong>I never sell or rent personal data</strong>, and this website uses secure HTTPS
        connections.
      </p>
      <h2>Your rights</h2>
      <p>
        You can ask <strong>anytime</strong>{" "}what data I hold about you or <strong>have it deleted</strong>{" "}— just email{" "}
        <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>{" "}and I&apos;ll take care of it. See also the{" "}
        <Link href="/terms">Terms &amp; Conditions</Link>{" "}and <Link href="/refund-policy">Refund Policy</Link>.
      </p>
    </Prose>
  );
}
