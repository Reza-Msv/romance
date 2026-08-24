"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { totalCount, totalPrice, setIsCartOpen } = useCart();

  return (
    <header className="sticky top-0 z-40 flex h-16 sm:h-20 items-center justify-between px-3.5 sm:px-8 bg-[#141211]/95 backdrop-blur-md border-b border-stone-800/80 shadow-md">
      {/* Brand & Logo */}
      <div className="flex items-center gap-2.5">
        <div className="relative h-10 w-10 sm:h-11 sm:w-11 overflow-hidden rounded-full border-2 border-amber-600/40 shadow-lg shadow-amber-900/30 flex-shrink-0">
          <Image
            src="/romace-logo.jpg"
            alt="Caffe Romance Logo"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-sm sm:text-lg font-extrabold tracking-wide text-amber-100 leading-tight">
            کافه رومنس
          </h1>
          <span className="text-[10px] sm:text-xs text-amber-500 font-medium">
            Romance Cafe Menu
          </span>
        </div>
      </div>

      {/* Cart / Basket Button for Mobile & Desktop */}
      <button
        onClick={() => setIsCartOpen(true)}
        aria-label="مشاهده سبد خرید"
        className="group relative flex items-center gap-2 rounded-xl sm:rounded-2xl bg-amber-600/20 hover:bg-amber-600/30 border border-amber-500/40 px-3 py-1.5 sm:px-4 sm:py-2.5 text-amber-200 transition-all active:scale-95 shadow-md shadow-amber-950/20"
      >
        <div className="relative flex items-center justify-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-amber-400 group-hover:scale-110 transition-transform"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>

          {/* Badge count */}
          {totalCount > 0 && (
            <span className="absolute -top-2 -right-2 flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-amber-500 text-[9px] sm:text-[10px] font-black text-stone-950 shadow-md">
              {totalCount}
            </span>
          )}
        </div>

        <div className="flex flex-col text-right leading-tight">
          <span className="text-[11px] sm:text-xs font-bold text-stone-200">
            سبد خرید
          </span>
          <span className="text-[9px] sm:text-[10px] text-amber-400 font-semibold">
            {totalPrice > 0
              ? `${(totalPrice / 1000).toLocaleString("fa-IR")} هزار تومان`
              : "خالی"}
          </span>
        </div>
      </button>
    </header>
  );
}
