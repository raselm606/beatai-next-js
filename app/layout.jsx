
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
  title: "BeatAI Landing Nextjs Project",
  description: "BeatAI Landing NextJs Project",
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
