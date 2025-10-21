import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "0/9 SYSTEM — Strength in Silence",
  description: "Performance engineered for the disciplined few.",
  openGraph: {
    title: "0/9 SYSTEM — Strength in Silence",
    description: "Performance engineered for the disciplined few.",
    url: "https://zero9.co",
    siteName: "0/9 SYSTEM",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
