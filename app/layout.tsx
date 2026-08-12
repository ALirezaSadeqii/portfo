import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Alireza Sadeghi — Web & Full-Stack Developer",
  description:
    "Portfolio of Alireza Sadeghi, a Web & Full-Stack Developer specializing in modern web applications, CRM/ERP systems, REST APIs, and business solutions.",
  keywords: [
    "Alireza Sadeghi",
    "Web Developer",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "Node.js",
    "Istanbul",
    "Portfolio",
  ],
  authors: [{ name: "Alireza Sadeghi" }],
  creator: "Alireza Sadeghi",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Alireza Sadeghi — Web & Full-Stack Developer",
    description:
      "Portfolio of Alireza Sadeghi, a Web & Full-Stack Developer specializing in modern web applications, CRM/ERP systems, REST APIs, and business solutions.",
    siteName: "Alireza Sadeghi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alireza Sadeghi — Web & Full-Stack Developer",
    description:
      "Portfolio of Alireza Sadeghi, a Web & Full-Stack Developer specializing in modern web applications, CRM/ERP systems, REST APIs, and business solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var theme = stored || (prefersDark ? 'dark' : 'light');
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-bg-primary text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
