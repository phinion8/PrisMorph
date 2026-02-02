"use client";

import { useState } from "react";
import Link from "next/link";
import { blogPosts, categories } from "@/data/blog";
import BlogCard from "@/components/BlogCard";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSubscribed(true);
        setEmail("");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const featuredPost = blogPosts[0];
  const regularPosts = filteredPosts.filter(
    (post) => post.slug !== featuredPost.slug
  );

  return (
    <main className="min-h-screen pt-12 sm:pt-24 pb-16 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
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
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Prismorph <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tips, tutorials, and insights on AI photo transformation, creative
            photography, and making the most of your images.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {activeCategory === "All" && (
          <div className="mb-12">
            <h2 className="text-sm font-medium text-primary-400 uppercase tracking-wider mb-4">
              Featured Article
            </h2>
            <BlogCard post={featuredPost} featured />
          </div>
        )}

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(activeCategory === "All" ? regularPosts : filteredPosts).map(
            (post) => (
              <BlogCard key={post.slug} post={post} />
            )
          )}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400">
              No articles found in this category.
            </p>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="mt-16 p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            Stay Updated with Prismorph
          </h3>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Get the latest tips, tutorials, and updates on AI photo
            transformation delivered to your inbox.
          </p>
          {isSubscribed ? (
            <div className="flex items-center justify-center gap-2 text-green-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>You&apos;re subscribed!</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isLoading ? "..." : "Subscribe"}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
