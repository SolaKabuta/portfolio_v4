import type { Metadata } from "next";
import { Hanken_Grotesk, Anek_Gujarati } from "next/font/google";
import "./globals.css";
import { Header2 } from "@/components/Header2";


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
        <Header2 />
        {children}
      </body>
    </html>
  );
}
