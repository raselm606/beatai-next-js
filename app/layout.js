 
import { Poppins } from "next/font/google";
import Script from 'next/script';
import BootstrapProvider from "./bootstrap-provider";
import "./globals.css";

// Bootstrap CSS & JS import
import 'bootstrap/dist/css/bootstrap.min.css';
//custom css
import '@/app/beatai_assets/css/responsive.css';
import '@/app/beatai_assets/css/style.css';
//slick slider
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],  
  display: 'swap',
  variable: "--font-poppins",
});

 export const metadata = {
  // base URL 
  metadataBase: new URL("https://beatai.io"),
  title: {
    default: "BeatAI: Meet Lex, our AI agent that consolidates multiple engines into one streamlined platform, designed to meet all your needs across creative and professional fields.",
    template: "%s | BeatAI",
  },
  description:
    "BeatBidder: A decentralized marketplace for live artist auctions. It connects artists, venues and organizers directly, democratizing the booking process and ensuring fair compensation.  BeatBuy: A secure, blockchain-powered ticketing system that eliminates ticket fraud, scalping and hidden fees. Every ticket is authentic and traceable, guaranteeing a seamless fan experience. BeatX: A social engagement engine that fosters vibrant communities. Fans can connect, share experiences and engage with their favorite artists, transforming them into loyal stakeholders. BeatAI: Predictive, Al-powered analytics that provide detailed insights into event performance and audience engagement, optimizing marketing strategies and revenue potential ",
  keywords: [
    "beatai",
    "ai music generator",
    "music analytics platform",
    "ticket sales prediction ai",
    "event marketing ai tools",
    "music metadata extraction",
    "ai image generation for events",
    "fraud detection ticketing ai",
    "ai workflows for creatives",
    "music project stems metadata a",
    " ai chat for artists",
  ],
  
  openGraph: {
    title: "BeatAI: Advanced multi-AI engines on one unified platform, unleashing the power of AI with streamlined and effortless focus.",
    description:
      "BeatAI.io: Empower Creativity via Lex, Your AI Agent for Innovative Productivity, Featuring BeatBidder Talent Auctions, BeatBuy Blockchain ticketing & NFTs, and BeatAI Multi-Engine AI Platform.",
    url: "https://beatai.io",
    siteName: "BeatAI.io",
    images: ["/logo.png"],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "BeatAI: Harness multiple powerful AI engines to power your queries and deliver top-tier responses worldwide.",
    description:
      "BeatAI: Access multiple AI engines at your fingertips, enabling advanced data searches from the world's top AI engines, while featuring Lex Images, Workflows and Beats—a tool to enhance your music using our AI engine.",
    images: ["/logo.png"],
    creator: "@beatbind",
  },
  alternates: {
    canonical: "https://beatai.io",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};
 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} `}>
       <BootstrapProvider>{children}</BootstrapProvider>

         {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-41R3258TDY"
        />

        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-41R3258TDY');
          `}
        </Script>

      </body>
    </html>
  );
}
