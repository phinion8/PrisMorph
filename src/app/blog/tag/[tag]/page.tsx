import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllTags, getPostsByTag, slugToTag, tagToSlug } from "@/data/blog";
import BlogCard from "@/components/BlogCard";

interface TagPageProps {
  params: Promise<{ tag: string }>;
}

export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({
    tag: tagToSlug(tag),
  }));
}

export async function generateMetadata({
  params,
}: TagPageProps): Promise<Metadata> {
  const { tag: tagSlug } = await params;
  const tag = slugToTag(tagSlug);

  if (!tag) {
    return {
      title: "Tag Not Found",
    };
  }

  const posts = getPostsByTag(tag);

  return {
    title: `${tag} Articles - Prismorph Blog`,
    description: `Browse ${posts.length} articles about ${tag}. Learn tips, tutorials, and insights about ${tag} and AI photo transformation.`,
    keywords: [tag, "AI photo transformation", "photo editing", "Prismorph"],
    openGraph: {
      title: `${tag} Articles - Prismorph Blog`,
      description: `Browse ${posts.length} articles about ${tag}. Learn tips, tutorials, and insights about ${tag} and AI photo transformation.`,
      type: "website",
      siteName: "Prismorph",
    },
    twitter: {
      card: "summary_large_image",
      title: `${tag} Articles - Prismorph Blog`,
      description: `Browse ${posts.length} articles about ${tag}.`,
    },
    alternates: {
      canonical: `https://prismorph.com/blog/tag/${tagSlug}`,
    },
  };
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag: tagSlug } = await params;
  const tag = slugToTag(tagSlug);

  if (!tag) {
    notFound();
  }

  const posts = getPostsByTag(tag);
  const allTags = getAllTags();

  // JSON-LD for CollectionPage
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${tag} Articles`,
    description: `Articles about ${tag} on Prismorph Blog`,
    url: `https://prismorph.com/blog/tag/${tagSlug}`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: posts.length,
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://prismorph.com/blog/${post.slug}`,
        name: post.title,
      })),
    },
    isPartOf: {
      "@type": "Blog",
      name: "Prismorph Blog",
      url: "https://prismorph.com/blog",
    },
  };

  // JSON-LD for BreadcrumbList
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://prismorph.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://prismorph.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: tag,
        item: `https://prismorph.com/blog/tag/${tagSlug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="min-h-screen pt-24 pb-16 relative">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-gray-500">#{tag}</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 text-primary-400 mb-6">
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
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                />
              </svg>
              <span className="font-medium">Tag</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              <span className="text-gradient">#{tag}</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {posts.length === 1
                ? "1 article"
                : `${posts.length} articles`}{" "}
              tagged with &quot;{tag}&quot;
            </p>
          </div>

          {/* Posts Grid */}
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-400">No articles found with this tag.</p>
            </div>
          )}

          {/* Other Tags */}
          <div className="border-t border-white/10 pt-12">
            <h2 className="text-xl font-bold text-white mb-6 text-center">
              Explore Other Tags
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {allTags
                .filter((t) => t !== tag)
                .map((otherTag) => (
                  <Link
                    key={otherTag}
                    href={`/blog/tag/${tagToSlug(otherTag)}`}
                    className="px-4 py-2 rounded-full text-sm bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  >
                    #{otherTag}
                  </Link>
                ))}
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
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
              <span>Back to all articles</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
