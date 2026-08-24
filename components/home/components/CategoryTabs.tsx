"use client";

import React from "react";

interface Props {
  categories: string[];
  active: string;
  onChange: (cat: string) => void;
}

const categoryLabels: Record<string, { label: string; icon: string }> = {
  EspressoBased: { label: "اسپرسو", icon: "☕" },
  "Cappuccino&Latte": { label: "کاپوچینو و لته", icon: "🥛" },
  HotBeverages: { label: "نوشیدنی داغ", icon: "🍫" },
  "Tea&Herbal": { label: "چای و دمنوش", icon: "🫖" },
  "ColdCoffee&Frappe": { label: "قهوه سرد و فراپه", icon: "🧊" },
  Shakes: { label: "شیک‌ها", icon: "🧋" },
  "Mocktails&Juice": { label: "ماکتیل و آبمیوه", icon: "🍹" },
  BubbleTea: { label: "بابل تی", icon: "🧋" },
  "Desserts&Waffles": { label: "دسر و وافل", icon: "🧇" },
  SpecialMix: { label: "میکس ویژه", icon: "✨" },
};

export default function CategoryTabs({ categories, active, onChange }: Props) {
  return (
    <div className="sticky top-16 sm:top-20 z-30 -mx-4 px-4 py-2 bg-[#141211]/95 backdrop-blur-md border-b border-stone-800/60">
      <div className="flex gap-2 overflow-x-auto no-scrollbar snap-x scroll-smooth py-1 px-0.5">
        {categories.map((cat) => {
          const catInfo = categoryLabels[cat] || { label: cat, icon: "☕" };
          const isActive = active === cat;

          return (
            <button
              key={cat}
              onClick={() => onChange(cat)}
              className={`snap-start flex items-center gap-1.5 whitespace-nowrap rounded-2xl px-3.5 py-2 text-xs font-bold transition-all duration-200 cursor-pointer active:scale-95 touch-manipulation ${
                isActive
                  ? "bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20 font-black"
                  : "bg-stone-900/90 text-stone-300 border border-stone-800 hover:border-stone-700 active:bg-stone-800"
              }`}
            >
              <span className="text-sm">{catInfo.icon}</span>
              <span>{catInfo.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
