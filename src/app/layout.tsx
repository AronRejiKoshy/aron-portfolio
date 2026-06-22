import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { CorporateModeProvider } from "@/components/corporate-mode";
import { SiteChrome } from "@/components/site-chrome";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Aron | Questions Until Something Interesting Happens",
  description:
    "A personal website for Aron, a creative strategist and experience designer working across brand experience, speculative design and campaign thinking.",
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