import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const vt323 = VT323({ weight: "400", subsets: ["latin"], display: "swap" });

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
    <html id="top" lang="en">
      <body className={`${vt323.className} crt`}>
        <div className="scanline" />
        <Header />
        <br />
        {children}
        <br />
        <Footer />
      </body>
    </html>
  );
}
