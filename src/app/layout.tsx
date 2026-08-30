import type { Metadata } from "next";
import { site } from "@/content/site";
import { wedding } from "@/content/wedding";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [...site.keywords],
  authors: [{ name: wedding.couple.groom }, { name: wedding.couple.bride }],
  creator: site.name,
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    locale: "en_IN",
    title: site.title,
    description: site.description,
    images: [
      {
        url: "/images/og-preview.jpg",
        width: 1672,
        height: 941,
        alt: "Jinu and Divyamol wedding invitation — September 2, 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.shortDescription,
    images: ["/images/og-preview.jpg"],
  },
  alternates: {
    canonical: site.url,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
