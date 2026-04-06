import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Live Compiler & AI Logic Analyzer",
  description: "Advanced AI-powered real-time competitive programming IDE and algorithm visualizer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Defaulting to dark theme for that professional IDE vibe!
    <html lang="en" data-theme="dark">
      <body>
        {children}
      </body>
    </html>
  );
}
