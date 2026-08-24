"use client";

import MenuCard from "./MenuCard";
import { MenuItem } from "./MenuData";

interface Props {
  items: MenuItem[];
}

export default function MenuList({ items }: Props) {
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center text-stone-400">
        <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-stone-900 border border-stone-800 text-amber-500">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
        <p className="text-base font-bold text-stone-200">محصولی یافت نشد</p>
        <p className="mt-1 text-xs text-stone-500">
          لطفاً عبارت دیگری را جستجو کنید یا دسته‌بندی دیگری انتخاب نمایید.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
      {items.map((item) => (
        <MenuCard key={item.barcode} {...item} />
      ))}
    </div>
  );
}
