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

      <section className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Important: App Store Purchases</h2>
        <p>
          If you purchased a subscription or credits through the <strong>Apple App Store</strong> or{" "}
          <strong>Google Play Store</strong>, refunds are handled directly by Apple or Google,
          not by Prismorph. Please contact them for refund requests:
        </p>
        <ul className="list-none space-y-3 mt-4">
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            <div>
              <strong className="text-white">Apple App Store</strong>
              <p className="text-sm mt-1">
                Request refund at{" "}
                <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300">
                  reportaproblem.apple.com
                </a>
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
            </svg>
            <div>
              <strong className="text-white">Google Play Store</strong>
              <p className="text-sm mt-1">
                Request refund at{" "}
                <a href="https://play.google.com/store/account/subscriptions" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300">
                  play.google.com/store/account/subscriptions
                </a>
              </p>
            </div>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">2. Web Purchases</h2>
        <p>
          For purchases made directly on our website (prismorph.com), the following refund
          policies apply:
        </p>

        <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.1 Credit Pack Refunds</h3>
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
        <h2 className="text-2xl font-bold text-white mb-4">3. Subscription Cancellation</h2>

        <h3 className="text-xl font-semibold text-white mb-3">3.1 How to Cancel</h3>
        <p>
          To cancel your subscription, you must do so through the platform where you originally subscribed:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
          <li><strong>Apple App Store:</strong> Settings → Apple ID → Subscriptions → Prismorph → Cancel</li>
          <li><strong>Google Play:</strong> Play Store → Menu → Subscriptions → Prismorph → Cancel</li>
          <li><strong>Website:</strong> Account Settings → Subscription → Cancel</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3 mt-6">3.2 What Happens After Cancellation</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>You'll continue to have access until the end of your billing period</li>
          <li>Unused subscription credits expire at the end of the billing period</li>
          <li>Purchased credit packs remain available (they don't expire)</li>
          <li>You can resubscribe at any time</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">4. Technical Issues</h2>
        <p>
          If you experience technical issues that prevent you from using the Service:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
          <li>Contact us at <a href="mailto:support@prismorph.com" className="text-primary-400 hover:text-primary-300">support@prismorph.com</a></li>
          <li>We will work with you to resolve the issue</li>
          <li>Credit compensation may be provided for failed transformations</li>
          <li>Report issues within <strong>72 hours</strong> with screenshots if possible</li>
        </ul>
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
          We recommend trying the free transformations before making a purchase to ensure our
          Service meets your needs.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
        <p>
          For questions about this policy or web purchase issues:
        </p>
        <ul className="list-none space-y-2 mt-3">
          <li>Email: <a href="mailto:support@prismorph.com" className="text-primary-400 hover:text-primary-300">support@prismorph.com</a></li>
          <li>Response time: 2-3 business days</li>
        </ul>
      </section>

      <section className="p-6 rounded-2xl bg-primary-500/10 border border-primary-500/20">
        <h3 className="text-xl font-semibold text-white mb-3">Quick Summary</h3>
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-medium text-white">App Store / Google Play</p>
            <p>Refunds handled by Apple/Google</p>
          </div>
          <div>
            <p className="font-medium text-white">Web Credit Packs</p>
            <p>7-day refund window (if unused)</p>
          </div>
          <div>
            <p className="font-medium text-white">Cancellation</p>
            <p>Cancel anytime, access until period ends</p>
          </div>
          <div>
            <p className="font-medium text-white">Support</p>
            <p>support@prismorph.com</p>
          </div>
        </div>
      </section>
    </LegalLayout>
  );
}
