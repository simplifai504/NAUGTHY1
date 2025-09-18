import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "$NAUGHTY - Playful by nature. Community by design.",
  description:
    "Join the next generation of community-driven tokens on Solana. Celebrating women in web3 with a playful, positive community.",
  keywords: ["Solana", "memecoin", "crypto", "web3", "community", "NAUGHTY"],
  authors: [{ name: "$NAUGHTY Team" }],
  creator: "$NAUGHTY",
  publisher: "$NAUGHTY",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://naughty-token.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "$NAUGHTY - Playful by nature. Community by design.",
    description:
      "Join the next generation of community-driven tokens on Solana. Celebrating women in web3 with a playful, positive community.",
    url: "https://naughty-token.com",
    siteName: "$NAUGHTY",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "$NAUGHTY Token - Community-driven Solana memecoin",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "$NAUGHTY - Playful by nature. Community by design.",
    description:
      "Join the next generation of community-driven tokens on Solana. Celebrating women in web3 with a playful, positive community.",
    images: ["/og-image.jpg"],
    creator: "@PLACEHOLDER_TWITTER",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "PLACEHOLDER_GOOGLE_VERIFICATION",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.jpg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
