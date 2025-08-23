import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// use latin fonts
const inter = Inter({ subsets: ["latin"] });

// HTML meta data
export const metadata: Metadata = {
  title: "Realtime Ergonomic Dashboard",
  description: "Next.js Realtime Ergonomic Dashboard - CCAM",
};

/**
 * Root layout component.
 *
 * @param {Readonly<{
 children: React.ReactNode;
}>} data - react nodes to render under the root.
 * @param {React.ReactNode} data.children - the react nodes to render under 
 * the root.
 * @returns {RootLayout} The root of the react site.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
