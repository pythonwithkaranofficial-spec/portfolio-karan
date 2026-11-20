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
      <ul>
        <li>
          Once the project is <strong>completed and paid for in full</strong>, the website or app, its design and its code are{" "}
          <strong>yours</strong>. Your domain, hosting and Play Store account are <strong>always registered in your name</strong>.
        </li>
        <li>
          <strong>Handover happens after the final payment.</strong>{" "}The source code, admin access and final files are handed over,
          and the app is published on your Play Store account, once the final payment is received. Until then, you can test
          everything on a <strong>demo link or test APK</strong>.
        </li>
        <li>If a project is stopped midway, you keep the work completed up to that point, as explained in the Refund Policy.</li>
      </ul>

      <h2>Final payment</h2>
      <ul>
        <li>
          The final 50% is due <strong>within 7 days of delivery</strong>. A friendly reminder is sent before the due date.
        </li>
        <li>
          If the payment is still pending after 7 days, the <strong>demo link and test APK may be paused</strong>{" "}until it is
          received, and everything is restored straight away once it is paid.
        </li>
      </ul>

      <h2>Changes and extra features</h2>
      <ul>
        <li>
          The written quote lists exactly what is included. <strong>New features or pages outside the quote</strong>{" "}are{" "}
          <strong>priced and agreed in writing before</strong>{" "}I start on them, so you always know the cost in advance.
        </li>
        <li>
          Every project includes <strong>2 free rounds of changes</strong>{" "}to the design or content. Further changes are{" "}
          <strong>quoted at a small, fixed charge</strong>{" "}before they are made.
        </li>
      </ul>

      <h2>Support after delivery</h2>
      <p>
        Every project includes <strong>30 days of free fixes and small changes</strong>{" "}after delivery. Optional yearly maintenance
        is available if you&apos;d like ongoing updates and care.
      </p>

      <h2>Your content and your business</h2>
      <ul>
        <li>
          You confirm that the <strong>logos, photos, text and other content you send are yours</strong>{" "}or that you have the
          right to use them. If you&apos;re not sure, I can suggest free or licensed alternatives.
        </li>
        <li>
          Your business remains responsible for its own <strong>legal requirements</strong>{" "}— such as GST, licences, and the
          rules for the products or services you sell.
        </li>
      </ul>

      <h2>Google Play and other services</h2>
      <ul>
        <li>
          <strong>App approval is decided by Google.</strong>{" "}I build every app to follow Google Play&apos;s policies and fix any
          issue Google raises within the agreed scope, but approval itself can&apos;t be guaranteed. A rejection caused by the
          app&apos;s content or business type is not a reason for a refund.
        </li>
        <li>
          Projects may use services such as hosting, payment gateways, maps or AI. If these companies{" "}
          <strong>change their rules, prices or features</strong>, any updates needed after the 30 free days are quoted
          separately.
        </li>
      </ul>

      <h2>Showing the work in my portfolio</h2>
      <p>
        I may show <strong>screenshots and a short description</strong>{" "}of your finished project in this portfolio. If you prefer
        it to stay private, just tell me in writing and it <strong>won&apos;t be shown</strong>.
      </p>

      <h2>Limit of responsibility</h2>
      <p>
        I always work carefully and fix problems quickly. To keep things fair for both sides, my total responsibility for any
        project is <strong>never more than the amount you paid</strong>{" "}for that project.
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
