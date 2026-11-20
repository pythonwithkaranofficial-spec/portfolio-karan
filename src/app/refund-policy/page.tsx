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
    <Prose title="Refund Policy" updated="20 November 2026">
      <p>
        I want every client to feel comfortable starting a project with me. This page explains, in simple words, how payments
        work and what happens if your plans change along the way. If anything here is unclear, just{" "}
        <a href={whatsappLink("Hi Karan, I have a question about your refund policy.")} target="_blank" rel="noopener">
          message me on WhatsApp
        </a>{" "}
        — I&apos;m happy to explain.
      </p>

      <h2>How payment works</h2>
      <ul>
        <li>
          <strong>50% advance</strong> to begin the project. This reserves my time for your project and covers the planning and
          design work that starts right away.
        </li>
        <li>
          <strong>50% on delivery</strong>, after you have seen the finished website or app and are happy with it.
        </li>
        <li>You get a written quote with the scope, timeline and price before you pay anything.</li>
      </ul>

      <h2>If you change your mind before work begins</h2>
      <p>
        If you cancel before I have started any work on your project (no planning, design or development has begun),
        you receive a <strong>full refund</strong> of your advance.
      </p>

      <h2>If you need to stop the project midway</h2>
      <p>
        Sometimes plans change, and that&apos;s completely okay. Because each project is custom-built and work starts as soon as
        it is confirmed, a part of the amount paid covers the time and effort already spent:
      </p>
      <ul>
        <li>
          <strong>Early stage</strong> (planning, design or first screens done): you receive <strong>70%</strong> of the amount
          paid back. 30% covers the work already completed.
        </li>
        <li>
          <strong>Later stage</strong> (a large part of the development is done): depending on how much has been completed,{" "}
          <strong>30% to 50%</strong>{" "}of the amount paid covers the work done, and the rest is refunded to you. I&apos;ll show you
          exactly what has been built so the amount is clear and fair.
        </li>
        <li>
          In both cases, <strong>you keep everything completed so far</strong> — designs, files and code — so your money is never
          wasted and you can continue later with me or anyone else.
        </li>
      </ul>

      <h2>After delivery</h2>
      <p>
        Once the project is delivered, approved by you and the final payment is made, the payment is not refundable. Instead,
        you get <strong>30 days of free fixes and small changes</strong> to make sure everything works exactly as agreed. After
        that, optional yearly maintenance is available.
      </p>

      <h2>If I can&apos;t complete the project</h2>
      <p>
        If, for any reason on my side, I&apos;m unable to complete the work we agreed on, you receive a full refund of the
        amount paid for the part that was not delivered.
      </p>

      <h2>Third-party costs</h2>
      <p>
        Things bought in your name — such as a domain, hosting plan, Google Play developer account or paid plugins — are
        paid directly to those companies and follow their own refund rules. They always stay registered to you, so you never
        lose them.
      </p>

      <h2>How refunds are paid</h2>
      <p>
        Just send a message on WhatsApp or email <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>. I&apos;ll confirm the
        amount with you, and the refund is sent to your original payment method (UPI or bank transfer) within{" "}
        <strong>7 working days</strong>.
      </p>

      <p>
        See also the <Link href="/terms">Terms &amp; Conditions</Link> and <Link href="/privacy">Privacy Policy</Link>.
      </p>
    </Prose>
  );
}
