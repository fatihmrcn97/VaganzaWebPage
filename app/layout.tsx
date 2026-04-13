import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VAGANZA | Spring Summer 2026",
  description:
    "Premium editorial fashion landing page for VAGANZA, crafted with a cinematic luxury aesthetic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
