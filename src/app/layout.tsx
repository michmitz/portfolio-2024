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
  title: "michellestermitz.com",
  description: "Frontend software engineer based in the Pacific Northwest.",
  metadataBase: new URL("https://michellestermitz.com"),
  openGraph: {
    title: "michellestermitz.com",
    description: "Frontend software engineer based in the Pacific Northwest.",
    type: "website",
    url: "https://michellestermitz.com",
    siteName: "Michelle Stermitz",
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Michelle Stermitz - Frontend Software Engineer",
      },
    ],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  manifest: "/site.webmanifest",
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
