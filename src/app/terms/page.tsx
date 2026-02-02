import { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the terms and conditions for using Prismorph's AI photo transformation service.",
};

export default function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="February 2, 2025">
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
        <p>
          By accessing or using Prismorph ("Service"), you agree to be bound by these Terms of Service
          ("Terms"). If you do not agree to these Terms, please do not use our Service. These Terms
          apply to all visitors, users, and others who access or use the Service.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
        <p>
          Prismorph provides an AI-powered photo transformation service that allows users to apply
          artistic filters and effects to their photos. Our Service includes:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
          <li>Web-based photo transformation tools</li>
          <li>Mobile applications (iOS and Android - coming soon)</li>
          <li>Various AI-powered artistic filters and effects</li>
          <li>Credit-based and subscription payment options</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts</h2>

        <h3 className="text-xl font-semibold text-white mb-3">3.1 Account Creation</h3>
        <p>
          To use certain features of the Service, you must create an account. You agree to provide
          accurate, current, and complete information during registration and keep your account
          information updated.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3 mt-6">3.2 Account Security</h3>
        <p>
          You are responsible for maintaining the confidentiality of your account credentials and
          for all activities that occur under your account. Notify us immediately of any unauthorized use.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3 mt-6">3.3 Age Requirements</h3>
        <p>
          You must be at least 13 years old to use the Service. If you are under 18, you must have
          parental or guardian consent.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">4. Credits and Subscriptions</h2>

        <h3 className="text-xl font-semibold text-white mb-3">4.1 Credits</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>1 credit = 1 photo transformation</li>
          <li>Credits are non-refundable once purchased</li>
          <li>Credits do not expire</li>
          <li>Credits cannot be transferred to other accounts</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3 mt-6">4.2 Subscriptions</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Subscriptions automatically renew unless cancelled</li>
          <li>Unused credits from subscriptions expire at the end of each billing period</li>
          <li>You may cancel your subscription at any time</li>
          <li>Cancellation takes effect at the end of the current billing period</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3 mt-6">4.3 Pricing Changes</h3>
        <p>
          We reserve the right to modify pricing at any time. Price changes for subscriptions
          will take effect at the next billing cycle after notice is provided.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">5. Acceptable Use</h2>
        <p>You agree NOT to use the Service to:</p>
        <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
          <li>Upload content that infringes on intellectual property rights</li>
          <li>Process images containing illegal content</li>
          <li>Upload photos of individuals without their consent</li>
          <li>Create deepfakes or misleading content intended to deceive</li>
          <li>Generate content that is harmful, abusive, or harassing</li>
          <li>Attempt to reverse-engineer or copy our AI technology</li>
          <li>Use automated systems to access the Service without permission</li>
          <li>Resell or redistribute transformed images commercially without rights</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">6. Content Ownership</h2>

        <h3 className="text-xl font-semibold text-white mb-3">6.1 Your Content</h3>
        <p>
          You retain all rights to the original photos you upload. By uploading photos, you grant
          us a limited license to process and transform your images solely to provide the Service.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3 mt-6">6.2 Transformed Images</h3>
        <p>
          You own the rights to your transformed images for personal and commercial use, subject
          to any third-party rights in the original content.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3 mt-6">6.3 Our Content</h3>
        <p>
          The Service, including its design, features, and AI technology, is owned by Prismorph
          and protected by intellectual property laws. You may not copy, modify, or distribute
          our technology without permission.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">7. Disclaimer of Warranties</h2>
        <p>
          THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND,
          EITHER EXPRESS OR IMPLIED. WE DO NOT GUARANTEE THAT:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
          <li>The Service will be uninterrupted or error-free</li>
          <li>Results will meet your expectations</li>
          <li>Any errors will be corrected</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, PRISMORPH SHALL NOT BE LIABLE FOR ANY INDIRECT,
          INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO
          LOSS OF PROFITS, DATA, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
          <li>Your use or inability to use the Service</li>
          <li>Unauthorized access to your data</li>
          <li>Any third-party conduct on the Service</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">9. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless Prismorph, its officers, directors, employees,
          and agents from any claims, damages, losses, or expenses arising from your use of the
          Service or violation of these Terms.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">10. Termination</h2>
        <p>
          We may terminate or suspend your account at any time for violations of these Terms.
          Upon termination:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
          <li>Your right to use the Service ceases immediately</li>
          <li>Unused credits may be forfeited</li>
          <li>We may delete your account data</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">11. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. We will provide notice of
          material changes by posting the updated Terms on our website. Your continued use of
          the Service after changes constitutes acceptance of the new Terms.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">12. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of India,
          without regard to conflict of law principles.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">13. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us:
        </p>
        <ul className="list-none space-y-2 mt-3">
          <li>Email: <a href="mailto:legal@prismorph.com" className="text-primary-400 hover:text-primary-300">legal@prismorph.com</a></li>
          <li>Website: <a href="https://prismorph.com" className="text-primary-400 hover:text-primary-300">prismorph.com</a></li>
        </ul>
      </section>
    </LegalLayout>
  );
}
