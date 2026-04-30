import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Build Your Own Language Model from Scratch | IdeaWeaver AI Labs",
  description:
    "2-day hands-on workshop to build your own small language model from scratch. No prior AI experience required. Only $29.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#09090b] font-sans text-white antialiased">
        {children}
      </body>
    </html>
  );
}
