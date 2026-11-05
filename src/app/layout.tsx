import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira-code" });

export const metadata: Metadata = {
  title: "Serge-Antoine Keou Ketchiozo | Systems Defense & Cloud Architecture",
  description: "Senior IT Student at UCF specializing in Cloud Security, Two-Tier DB Systems, and Concurrency Architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${firaCode.variable} font-sans bg-cyber-950 text-slate-200 antialiased selection:bg-cyber-cyan selection:text-cyber-950 min-h-screen relative overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
