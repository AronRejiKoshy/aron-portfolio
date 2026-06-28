import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { CorporateModeProvider } from "@/components/corporate-mode";
import { SiteChrome } from "@/components/site-chrome";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Aron Reji | Professionally Distracted",
  description:
    "The digital playground of Aron Reji. I bridge the gap between strategy and art direction by building campaigns people actually want to look at.",
  icons: {
    icon: "/favicon.png",
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