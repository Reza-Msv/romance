import type { ReactNode } from "react";
import type { Metadata } from "next"; 
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/common/header";
import CartDrawer from "@/components/cart/CartDrawer";
import { CartProvider } from "@/context/CartContext";

const yekanBakh = localFont({
  src: "../public/fonts/YekanBakhHeavy.woff",
  weight: "800",
  style: "normal",
  variable: "--font-yekan",
});

export const metadata: Metadata = {
  title: "منوی دیجیتال کافه رومنس | لحظاتی شیرین و ماندگار",
  description:
    "مشاهده منوی کامل کافه رومنس شامل انواع قهوه، شیک، وافل و نوشیدنی‌های سرد. با بهترین کیفیت و فضایی دلنشین در خدمت شما هستیم.",
  keywords: [
    "کافه رومنس",
    "منوی کافه",
    "قهوه",
    "وافل",
    "شیک",
    "منوی دیجیتال کافه",
  ],
  authors: [{ name: "Romance Cafe" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "کافه رومنس - منوی آنلاین",
    description: "بهترین تجربه‌ی طعم و آرامش در کافه رومنس",
    type: "website",
    locale: "fa_IR",
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${yekanBakh.className} bg-[#141211] text-stone-100 antialiased selection:bg-amber-500 selection:text-stone-950`}>
        <CartProvider>
          <div className="min-h-screen flex flex-col bg-[#141211] text-stone-100">
            <Header />
            <main className="flex-1">{children}</main>
            <CartDrawer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
