import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Frank Olloqui | Software Engineer & Creator",
  description: "Portfolio of Frank Olloqui - Software Engineer, Web Developer, and Photographer based in Portland, Oregon",
  keywords: ["software engineer", "web developer", "portfolio", "Portland"],
  authors: [{ name: "Frank Olloqui" }],
  creator: "Frank Olloqui",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://frankolloqui.dev",
    title: "Frank Olloqui | Software Engineer & Creator",
    description: "Portfolio of Frank Olloqui - Software Engineer, Web Developer, and Photographer",
    images: [
      {
        url: "https://frankolloqui.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Frank Olloqui",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frank Olloqui | Software Engineer & Creator",
    description: "Portfolio of Frank Olloqui - Software Engineer, Web Developer, and Photographer",
    creator: "@idkfwank",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
