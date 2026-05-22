import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"
  ),
  title: "Janne — More of the work that actually matters.",
  description:
    "I help small business founders in wellness, movement, and sustainability get their time back. Less admin. More of the work you built this for.",
  openGraph: {
    title: "Janne — More of the work that actually matters.",
    description:
      "I help small business founders in wellness, movement, and sustainability get their time back.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
