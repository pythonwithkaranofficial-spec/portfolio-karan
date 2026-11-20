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
    <Prose title="Terms & Conditions" updated="21 November 2026">
      <p>
        Thank you for visiting. These terms are written in <strong>plain language</strong>{" "}so you always know what to expect when
        you use this website, my apps, or work with me on a project.
      </p>

      <h2>Working together</h2>
      <ul>
        <li>
          Before we start, you get a <strong>written quote with the scope, timeline and price</strong>{" "}— <strong>no hidden
          charges</strong>.
        </li>
        <li>
          Payment is simple: <strong>50% advance to begin</strong>{" "}and <strong>50% on delivery</strong>, once you are happy with the
          result.
        </li>
        <li>
          You <strong>see progress regularly</strong>{" "}through demo links or test APKs and can share feedback at every step.
        </li>
        <li>
          If your plans change, the <Link href="/refund-policy">Refund Policy</Link>{" "}explains clearly how cancellations and refunds
          work.
        </li>
        <li>Prices shown on this website are starting prices; your quote is based on your exact needs.</li>
      </ul>

      <h2>If you don&apos;t like the delivered work</h2>
      <ul>
        <li>
          Anything that doesn&apos;t match the written quote is <strong>corrected free of charge</strong>, and you get{" "}
          <strong>2 free rounds of changes</strong>{" "}within the agreed scope.
        </li>
        <li>
          If the work doesn&apos;t match what we agreed and can&apos;t be corrected, you receive a <strong>full refund of your
          advance</strong>.
        </li>
        <li>
          If the work matches what we agreed but you no longer want it, <strong>the advance covers the completed work</strong>{" "}and{" "}
          <strong>you don&apos;t pay the remaining 50%</strong>. The project is kept safely and not published, so you can still
          get it later by paying the balance.
        </li>
      </ul>

      <h2>Pausing and coming back to a project</h2>
      <ul>
        <li>
          You can <strong>stop a project midway</strong>. You get back <strong>70%</strong>{" "}of the amount paid before the first
          demo, <strong>60%</strong>{" "}after the first demo, and <strong>50%</strong>{" "}after the test version is shared, as
          explained in the <Link href="/refund-policy">Refund Policy</Link>.
        </li>
        <li>
          If there is <strong>no response from you for 30 days</strong>, the project is <strong>paused</strong>{" "}at its current
          stage, after friendly reminders. You can continue anytime within 12 months with your payment fully credited.
        </li>
        <li>
          Waiting time for your replies or content <strong>extends the delivery date</strong>{" "}by the same number of days.
        </li>
        <li>
          If you return later, <strong>the amount that covered completed work is fully credited</strong>{" "}— you never pay twice for
          the same work.
        </li>
        <li>
          Returning <strong>within 3 months</strong>: the <strong>same price</strong>{" "}applies. Returning <strong>within 12
          months</strong>: your credit still applies, and any updates needed are quoted in writing <strong>before</strong>{" "}work
          restarts.
        </li>
        <li>A restarted project gets a new timeline based on availability, and the same terms and refund policy apply to it.</li>
        <li>
          <strong>After 12 months</strong>, the credit and stored files are no longer kept, and returning is treated as a{" "}
          <strong>new project with a fresh quote</strong>.
        </li>
      </ul>

      <h2>Your project belongs to you</h2>
      <p>
        Once the project is <strong>completed and paid for in full</strong>, the website or app, its design and its code are{" "}
        <strong>yours</strong>. Your domain, hosting and Play Store account are <strong>always registered in your name</strong>. If
        a project is stopped midway, you keep the work completed up to that point. With your permission, I may show screenshots
        of the work in this portfolio.
      </p>

      <h2>Support after delivery</h2>
      <p>
        Every project includes <strong>30 days of free fixes and small changes</strong>{" "}after delivery. Optional yearly maintenance
        is available if you&apos;d like ongoing updates and care.
      </p>

      <h2>Using my apps and this website</h2>
      <ul>
        <li>My free apps and this website are here for you to use and enjoy.</li>
        <li>
          Please <strong>use them fairly and lawfully</strong>, and ask me before copying or reselling their content.
        </li>
        <li>Apps are kept updated, but like all software they are provided as they are, without guarantees.</li>
      </ul>

      <h2>Links to other websites</h2>
      <p>
        This website links to Google Play, client websites, GitHub and LinkedIn for your convenience. Those sites have their own
        terms and privacy policies.
      </p>

      <h2>Questions</h2>
      <p>
        If you have any question about these terms, I&apos;m <strong>happy to help</strong>{" "}— email{" "}
        <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>{" "}or call {PROFILE.phone}. See also the{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>
    </Prose>
  );
}
