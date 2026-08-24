"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart, CartItem } from "@/context/CartContext";

const DEFAULT_FALLBACK_IMAGE = "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500&auto=format&fit=crop&q=80";

function CartItemRow({ cartItem }: { cartItem: CartItem }) {
  const { item, quantity } = cartItem;
  const { updateQuantity } = useCart();
  const [imgSrc, setImgSrc] = useState(item.image || DEFAULT_FALLBACK_IMAGE);

  return (
    <div className="flex items-center gap-3 rounded-2xl bg-stone-900/80 border border-stone-800 p-3 shadow-sm">
      {/* Image */}
      <div className="relative h-14 w-14 sm:h-16 sm:w-16 flex-shrink-0 overflow-hidden rounded-xl bg-stone-800">
        <Image
          src={imgSrc}
          alt={item.name}
          fill
          className="object-cover"
          sizes="64px"
          onError={() => setImgSrc(DEFAULT_FALLBACK_IMAGE)}
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <span className="truncate text-xs sm:text-sm font-bold text-stone-100">
            {item.name}
          </span>
          <span className="rounded bg-amber-950/80 px-1 py-0.5 text-[9px] text-amber-400 font-mono">
            کد {item.barcode}
          </span>
        </div>
        <div className="mt-1 text-xs text-amber-400 font-bold">
          {(item.price * quantity).toLocaleString("fa-IR")} تومان
        </div>
      </div>

      {/* Stepper */}
      <div className="flex items-center rounded-xl bg-stone-800 p-0.5 border border-stone-700">
        <button
          onClick={() => updateQuantity(item.barcode, quantity - 1)}
          className="flex h-7 w-7 items-center justify-center rounded-lg text-stone-300 hover:bg-stone-700 hover:text-white font-bold text-sm touch-manipulation"
        >
          -
        </button>
        <span className="px-2 text-xs font-black text-amber-200">
          {quantity}
        </span>
        <button
          onClick={() => updateQuantity(item.barcode, quantity + 1)}
          className="flex h-7 w-7 items-center justify-center rounded-lg text-stone-300 hover:bg-stone-700 hover:text-white font-bold text-sm touch-manipulation"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    clearCart,
    totalCount,
    totalPrice,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-stretch sm:justify-end bg-black/70 backdrop-blur-sm transition-opacity animate-fadeIn">
      {/* Backdrop click to close */}
      <div
        className="absolute inset-0"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer content */}
      <div className="relative z-10 flex h-[88vh] sm:h-full w-full sm:max-w-md flex-col rounded-t-3xl sm:rounded-none bg-[#1c1917] text-stone-100 shadow-2xl border-t sm:border-t-0 sm:border-r border-amber-900/40 animate-slideUp overflow-hidden">
        {/* Mobile Drag Handle */}
        <div className="pt-3 pb-1 sm:hidden flex justify-center">
          <div className="w-12 h-1.5 rounded-full bg-stone-700/80" />
        </div>

        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-stone-800 px-5 sm:px-6 py-4 bg-[#26211e]">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-amber-100">سبد خرید شما</h2>
              <p className="text-xs text-stone-400">
                {totalCount > 0
                  ? `${totalCount} آیتم انتخابی`
                  : "سبد خرید شما خالی است"}
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            aria-label="بستن سبد"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-800 text-stone-400 hover:bg-stone-700 hover:text-white transition-colors"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-3.5 no-scrollbar">
          {cartItems.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-stone-400 py-12">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-stone-800/60 text-stone-500">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
              </div>
              <p className="text-sm font-semibold text-stone-300">
                هنوز سفارشی افزوده‌نشده
              </p>
              <p className="mt-1 text-xs text-stone-500">
                از منو، نوشیدنی یا دسر مورد علاقه خود را انتخاب کنید.
              </p>
            </div>
          ) : (
            cartItems.map((ci) => (
              <CartItemRow key={ci.item.barcode} cartItem={ci} />
            ))
          )}
        </div>

        {/* Footer Summary */}
        {cartItems.length > 0 && (
          <div className="border-t border-stone-800 bg-[#26211e] p-4 sm:p-6 space-y-3 pb-6 sm:pb-6">
            <div className="space-y-1.5 text-xs sm:text-sm text-stone-400">
              <div className="flex justify-between">
                <span>تعداد آیتم‌ها:</span>
                <span className="font-semibold text-stone-200">{totalCount} عدد</span>
              </div>
              <div className="flex justify-between text-sm sm:text-base font-bold text-stone-100 pt-2 border-t border-stone-800">
                <span>مبلغ قابل پرداخت:</span>
                <span className="text-amber-400">
                  {totalPrice.toLocaleString("fa-IR")} تومان
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2.5 pt-1">
              <button
                onClick={clearCart}
                className="col-span-1 rounded-xl bg-stone-800 py-3 text-xs font-bold text-stone-400 hover:bg-red-950/40 hover:text-red-400 border border-stone-700 active:scale-95 transition-all"
              >
                حذف همه
              </button>
              <button
                onClick={() => {
                  alert(`سفارش شما به مبلغ ${totalPrice.toLocaleString("fa-IR")} تومان ثبت شد.`);
                  clearCart();
                  setIsCartOpen(false);
                }}
                className="col-span-2 rounded-xl bg-amber-500 hover:bg-amber-400 py-3 text-xs sm:text-sm font-black text-stone-950 shadow-lg shadow-amber-500/20 active:scale-95 transition-all flex items-center justify-center gap-1.5"
              >
                <span>ثبت نهایی سفارش</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
