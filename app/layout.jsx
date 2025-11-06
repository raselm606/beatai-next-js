 
import { Poppins } from "next/font/google";
//import Script from 'next/script';
import BootstrapProvider from "./bootstrap-provider";
import "./globals.css";

// Bootstrap CSS & JS import
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
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
  // base URL দিন—OG/canonical resolve হবে
  metadataBase: new URL("https://beatai-next-js.vercel.app"),
  title: {
    default: "BeatAI — Multi-AI Platform for Music & Events",
    template: "%s | BeatAI",
  },
  description:
    "BeatAI combines multi-AI chat, image generation, workflows and music tools to power events & creativity.",
  keywords: [
    "BeatAI",
    "AI Chat",
    "Image Generation",
    "Workflows",
    "Music AI",
    "Next.js",
  ],
  
  openGraph: {
    title: "BeatAI — Multi-AI Platform for Music & Events",
    description:
      "Chat with multiple AI engines, generate images, plan events, and more — all in BeatAI.",
    url: "https://beatai-next-js.vercel.app/",
    siteName: "BeatAI",
    images: ["/favicon.ico"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BeatAI — Multi-AI Platform",
    description:
      "One unified platform for AI chat, images, workflows, beats & more.",
    images: ["/favicon.ico"],
    creator: "@beatbind",
  },
  alternates: {
    canonical: "https://beatai-next-js.vercel.app/",
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

        {/* <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"strategy="afterInteractive" /> */}
      </body>
    </html>
  );
}
