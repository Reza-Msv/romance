import type { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/common/header";
import { Oswald } from "next/font/google";
const yekanBakh = localFont({
  src: "../public/fonts/YekanBakhHeavy.woff",
  weight: "800",
  style: "normal",
  variable: "--font-yekan",
});

const oswald = Oswald({
  subsets: ["latin"], 
  weight: ["400", "700"], 
});

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekanBakh.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
