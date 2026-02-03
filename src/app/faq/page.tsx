"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "What is Prismorph?",
        a: "Prismorph is an AI-powered photo transformation app that converts your photos into stunning art. We offer 50+ artistic filters including Cyberpunk, Oil Painting, Anime, Watercolor, and many more styles.",
      },
      {
        q: "Is Prismorph available on mobile?",
        a: "Our mobile apps for iOS and Android are coming soon! Sign up for our newsletter on the Coming Soon page to be notified when we launch.",
      },
      {
        q: "Do I need to create an account?",
        a: "Yes, you need to create a free account to use Prismorph. This allows us to securely process your photos and manage your credits or subscription.",
      },
    ],
  },
  {
    category: "Credits & Pricing",
    questions: [
      {
        q: "How does the credit system work?",
        a: "1 credit = 1 photo transformation. You can buy credit packs (starting at $2.99 for 10 credits) or subscribe for monthly credits. Purchased credit packs never expire.",
      },
      {
        q: "What's the difference between credit packs and subscriptions?",
        a: "Credit packs are one-time purchases that never expire. Subscriptions give you credits every week/month plus additional benefits like premium filters, HD exports, and priority processing. Subscription credits expire at the end of each billing period.",
      },
      {
        q: "Do unused credits expire?",
        a: "Credit packs: No, they never expire. Subscription credits: Yes, unused monthly/weekly credits expire at the end of each billing period and don't roll over.",
      },
      {
        q: "Can I get a refund?",
        a: "For App Store/Google Play purchases, refunds are handled by Apple or Google, respectively. For web purchases, unused credit packs can be refunded within 7 days. See our Refund Policy for details.",
      },
    ],
  },
  {
    category: "Photo Processing",
    questions: [
      {
        q: "What happens to my photos after processing?",
        a: "Your privacy is our priority. Original photos are automatically deleted from our servers within 24 hours after processing. We never share, sell, or use your photos for AI training without explicit consent.",
      },
      {
        q: "What image formats are supported?",
        a: "We support JPG, PNG, and WEBP formats. Maximum file size is 20MB. For best results, use high-resolution images.",
      },
      {
        q: "How long does a transformation take?",
        a: "Most transformations complete in 10-30 seconds depending on image size and selected filter. Subscribers with priority processing get faster results.",
      },
      {
        q: "Can I use transformed images commercially?",
        a: "Yes! You own the rights to your transformed images for both personal and commercial use, as long as you have rights to the original image.",
      },
    ],
  },
  {
    category: "Filters & Features",
    questions: [
      {
        q: "How many filters are available?",
        a: "We offer 50+ AI-powered filters including Cyberpunk, Oil Painting, Anime, Watercolor, Noir, Fantasy, and many more. We regularly add new filters.",
      },
      {
        q: "What's the difference between basic and premium filters?",
        a: "Basic filters are available to all users. Premium filters offer more advanced artistic styles and are available to subscribers or can be accessed by purchasing credit packs.",
      },
      {
        q: "Can I adjust the intensity of filters?",
        a: "Yes! You can customize the intensity and parameters of most filters before finalizing your transformation.",
      },
    ],
  },
  {
    category: "Account & Subscription",
    questions: [
      {
        q: "How do I cancel my subscription?",
        a: "Cancel through the platform where you subscribed: Apple App Store (Settings → Subscriptions), Google Play (Play Store → Subscriptions), or on our website (Account Settings → Subscription).",
      },
      {
        q: "What happens when I cancel my subscription?",
        a: "You'll continue to have access until the end of your billing period. After that, you'll lose access to premium features, but any purchased credit packs remain available.",
      },
      {
        q: "Can I delete my account?",
        a: "Yes, you can request account deletion by emailing privacy@prismorph.com. We'll delete all your data within 30 days.",
      },
      {
        q: "How do I change my email or password?",
        a: "Go to Account Settings in the app or website to update your email address or change your password.",
      },
    ],
  },
  {
    category: "Technical Issues",
    questions: [
      {
        q: "My transformation failed. Will I lose my credit?",
        a: "No, if a transformation fails due to a technical error on our end, your credit will not be deducted. If it was deducted in error, contact support for a refund.",
      },
      {
        q: "The app is running slow. What should I do?",
        a: "Try clearing your browser cache, using a stable internet connection, or reducing the image size. If issues persist, contact support@prismorph.com.",
      },
      {
        q: "I didn't receive my credits after purchase.",
        a: "Credits are usually instant. If delayed, wait a few minutes and refresh. If still missing, contact support with your transaction ID.",
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left group"
      >
        <span className="font-medium text-white group-hover:text-primary-400 transition-colors pr-4">
          {question}
        </span>
        <span className={`flex-shrink-0 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center transition-transform ${isOpen ? "rotate-180" : ""}`}>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="pb-5 text-gray-400 leading-relaxed animate-fade-in">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("General");

  return (
    <main className="min-h-screen pt-12 sm:pt-24 pb-16 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Find answers to common questions about Prismorph
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {faqs.map((category) => (
            <button
              key={category.category}
              onClick={() => setActiveCategory(category.category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.category
                  ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="glass rounded-2xl p-6 sm:p-8">
          {faqs
            .filter((cat) => cat.category === activeCategory)
            .map((category) => (
              <div key={category.category}>
                {category.questions.map((faq, index) => (
                  <FAQItem key={index} question={faq.q} answer={faq.a} />
                ))}
              </div>
            ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20">
          <h3 className="text-xl font-bold text-white mb-3">Still have questions?</h3>
          <p className="text-gray-400 mb-6">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <a
            href="mailto:support@prismorph.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium hover:opacity-90 transition-opacity"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Support
          </a>
        </div>

        {/* Quick Links */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
          <Link href="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors">
            Privacy Policy
          </Link>
          <span className="text-gray-600">•</span>
          <Link href="/terms" className="text-gray-400 hover:text-primary-400 transition-colors">
            Terms of Service
          </Link>
          <span className="text-gray-600">•</span>
          <Link href="/refund" className="text-gray-400 hover:text-primary-400 transition-colors">
            Refund Policy
          </Link>
        </div>
      </div>
    </main>
  );
}
