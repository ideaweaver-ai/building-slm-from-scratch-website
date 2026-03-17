import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Build Your Own Language Model from Scratch | IdeaWeaver AI Labs",
  description:
    "30-day hands-on program to build your own small language model from scratch. No prior AI experience required. Only $49.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-dark antialiased">{children}</body>
    </html>
  );
}
