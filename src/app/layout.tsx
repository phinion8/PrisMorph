import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prismorph - Transform Your Photos with AI",
  description:
    "Prismorph uses cutting-edge AI to transform your photos into stunning art. Apply magical filters, artistic effects, and creative transformations in seconds.",
  keywords: [
    "AI photo editor",
    "photo transformation",
    "AI filters",
    "artistic effects",
    "photo art",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
