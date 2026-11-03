import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { OrganizationSchema, WebSiteSchema } from "@/components/SchemaOrg";
import { siteConfig } from "@/config/site";

export const viewport: Viewport = {
  themeColor: "#364A35",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Forteeza Safe Company | Heavy Commercial Safes & Security Solutions",
    template: "%s | Forteeza Safe Company",
  },
  description:
    "Forteeza Safe Company manufactures heavy-duty safes, tijoris, lockers, and strong-room doors backed by over 50 years of team industry experience.",
  keywords: [
    "safe manufacturers",
    "commercial safes",
    "jewellery showroom safe",
    "fireproof safe",
    "tijori manufacturer",
    "strong room door",
    "bank vault safe",
    "Ghaziabad safe manufacturer",
    "Lucknow safes",
  ],
  authors: [{ name: "Forteeza Safe Company" }],
  creator: "Forteeza Safe Company",
  publisher: "Forteeza Safe Company",
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
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.siteUrl,
    title: "Forteeza Safe Company | Advanced Security. Built on Trust.",
    description:
      "Commercial safes, tijoris, lockers, and strong-room doors for jewellery showrooms, financial institutions, and enterprises.",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/hero/hero-safe.png",
        width: 1200,
        height: 630,
        alt: "Forteeza Heavy Security Safes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forteeza Safe Company | Commercial Safes & Tijoris",
    description:
      "Heavy-duty commercial safes and strong-room doors. 50+ years of team manufacturing experience.",
    images: ["/images/hero/hero-safe.png"],
  },
  icons: {
    icon: "/images/logo/logo.png",
    apple: "/images/logo/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-canvas text-charcoal-900 antialiased selection:bg-olive-200 selection:text-charcoal-950">
        <OrganizationSchema />
        <WebSiteSchema />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
