import { Geist, Geist_Mono } from "next/font/google";
import { Bayon, Baumans, Baloo_Bhai_2 } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import FloatingWhatsApp from "@/Components/floatingwhatsapp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bayon = Bayon({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bayon",
});

const baumans = Baumans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-baumans",
});

const balooBhai2 = Baloo_Bhai_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-baloo-bhai",
});


export const metadata = {
  title: "Choti Si Muskaan",
  description: "NGO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navbar/>
      <main className={`${bayon.variable} ${baumans.variable} ${balooBhai2.variable}`}>{children}</main>
      <Footer/>
      <FloatingWhatsApp/>
      </body>
    </html>
  );
}
