import Link from "next/link";
import { BlogPost } from "@/data/blog";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article
        className={`glass rounded-2xl overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:bg-white/10 ${
          featured ? "md:flex" : ""
        }`}
      >
        {/* Image */}
        <div
          className={`relative overflow-hidden ${
            featured ? "md:w-1/2" : "aspect-[16/9]"
          }`}
        >
          <div
            className={`w-full bg-gradient-to-br from-primary-500/30 to-accent-500/30 ${
              featured ? "h-64 md:h-full" : "h-full"
            }`}
          >
            {/* Placeholder gradient - replace with actual images */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="w-16 h-16 text-white/20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary-500/80 text-white">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className={`p-6 ${featured ? "md:w-1/2 md:p-8 md:flex md:flex-col md:justify-center" : ""}`}>
          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span className="flex items-center gap-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {post.readTime} min read
            </span>
          </div>

          {/* Title */}
          <h3
            className={`font-bold text-white group-hover:text-primary-400 transition-colors mb-3 ${
              featured ? "text-2xl md:text-3xl" : "text-xl"
            }`}
          >
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className={`text-gray-400 mb-4 ${featured ? "" : "line-clamp-2"}`}>
            {post.excerpt}
          </p>

          {/* Read More */}
          <div className="flex items-center gap-2 text-primary-400 font-medium">
            <span>Read More</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}
