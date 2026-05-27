// Layout — Root layout with metadata
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EarnGap — Wealth Intelligence Hub",
  description: "Turn information gaps into opportunities. Real-time cross-market arbitrage signals, AI-scored opportunities, and wealth intelligence.",
  keywords: ["arbitrage", "trading signals", "wealth intelligence", "crypto arbitrage", "market opportunities"],
  openGraph: {
    title: "EarnGap — Wealth Intelligence Hub",
    description: "Turn information gaps into opportunities",
    siteName: "EarnGap",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
