import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - AI Photo Transformation Tips & Tutorials",
  description:
    "Discover tips, tutorials, and insights on AI photo transformation. Learn how to create stunning art from your photos with Prismorph's AI-powered filters.",
  keywords: [
    "AI photo blog",
    "photo transformation tips",
    "AI art tutorials",
    "photo editing guide",
    "AI filters tips",
    "image transformation",
    "creative photography",
  ],
  openGraph: {
    title: "Prismorph Blog - AI Photo Transformation Tips & Tutorials",
    description:
      "Discover tips, tutorials, and insights on AI photo transformation. Learn how to create stunning art from your photos.",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
