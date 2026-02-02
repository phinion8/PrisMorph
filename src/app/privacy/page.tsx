import { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Prismorph collects, uses, and protects your personal information and photos.",
};

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="February 2, 2025">
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
        <p>
          Welcome to Prismorph ("we," "our," or "us"). We are committed to protecting your privacy
          and ensuring the security of your personal information. This Privacy Policy explains how
          we collect, use, disclose, and safeguard your information when you use our AI-powered
          photo transformation service.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>

        <h3 className="text-xl font-semibold text-white mb-3">2.1 Information You Provide</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Account Information:</strong> Email address, name, and password when you create an account</li>
          <li><strong>Payment Information:</strong> Billing details processed securely through our payment providers</li>
          <li><strong>Photos:</strong> Images you upload for transformation</li>
          <li><strong>Communications:</strong> Messages you send to our support team</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.2 Automatically Collected Information</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Device Information:</strong> Device type, operating system, and browser type</li>
          <li><strong>Usage Data:</strong> Features used, transformation styles selected, and app interactions</li>
          <li><strong>Log Data:</strong> IP address, access times, and referring URLs</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
        <p>We use the collected information to:</p>
        <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
          <li>Provide and improve our photo transformation services</li>
          <li>Process your transactions and manage your account</li>
          <li>Send you service-related communications and updates</li>
          <li>Respond to your inquiries and provide customer support</li>
          <li>Analyze usage patterns to enhance user experience</li>
          <li>Prevent fraud and ensure platform security</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">4. Photo Processing & Storage</h2>
        <p>
          <strong className="text-white">Your privacy is our priority.</strong> Here's how we handle your photos:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
          <li>Photos are processed securely using encrypted connections</li>
          <li>Original photos are automatically deleted from our servers within 24 hours after processing</li>
          <li>We do not use your photos to train our AI models without explicit consent</li>
          <li>We do not share, sell, or distribute your photos to third parties</li>
          <li>Transformed images are stored temporarily for you to download</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">5. Data Sharing & Disclosure</h2>
        <p>We may share your information with:</p>
        <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
          <li><strong>Service Providers:</strong> Third-party vendors who assist in operating our service (payment processors, cloud hosting)</li>
          <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
          <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
        </ul>
        <p className="mt-4">
          We do not sell your personal information to advertisers or data brokers.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">6. Data Security</h2>
        <p>
          We implement industry-standard security measures to protect your data:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
          <li>SSL/TLS encryption for all data transmissions</li>
          <li>Secure cloud infrastructure with regular security audits</li>
          <li>Access controls and authentication measures</li>
          <li>Regular security updates and vulnerability assessments</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights</h2>
        <p>You have the right to:</p>
        <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
          <li><strong>Access:</strong> Request a copy of your personal data</li>
          <li><strong>Correction:</strong> Update or correct inaccurate information</li>
          <li><strong>Deletion:</strong> Request deletion of your account and data</li>
          <li><strong>Portability:</strong> Receive your data in a portable format</li>
          <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
        </ul>
        <p className="mt-4">
          To exercise these rights, contact us at{" "}
          <a href="mailto:privacy@prismorph.com" className="text-primary-400 hover:text-primary-300">
            privacy@prismorph.com
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">8. Cookies & Tracking</h2>
        <p>
          We use cookies and similar technologies to enhance your experience, analyze usage,
          and remember your preferences. You can manage cookie preferences through your browser settings.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">9. Children's Privacy</h2>
        <p>
          Prismorph is not intended for children under 13 years of age. We do not knowingly
          collect personal information from children. If you believe we have collected data
          from a child, please contact us immediately.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any
          material changes by posting the new policy on this page and updating the "Last updated" date.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us:
        </p>
        <ul className="list-none space-y-2 mt-3">
          <li>Email: <a href="mailto:privacy@prismorph.com" className="text-primary-400 hover:text-primary-300">privacy@prismorph.com</a></li>
          <li>Website: <a href="https://prismorph.com" className="text-primary-400 hover:text-primary-300">prismorph.com</a></li>
        </ul>
      </section>
    </LegalLayout>
  );
}
