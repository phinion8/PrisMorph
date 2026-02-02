import { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Learn about Prismorph's refund policy for credits and subscription purchases.",
};

export default function RefundPolicy() {
  return (
    <LegalLayout title="Refund Policy" lastUpdated="February 2, 2025">
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">1. Overview</h2>
        <p>
          At Prismorph, we want you to be completely satisfied with your purchase. This Refund Policy
          outlines when and how you can request a refund for credits or subscriptions purchased
          through our Service.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">2. Credit Pack Refunds</h2>

        <h3 className="text-xl font-semibold text-white mb-3">2.1 Eligibility</h3>
        <p>You may be eligible for a refund on credit pack purchases if:</p>
        <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
          <li>You request a refund within <strong>7 days</strong> of purchase</li>
          <li>You have not used any credits from the purchased pack</li>
          <li>The purchase was made in error (duplicate purchase, wrong amount)</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.2 Non-Refundable Cases</h3>
        <p>Credit purchases are <strong>non-refundable</strong> if:</p>
        <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
          <li>Any credits from the pack have been used</li>
          <li>More than 7 days have passed since purchase</li>
          <li>The credits were obtained through promotions or gifts</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">3. Subscription Refunds</h2>

        <h3 className="text-xl font-semibold text-white mb-3">3.1 Monthly & Weekly Subscriptions</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>You can cancel anytime; cancellation takes effect at the end of the billing period</li>
          <li>Partial refunds are not provided for unused days in the billing period</li>
          <li>Full refund available within <strong>48 hours</strong> of first subscription if no credits used</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3 mt-6">3.2 Annual Subscriptions</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Full refund available within <strong>14 days</strong> of purchase if no credits used</li>
          <li>Pro-rated refunds may be considered within the first 30 days on a case-by-case basis</li>
          <li>No refunds after 30 days from purchase date</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3 mt-6">3.3 Subscription Credits</h3>
        <p>
          Monthly subscription credits that go unused do not roll over and are not refundable.
          We recommend choosing a plan that matches your expected usage.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">4. Technical Issues</h2>
        <p>
          If you experience technical issues that prevent you from using the Service, we will:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
          <li><strong>First,</strong> work with you to resolve the issue</li>
          <li><strong>If unresolved,</strong> provide credit compensation for failed transformations</li>
          <li><strong>In extreme cases,</strong> offer a full or partial refund at our discretion</li>
        </ul>
        <p className="mt-4">
          Please report technical issues within <strong>72 hours</strong> of occurrence with screenshots
          or details of the problem.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">5. Quality Concerns</h2>
        <p>
          While we strive for the best results, AI-generated transformations may vary. We do not
          provide refunds solely because:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
          <li>The transformation did not meet subjective expectations</li>
          <li>The artistic style was different from what was imagined</li>
          <li>The source image quality affected the output</li>
        </ul>
        <p className="mt-4">
          We recommend trying the demo or free credits before making a purchase to ensure our
          Service meets your needs.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">6. How to Request a Refund</h2>
        <p>To request a refund:</p>
        <ol className="list-decimal list-inside space-y-3 ml-4 mt-3">
          <li>
            <strong>Email us</strong> at{" "}
            <a href="mailto:refunds@prismorph.com" className="text-primary-400 hover:text-primary-300">
              refunds@prismorph.com
            </a>
          </li>
          <li>
            <strong>Include:</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Your account email</li>
              <li>Order/transaction ID</li>
              <li>Date of purchase</li>
              <li>Reason for refund request</li>
            </ul>
          </li>
          <li>
            <strong>Wait for response:</strong> We will review your request within 3-5 business days
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">7. Refund Processing</h2>
        <p>Once approved:</p>
        <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
          <li>Refunds are processed to the original payment method</li>
          <li>Credit card refunds may take <strong>5-10 business days</strong> to appear</li>
          <li>You will receive an email confirmation when the refund is processed</li>
          <li>Associated credits will be removed from your account</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">8. Chargebacks</h2>
        <p>
          If you initiate a chargeback with your bank before contacting us:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
          <li>Your account may be suspended pending investigation</li>
          <li>We reserve the right to dispute fraudulent chargebacks</li>
          <li>Please contact us first to resolve any billing issues</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">9. Exceptions</h2>
        <p>
          We reserve the right to make exceptions to this policy on a case-by-case basis,
          particularly for:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
          <li>Long-term loyal customers</li>
          <li>Documented service outages</li>
          <li>Billing errors on our part</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
        <p>
          For refund requests or questions about this policy:
        </p>
        <ul className="list-none space-y-2 mt-3">
          <li>Email: <a href="mailto:refunds@prismorph.com" className="text-primary-400 hover:text-primary-300">refunds@prismorph.com</a></li>
          <li>Support: <a href="mailto:support@prismorph.com" className="text-primary-400 hover:text-primary-300">support@prismorph.com</a></li>
          <li>Response time: 3-5 business days</li>
        </ul>
      </section>

      <section className="p-6 rounded-2xl bg-primary-500/10 border border-primary-500/20">
        <h3 className="text-xl font-semibold text-white mb-3">Summary</h3>
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-medium text-white">Credit Packs</p>
            <p>7-day refund window (if unused)</p>
          </div>
          <div>
            <p className="font-medium text-white">Weekly/Monthly Subscription</p>
            <p>48-hour refund window (if unused)</p>
          </div>
          <div>
            <p className="font-medium text-white">Annual Subscription</p>
            <p>14-day refund window (if unused)</p>
          </div>
          <div>
            <p className="font-medium text-white">Processing Time</p>
            <p>5-10 business days</p>
          </div>
        </div>
      </section>
    </LegalLayout>
  );
}
