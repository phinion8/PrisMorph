import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us - Meet the Team Behind Prismorph",
  description:
    "Meet Priyanshu Verma and Sarthak Puri, the software engineers behind Prismorph. Learn about our mission to make AI-powered photo transformation accessible to everyone.",
  keywords: [
    "Prismorph team",
    "about Prismorph",
    "AI photo app founders",
    "Priyanshu Verma",
    "Sarthak Puri",
  ],
};

const team = [
  {
    name: "Priyanshu Verma",
    role: "Co-Founder & Software Engineer",
    bio: "Passionate about building products that blend creativity with cutting-edge technology. Focused on creating seamless experiences that empower users to express themselves.",
    initial: "PV",
  },
  {
    name: "Sarthak Puri",
    role: "Co-Founder & Software Engineer",
    bio: "Dedicated to crafting seamless user experiences powered by AI innovation. Believes in making complex technology simple and accessible for everyone.",
    initial: "SP",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-500/5 to-accent-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
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
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-gray-300">Building the Future of Photo Editing</span>
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Meet the <span className="text-gradient">Team</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We're two software engineers on a mission to make AI-powered photo
            transformation accessible to everyone. What started as a passion project
            has grown into Prismorph.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          {team.map((member) => (
            <div
              key={member.name}
              className="glass rounded-2xl p-8 text-center group hover:bg-white/10 transition-all duration-300"
            >
              {/* Avatar */}
              <div className="relative inline-block mb-6">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-4xl font-bold">
                  {member.initial}
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
              </div>

              {/* Info */}
              <h2 className="text-2xl font-bold text-white mb-2">{member.name}</h2>
              <p className="text-primary-400 font-medium mb-4">{member.role}</p>
              <p className="text-gray-400 leading-relaxed">{member.bio}</p>

              {/* Social Links */}
              <div className="flex justify-center gap-4 mt-6">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Our Story */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="glass rounded-2xl p-8 sm:p-12">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Story</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Prismorph was born from a simple observation: while AI technology has made incredible
                advances in image processing, most tools were either too complex for everyday users
                or lacked the creative depth that artists and content creators needed.
              </p>
              <p>
                As software engineers with a passion for both technology and creative expression,
                we set out to bridge this gap. We wanted to build something that would put the power
                of advanced AI into everyone's hands — no technical expertise required.
              </p>
              <p>
                Today, Prismorph offers 50+ AI-powered filters that can transform any photo into
                stunning artwork. Whether you're looking to add an anime style to your selfies,
                turn your landscapes into oil paintings, or explore entirely new artistic
                directions, we've built the tools to make it happen in seconds.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What We Believe</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="glass rounded-2xl p-6 text-center">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Simplicity</h3>
              <p className="text-gray-400 text-sm">
                Powerful technology should be easy to use. No learning curve, no complexity.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Creativity</h3>
              <p className="text-gray-400 text-sm">
                Everyone has creative potential. We provide the tools to unlock it.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Privacy</h3>
              <p className="text-gray-400 text-sm">
                Your photos are yours. We process and delete — never store or share.
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20">
            <h3 className="text-2xl font-bold text-white mb-3">Get in Touch</h3>
            <p className="text-gray-400 mb-6">
              Have questions, feedback, or just want to say hello? We'd love to hear from you.
            </p>
            <a
              href="mailto:hello@prismorph.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium hover:opacity-90 transition-opacity"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
