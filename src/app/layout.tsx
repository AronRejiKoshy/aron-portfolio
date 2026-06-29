import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { CorporateModeProvider } from "@/components/corporate-mode";
import { SiteChrome } from "@/components/site-chrome";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aronreji.com"),
  alternates: {
    canonical: "/", // This tells Google: "Yes, the www version is the master copy!"
  },
  title: "Aron Reji | Professionally Distracted",
  description:
    "The digital playground of Aron Reji. I bridge the gap between strategy and art direction by building campaigns people actually want to look at.",
  keywords: [
    "Creative Strategist",
    "Advertising",
    "Brand Strategy",
    "Campaign",
    "Portfolio",
    "Creative",
    "Speculative Design",
    "Art Direction",
    "Aron Reji",
  ],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Aron Reji | Professionally Distracted",
    description: "The digital playground of Aron Reji. I bridge the gap between strategy and art direction by building campaigns people actually want to look at.",
    url: "https://www.aronreji.com",
    siteName: "Aron Reji Portfolio",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Aron Reji - Professionally Distracted",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CorporateModeProvider>
          <SiteChrome>{children}</SiteChrome>
        </CorporateModeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}