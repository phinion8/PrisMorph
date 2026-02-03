import CountdownTimer from "@/components/CountdownTimer";
import NewsletterForm from "@/components/NewsletterForm";
import TransformationPreview from "@/components/TransformationPreview";

// Fixed launch date - February 18, 2026 at 00:00:00 UTC
const LAUNCH_DATE = new Date("2026-02-18T00:00:00Z").getTime();

export default function ComingSoon() {
  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden py-8 pb-16 sm:py-8">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-accent-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary-500/5 to-accent-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Snowfall Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large snowflakes */}
        <div className="snowflake" style={{ left: '5%', animationDuration: '8s', animationDelay: '0s', width: '10px', height: '10px' }} />
        <div className="snowflake snowflake-drift" style={{ left: '15%', animationDuration: '10s', animationDelay: '1s', width: '8px', height: '8px' }} />
        <div className="snowflake" style={{ left: '25%', animationDuration: '9s', animationDelay: '2s', width: '12px', height: '12px' }} />
        <div className="snowflake snowflake-drift" style={{ left: '35%', animationDuration: '11s', animationDelay: '0.5s', width: '6px', height: '6px' }} />
        <div className="snowflake" style={{ left: '45%', animationDuration: '8.5s', animationDelay: '3s', width: '9px', height: '9px' }} />
        <div className="snowflake snowflake-drift" style={{ left: '55%', animationDuration: '10.5s', animationDelay: '1.5s', width: '11px', height: '11px' }} />
        <div className="snowflake" style={{ left: '65%', animationDuration: '9.5s', animationDelay: '2.5s', width: '7px', height: '7px' }} />
        <div className="snowflake snowflake-drift" style={{ left: '75%', animationDuration: '8s', animationDelay: '0.8s', width: '10px', height: '10px' }} />
        <div className="snowflake" style={{ left: '85%', animationDuration: '11s', animationDelay: '3.5s', width: '8px', height: '8px' }} />
        <div className="snowflake snowflake-drift" style={{ left: '95%', animationDuration: '9s', animationDelay: '1.8s', width: '6px', height: '6px' }} />
        {/* Medium snowflakes */}
        <div className="snowflake snowflake-drift" style={{ left: '10%', animationDuration: '12s', animationDelay: '4s', width: '5px', height: '5px' }} />
        <div className="snowflake" style={{ left: '20%', animationDuration: '10s', animationDelay: '5s', width: '7px', height: '7px' }} />
        <div className="snowflake snowflake-drift" style={{ left: '30%', animationDuration: '11s', animationDelay: '4.5s', width: '6px', height: '6px' }} />
        <div className="snowflake" style={{ left: '40%', animationDuration: '9.5s', animationDelay: '5.5s', width: '8px', height: '8px' }} />
        <div className="snowflake snowflake-drift" style={{ left: '50%', animationDuration: '10.5s', animationDelay: '4.2s', width: '5px', height: '5px' }} />
        <div className="snowflake" style={{ left: '60%', animationDuration: '12s', animationDelay: '5.8s', width: '9px', height: '9px' }} />
        <div className="snowflake snowflake-drift" style={{ left: '70%', animationDuration: '8.5s', animationDelay: '4.8s', width: '6px', height: '6px' }} />
        <div className="snowflake" style={{ left: '80%', animationDuration: '11.5s', animationDelay: '5.2s', width: '7px', height: '7px' }} />
        <div className="snowflake snowflake-drift" style={{ left: '90%', animationDuration: '9s', animationDelay: '4.6s', width: '5px', height: '5px' }} />
        {/* Small snowflakes */}
        <div className="snowflake" style={{ left: '8%', animationDuration: '13s', animationDelay: '6s', width: '4px', height: '4px' }} />
        <div className="snowflake snowflake-drift" style={{ left: '22%', animationDuration: '14s', animationDelay: '7s', width: '3px', height: '3px' }} />
        <div className="snowflake" style={{ left: '38%', animationDuration: '12s', animationDelay: '6.5s', width: '4px', height: '4px' }} />
        <div className="snowflake snowflake-drift" style={{ left: '52%', animationDuration: '13.5s', animationDelay: '7.5s', width: '3px', height: '3px' }} />
        <div className="snowflake" style={{ left: '68%', animationDuration: '11s', animationDelay: '6.2s', width: '4px', height: '4px' }} />
        <div className="snowflake snowflake-drift" style={{ left: '82%', animationDuration: '14s', animationDelay: '7.2s', width: '3px', height: '3px' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-4 sm:mb-8">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-500/30">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              />
            </svg>
          </div>
          <span className="text-3xl font-bold text-gradient">Prismorph</span>
        </div>

        {/* Coming Soon Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass mb-8">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-500"></span>
          </span>
          <span className="text-sm font-medium text-gray-200">Limited Early Access Spots Available</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="text-white">The Future of</span>
          <br />
          <span className="text-gradient">Photo Transformation</span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          50+ AI-powered filters that turn ordinary photos into museum-worthy art in seconds.
          No design skills needed. Just pure magic at your fingertips.
        </p>

        {/* Transformation Preview */}
        <TransformationPreview />

        {/* Exclusive Benefits */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-green-300">10 Free Credits at Launch</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
            <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-purple-300">Early Access Before Public</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20">
            <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-amber-300">Exclusive Launch Discounts</span>
          </div>
        </div>

        {/* Countdown Timer */}
        <CountdownTimer targetDate={LAUNCH_DATE} />

        {/* Newsletter Section */}
        <NewsletterForm />

        {/* App Store Coming Soon */}
        <div className="mt-6 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 opacity-60 min-w-[180px]">
            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            <div className="text-left">
              <div className="text-[10px] text-gray-500 uppercase tracking-wide">Coming to</div>
              <div className="text-white font-semibold">App Store</div>
            </div>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 opacity-60 min-w-[180px]">
            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
            </svg>
            <div className="text-left">
              <div className="text-[10px] text-gray-500 uppercase tracking-wide">Coming to</div>
              <div className="text-white font-semibold">Google Play</div>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <a
          href="/"
          className="inline-flex items-center gap-2 mt-4 text-gray-400 hover:text-white transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span>Back to Homepage</span>
        </a>
      </div>
    </main>
  );
}
