import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coming Soon - Mobile App",
  description:
    "Prismorph mobile app is coming soon to iOS and Android. Sign up for our newsletter to be the first to know when we launch and get exclusive early access.",
  openGraph: {
    title: "Prismorph Mobile App - Coming Soon",
    description:
      "Transform photos into stunning art on the go. Prismorph mobile app launching soon on iOS and Android.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prismorph Mobile App - Coming Soon",
    description:
      "Transform photos into stunning art on the go. Prismorph mobile app launching soon on iOS and Android.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ComingSoonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
