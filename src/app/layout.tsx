import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Predict GeM Bid Prices & Win Contracts | gembid.help | #1 GeM Intelligence Tool",
  description: "Don't guess. Win contracts. We indexed the entire GeM portal to predict winning bid prices using advanced AI. Stop losing profit and start winning Government e-Marketplace tenders today.",
  applicationName: 'gembid.help',
  authors: [{ name: 'Pratham Garg', url: 'https://gembid.help' }],
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  creator: 'Pratham Garg',
  publisher: 'gembid.help',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://gembid.help'),
  alternates: {
    canonical: '/',
  },
  keywords: [
    "GeM", "Government e-Marketplace", "GeM Bid Price", "Predict GeM Bids", 
    "Win GeM Tenders", "GeM Consultancy", "GeM Portal Search", 
    "Bid Intelligence", "Artificial Intelligence for GeM", "Contract Winning Tool",
    "L1 Prediction", "Tender Analysis", "Public Procurement India",
    "Etenders", "GeM Registration", "GeM Login", "Central Public Procurement Portal",
    "CPPP", "GeM Reverse Auction", "Direct Purchase GeM", "L1 Purchase GeM",
    "GeM Brand Approval", "GeM Vendor Assessment", "GeM Catalogue Management"
  ],
  openGraph: {
    title: "Win More GeM Tenders with AI Price Prediction",
    description: "Stop guessing L1 prices. Use our AI to find the exact winning price for any item on the Government e-Marketplace.",
    url: 'https://gembid.help',
    siteName: 'gembid.help',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: "Predict GeM Bid Prices Instantly",
    description: "The only tool you need to win Government e-Marketplace contracts. AI-powered bid intelligence.",
    creator: "@prathamgarg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Geo-Tags for Local SEO (India)
  other: {
    'geo.region': 'IN',
    'geo.placename': 'India',
  }
};

import { Footer } from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "gembid.help",
    "url": "https://gembid.help",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    },
    "description": "AI-powered tool to predict winning bid prices on the Government e-Marketplace (GeM). Helps contractors and OEMs win more tenders by analyzing historical data.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "1250"
    }
  };

  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "gembid.help",
    "url": "https://gembid.help",
    "logo": "https://gembid.help/icon.png",
    "sameAs": [
      "https://github.com/PrathamGarg1/gemjsr"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-0000000000",
      "contactType": "sales",
      "areaServed": "IN",
      "availableLanguage": "en"
    }
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "How do I predict the L1 price on GeM?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simply use gembid.help. Enter the item name, and our AI analyzes millions of past records to show you the most relevant winning prices and quantities."
      }
    }, {
      "@type": "Question",
      "name": "Is this tool accurate for GeM tenders?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We use advanced Bi-Encoder and Cross-Encoder AI models to semantically match your query against a massive database of actual indexed GeM data."
      }
    }, {
      "@type": "Question",
      "name": "Can this help me win more government contracts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. By knowing the historical winning prices, you can bid competitively without undercutting your own profits. It is the ultimate competitive advantage."
      }
    }]
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://gembid.help"
    }, {
      "@type": "ListItem",
      "position": 2,
      "name": "GeM Tools",
      "item": "https://gembid.help/#tools"
    }, {
      "@type": "ListItem",
      "position": 3,
      "name": "Bid Prediction",
      "item": "https://gembid.help/#predict"
    }]
  };

  return (
    <html lang="en">
       <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
         <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
