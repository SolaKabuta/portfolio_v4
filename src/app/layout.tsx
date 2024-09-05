import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next";
import { Hanken_Grotesk, Anek_Gujarati } from "next/font/google";
import "./globals.css";
// import { Header2 } from "@/components/Header2";
import {Footer} from "@/components/Footer";
import Navbar from "@/components/Navbar";


const hankenGrotesk = Hanken_Grotesk({ subsets: ["latin"] });
const roboto = Anek_Gujarati({weight: ["500"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sola Kabuta Portfolio",
  description: "Junior front-end developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hankenGrotesk.className} ${roboto.className}`}>
        <Navbar />
        {children}
      <Footer/>
      </body>
    </html>
  );
}
