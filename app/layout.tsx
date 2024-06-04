import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar"

const vt323 = VT323({weight: '400', subsets: ['latin'], display: "swap"});

export const metadata: Metadata = {
  title: "Gunnar Moody",
  description: "Personal website for Gunnar Moody",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={vt323.className}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
