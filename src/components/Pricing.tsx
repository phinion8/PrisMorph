"use client";

import { useState } from "react";

const creditPacks = [
  {
    name: "Starter",
    credits: 10,
    price: 2.99,
    pricePerCredit: 0.30,
    savings: null,
    popular: false,
  },
  {
    name: "Popular",
    credits: 50,
    price: 9.99,
    pricePerCredit: 0.20,
    savings: 33,
    popular: true,
  },
  {
    name: "Pro",
    credits: 150,
    price: 19.99,
    pricePerCredit: 0.13,
    savings: 56,
    popular: false,
  },
  {
    name: "Ultimate",
    credits: 500,
    price: 49.99,
    pricePerCredit: 0.10,
    savings: 67,
    popular: false,
  },
];

const subscriptionPlans = [
  {
    name: "Weekly",
    price: 3.99,
    period: "week",
    credits: 30,
    creditsLabel: "credits/week",
    features: [
      "30 credits every week",
      "All basic filters",
      "Standard quality exports",
      "Email support",
    ],
    popular: false,
    badge: null,
  },
  {
    name: "Monthly",
    price: 9.99,
    period: "month",
    credits: 150,
    creditsLabel: "credits/month",
    features: [
      "150 credits every month",
      "All premium filters",
      "HD quality exports",
      "Priority processing",
      "Priority support",
    ],
    popular: true,
    badge: "Most Popular",
  },
  {
    name: "Annual",
    price: 79.99,
    period: "year",
    monthlyPrice: 6.67,
    credits: 200,
    creditsLabel: "credits/month",
    features: [
      "200 credits every month",
      "All premium filters",
      "4K quality exports",
      "Priority processing",
      "Early access to new filters",
      "Dedicated support",
    ],
    popular: false,
    badge: "Best Value",
  },
];

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<"credits" | "subscription">("subscription");

  return (
    <section id="pricing" className="py-12 sm:py-16 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Choose the plan that works for you. Start with credits or subscribe for the best value.
          </p>

          {/* Tab Switcher */}
          <div className="inline-flex items-center p-1.5 rounded-full glass">
            <button
              onClick={() => setActiveTab("subscription")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "subscription"
                  ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Subscriptions
            </button>
            <button
              onClick={() => setActiveTab("credits")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "credits"
                  ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Credit Packs
            </button>
          </div>
        </div>

        {/* Subscription Plans */}
        {activeTab === "subscription" && (
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 animate-fade-in items-stretch">
            {subscriptionPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl p-6 sm:p-8 transition-all duration-300 flex flex-col h-full ${
                  plan.popular
                    ? "glass border-primary-500/50 scale-[1.02] shadow-xl shadow-primary-500/10"
                    : "glass glass-hover"
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-bold uppercase tracking-wide shadow-lg">
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl sm:text-5xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400">/{plan.period}</span>
                  </div>
                  {plan.monthlyPrice && (
                    <p className="text-sm text-primary-400 mt-1">
                      Just ${plan.monthlyPrice}/month
                    </p>
                  )}
                </div>

                {/* Credits Badge */}
                <div className="flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 mb-6">
                  <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-bold text-white">{plan.credits}</span>
                  <span className="text-gray-400 text-sm">{plan.creditsLabel}</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 flex-grow">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="/coming-soon"
                  className={`block w-full py-3.5 rounded-2xl font-semibold text-center transition-all duration-300 mt-8 ${
                    plan.popular
                      ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:opacity-90 shadow-lg shadow-primary-500/25"
                      : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Credit Packs */}
        {activeTab === "credits" && (
          <div className="animate-fade-in">
            {/* Info Banner */}
            <div className="max-w-2xl mx-auto mb-10 p-4 rounded-2xl bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 text-center">
              <p className="text-gray-300 text-sm">
                <span className="text-primary-400 font-medium">1 credit = 1 transformation.</span> Credits never expire. Buy once, use anytime.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {creditPacks.map((pack) => (
                <div
                  key={pack.name}
                  className={`relative rounded-3xl p-6 transition-all duration-300 ${
                    pack.popular
                      ? "glass border-primary-500/50 scale-[1.02] shadow-xl shadow-primary-500/10"
                      : "glass glass-hover"
                  }`}
                >
                  {/* Popular Badge */}
                  {pack.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-bold uppercase tracking-wide">
                        Best Seller
                      </span>
                    </div>
                  )}

                  {/* Savings Badge */}
                  {pack.savings && (
                    <div className="absolute -top-3 -right-2">
                      <span className="px-2 py-1 rounded-lg bg-green-500 text-white text-xs font-bold">
                        -{pack.savings}%
                      </span>
                    </div>
                  )}

                  {/* Pack Content */}
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-white mb-1">{pack.name}</h3>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <span className="text-3xl font-bold text-white">{pack.credits}</span>
                      <span className="text-gray-400 text-sm">credits</span>
                    </div>

                    {/* Price */}
                    <div className="mb-2">
                      <span className="text-3xl font-bold text-white">${pack.price}</span>
                    </div>
                    <p className="text-xs text-gray-500 mb-6">
                      ${pack.pricePerCredit.toFixed(2)} per credit
                    </p>

                    {/* Buy Button */}
                    <a
                      href="/coming-soon"
                      className={`block w-full py-3 rounded-xl font-semibold text-center transition-all duration-300 ${
                        pack.popular
                          ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:opacity-90"
                          : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                      }`}
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQ / Trust Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>Cancel Anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <span>All Major Cards</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Credits Never Expire</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
