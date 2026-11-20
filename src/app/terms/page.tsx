import type { Metadata } from "next";
import Link from "next/link";
import Prose from "@/components/Prose";
import { PROFILE } from "@/data/profile";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Simple terms for working with ${PROFILE.name} and using this website and apps.`,
};

export default function TermsPage() {
  return (
    <Prose title="Terms & Conditions" updated="20 November 2026">
      <p>
        Thank you for visiting. These terms are written in plain language so you always know what to expect when you use this
        website, my apps, or work with me on a project.
      </p>

      <h2>Working together</h2>
      <ul>
        <li>Before we start, you get a written quote with the scope, timeline and price — no hidden charges.</li>
        <li>Payment is simple: 50% advance to begin and 50% on delivery, once you are happy with the result.</li>
        <li>You see progress regularly through demo links or test APKs and can share feedback at every step.</li>
        <li>
          If your plans change, the <Link href="/refund-policy">Refund Policy</Link> explains clearly how cancellations and refunds
          work.
        </li>
        <li>Prices shown on this website are starting prices; your quote is based on your exact needs.</li>
      </ul>

      <h2>Your project belongs to you</h2>
      <p>
        Once the project is completed and paid for, the website or app, its design and its code are yours. Your domain, hosting
        and Play Store account are always registered in your name. With your permission, I may show screenshots of the work in
        this portfolio.
      </p>

      <h2>Support after delivery</h2>
      <p>
        Every project includes 30 days of free fixes and small changes after delivery. Optional yearly maintenance is available if
        you&apos;d like ongoing updates and care.
      </p>

      <h2>Using my apps and this website</h2>
      <ul>
        <li>My free apps and this website are here for you to use and enjoy.</li>
        <li>Please use them fairly and lawfully, and ask me before copying or reselling their content.</li>
        <li>Apps are kept updated, but like all software they are provided as they are, without guarantees.</li>
      </ul>

      <h2>Links to other websites</h2>
      <p>
        This website links to Google Play, client websites, GitHub and LinkedIn for your convenience. Those sites have their own
        terms and privacy policies.
      </p>

      <h2>Questions</h2>
      <p>
        If you have any question about these terms, I&apos;m happy to help — email{" "}
        <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a> or call {PROFILE.phone}. See also the{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>
    </Prose>
  );
}
