import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IdeaWeaver AI Labs | Generative AI Courses for DevOps & Software Engineers",
  description:
    "Hands-on, cohort-based Generative AI programs for Software and DevOps Engineers. Learn AWS Bedrock, AI agents, RAG, fine-tuning, and more. Real GPU access included.",
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
