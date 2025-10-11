import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gene Han's Portfolio",
  description: "A showcase of my work and personality.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[--color-background-dark] text-white`}>
        <div className="fixed top-0 left-0 -z-10 h-screen w-full bg-gray-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(39,98,141,0.3),rgba(255,255,255,0))]"></div>
        
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}