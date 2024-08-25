import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { Alice } from "next/font/google";
import "./globals.css";
import { Header2 } from "@/components/Header2";


const inter = Inter({ subsets: ["latin"] });
// const alice = Alice({weight: undefined, subsets: ["latin"] });

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
      <body className={inter.className}>
        <Header2 />
        {children}
      </body>
    </html>
  );
}
