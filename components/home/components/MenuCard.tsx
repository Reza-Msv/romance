"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MenuItem } from "./MenuData";
import { useCart } from "@/context/CartContext";

const DEFAULT_FALLBACK_IMAGE = "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500&auto=format&fit=crop&q=80";

export default function MenuCard(item: MenuItem) {
  const { barcode, name, price, image } = item;
  const { addToCart, updateQuantity, getItemQuantity } = useCart();
  const quantity = getItemQuantity(barcode);

  const [imgSrc, setImgSrc] = useState(image || DEFAULT_FALLBACK_IMAGE);

  return (
    <div className="group relative flex items-center justify-between rounded-2xl sm:rounded-3xl bg-stone-900/90 border border-stone-800/80 p-3 sm:p-4 shadow-sm transition-all duration-200 active:scale-[0.99] hover:border-amber-900/50 hover:shadow-md">
      <div className="flex items-center gap-3 sm:gap-4 w-full">
        {/* Item Image */}
        <div className="relative h-20 w-20 sm:h-24 sm:w-24 flex-shrink-0 overflow-hidden rounded-xl sm:rounded-2xl bg-stone-800 border border-stone-700/50">
          <Image
            src={imgSrc}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 80px, 96px"
            onError={() => setImgSrc(DEFAULT_FALLBACK_IMAGE)}
          />
          {/* Barcode Overlay Badge */}
          <span className="absolute bottom-1 right-1 rounded-md bg-stone-950/85 backdrop-blur-xs px-1 py-0.5 text-[9px] sm:text-[10px] font-mono text-amber-400 border border-amber-900/40">
            {barcode}
          </span>
        </div>

        {/* Item Content */}
        <div className="flex flex-1 flex-col justify-between text-right py-0.5 min-w-0">
          <div>
            <h3 className="text-xs sm:text-base font-bold sm:font-extrabold text-stone-100 line-clamp-1 leading-snug">
              {name}
            </h3>
            <p className="mt-1 text-xs font-extrabold text-amber-400">
              {price.toLocaleString("fa-IR")} <span className="text-[10px] font-normal text-amber-500/80">تومان</span>
            </p>
          </div>

          {/* Cart Stepper / Add Button */}
          <div className="mt-2.5 flex items-center justify-start">
            {quantity === 0 ? (
              <button
                onClick={() => addToCart(item)}
                className="flex items-center gap-1 rounded-xl bg-amber-600/20 hover:bg-amber-500 border border-amber-500/40 px-3 py-1.5 text-xs font-bold text-amber-300 hover:text-stone-950 transition-all duration-150 active:scale-95 touch-manipulation"
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                <span>افزودن</span>
              </button>
            ) : (
              <div className="flex items-center rounded-xl bg-amber-600/20 border border-amber-500/50 p-0.5">
                <button
                  onClick={() => updateQuantity(barcode, quantity - 1)}
                  className="flex h-7 w-7 items-center justify-center rounded-lg bg-stone-950 text-stone-200 hover:bg-amber-500 hover:text-stone-950 transition-colors font-black text-xs active:scale-90 touch-manipulation"
                >
                  -
                </button>
                <span className="px-2.5 text-xs font-black text-amber-200">
                  {quantity}
                </span>
                <button
                  onClick={() => updateQuantity(barcode, quantity + 1)}
                  className="flex h-7 w-7 items-center justify-center rounded-lg bg-stone-950 text-stone-200 hover:bg-amber-500 hover:text-stone-950 transition-colors font-black text-xs active:scale-90 touch-manipulation"
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
