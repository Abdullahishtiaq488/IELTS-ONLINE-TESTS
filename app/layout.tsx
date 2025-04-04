import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The IELTS Project - Practice Tests",
  description: "Practice IELTS tests online with comprehensive resources and expert guidance",
  keywords: "IELTS, online practice, IELTS tests, IELTS preparation, IELTS tips",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col  `}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-white focus:text-primary-950 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-600"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1 flex flex-col" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
