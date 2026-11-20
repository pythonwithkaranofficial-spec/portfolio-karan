import type { Metadata } from "next";
import Link from "next/link";
import Prose from "@/components/Prose";
import { PROFILE, whatsappLink } from "@/data/profile";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: `How payments, cancellations and refunds work for projects with ${PROFILE.name}.`,
};

export default function RefundPolicyPage() {
  return (
    <Prose title="Refund Policy" updated="21 November 2026">
      <p>
        I want every client to <strong>feel comfortable and safe</strong>{" "}starting a project with me. This page explains, in simple
        words, how payments work and what happens if your plans change along the way. If anything here is unclear, just{" "}
        <a href={whatsappLink("Hi Karan, I have a question about your refund policy.")} target="_blank" rel="noopener">
          message me on WhatsApp
        </a>{" "}
        — I&apos;m happy to explain.
      </p>

      <h2>How payment works</h2>
      <ul>
        <li>
          <strong>50% advance</strong>{" "}to begin the project. This reserves my time for your project and covers the planning and
          design work that starts right away.
        </li>
        <li>
          <strong>50% on delivery</strong>, after you have seen the finished website or app and are happy with it.
        </li>
        <li>
          You get a <strong>written quote with the scope, timeline and price</strong>{" "}before you pay anything. This quote is what
          the project is built and checked against.
        </li>
      </ul>

      <h2>If you change your mind before work begins</h2>
      <p>
        If you cancel before I have started any work on your project (no planning, design or development has begun), you receive
        a <strong>full refund</strong>{" "}of your advance.
      </p>

      <h2>If you need to stop the project midway</h2>
      <p>
        Sometimes plans change, and that&apos;s completely okay. Because each project is custom-built and work starts as soon as it
        is confirmed, a part of the amount paid covers the time and effort already spent:
      </p>
      <ul>
        <li>
          <strong>Early stage</strong>{" "}(planning, design or first screens done): you receive <strong>70% of the amount paid</strong>{" "}
          back. 30% covers the work already completed.
        </li>
        <li>
          <strong>Later stage</strong>{" "}(a large part of the development is done): depending on how much has been completed,{" "}
          <strong>30% to 50% of the amount paid</strong>{" "}covers the work done, and <strong>the rest is refunded</strong>{" "}to you.
          I&apos;ll show you exactly what has been built so the amount is clear and fair.
        </li>
        <li>
          In both cases, <strong>you keep everything completed so far</strong>{" "}— designs, files and code — so your money is never
          wasted and you can continue later with me or anyone else.
        </li>
      </ul>

      <h2>If you don&apos;t like the finished work</h2>
      <p>
        My goal is that you are <strong>happy with what you receive</strong>. If the project is fully delivered and it doesn&apos;t
        feel right, here is how we sort it out together:
      </p>
      <ul>
        <li>
          <strong>First, we fix it.</strong>{" "}Tell me what you don&apos;t like. Anything that doesn&apos;t match the written quote is
          corrected <strong>free of charge</strong>, and you also get <strong>2 free rounds of changes</strong>{" "}to the design or
          content within the agreed scope.
        </li>
        <li>
          <strong>If the work doesn&apos;t match what we agreed</strong>{" "}and I&apos;m unable to correct it, you receive a{" "}
          <strong>full refund of your advance</strong>. You should never pay for something that wasn&apos;t delivered as promised.
        </li>
        <li>
          <strong>If the work matches what we agreed</strong>{" "}but you no longer want the project (for example, your plans or business
          needs changed), the <strong>50% advance covers the completed work and is not refunded</strong>{" "}— but{" "}
          <strong>you don&apos;t pay the remaining 50%</strong>. That means you are never charged the full price for a project you
          decided not to use.
        </li>
        <li>
          In that case, the finished project stays safely with me and is <strong>not published or given to anyone else</strong>. If you
          change your mind later, you can get the complete project by paying the remaining 50% — see{" "}
          <a href="#resume">Coming back to a paused project</a>{" "}below.
        </li>
      </ul>

      <h2 id="resume">Coming back to a paused project</h2>
      <p>
        If you stopped your project and later want to continue, you&apos;re always welcome back — and{" "}
        <strong>you never pay twice for work that was already done</strong>.
      </p>
      <ul>
        <li>
          <strong>The amount I kept is fully credited.</strong>{" "}Whatever part of your payment covered the completed work counts
          towards your project, so it is deducted from the total.
        </li>
        <li>
          <strong>To restart</strong>, you pay the amount needed to bring your total paid back up to <strong>50% of the project
          price</strong>, and the remaining <strong>50% on delivery</strong>, as usual.
        </li>
        <li>
          <strong>Example:</strong>{" "}for a ₹20,000 project you paid a ₹10,000 advance and stopped at an early stage. You received
          ₹7,000 back and ₹3,000 covered the work done. When you return, you pay <strong>₹7,000 to restart</strong>{" "}and{" "}
          <strong>₹10,000 on delivery</strong>{" "}— a total of ₹20,000, exactly the original price.
        </li>
        <li>
          <strong>Within 3 months:</strong>{" "}the <strong>same price</strong>{" "}and your full credit apply. Work continues from where it
          stopped.
        </li>
        <li>
          <strong>After 3 months (up to 12 months):</strong>{" "}your <strong>full credit still applies</strong>. If technology, Play Store
          rules or your requirements have changed, some updates may be needed; any extra cost is shared in a{" "}
          <strong>written quote before work restarts</strong>, so there are no surprises.
        </li>
        <li>
          <strong>If you want changes to the original plan</strong>, you get a fresh quote for the new scope, with your credit
          still applied.
        </li>
        <li>
          <strong>If the project was completed but not paid in full</strong>{" "}(you didn&apos;t want it at delivery), you can get the
          finished project anytime within 12 months by paying the <strong>remaining 50%</strong>, with any needed updates quoted
          first.
        </li>
        <li>
          The restarted project gets a <strong>new timeline</strong>{" "}based on my availability, and this same refund policy applies
          to it. The credited amount counts as work already done.
        </li>
      </ul>

      <h2>After delivery and full payment</h2>
      <p>
        Once the project is delivered, approved by you and the final payment is made, the payment is not refundable. Instead,
        you get <strong>30 days of free fixes and small changes</strong>{" "}to make sure everything works exactly as agreed. After
        that, optional yearly maintenance is available.
      </p>

      <h2>If I can&apos;t complete the project</h2>
      <p>
        If, for any reason on my side, I&apos;m unable to complete the work we agreed on, you receive a{" "}
        <strong>full refund of the amount paid for the part that was not delivered</strong>.
      </p>

      <h2>Third-party costs</h2>
      <p>
        Things bought in your name — such as a domain, hosting plan, Google Play developer account or paid plugins — are paid
        directly to those companies and follow their own refund rules. They <strong>always stay registered to you</strong>, so you
        never lose them.
      </p>

      <h2>How refunds are paid</h2>
      <p>
        Just send a message on WhatsApp or email <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>. I&apos;ll confirm the
        amount with you, and the refund is sent to your original payment method (UPI or bank transfer) within{" "}
        <strong>7 working days</strong>.
      </p>

      <p>
        See also the <Link href="/terms">Terms &amp; Conditions</Link>{" "}and <Link href="/privacy">Privacy Policy</Link>.
      </p>
    </Prose>
  );
}
