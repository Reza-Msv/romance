"use client";

import { useState, useMemo } from "react";
import { menuData, MenuItem } from "./components/MenuData";
import CategoryTabs from "./components/CategoryTabs";
import MenuList from "./components/MenuList";
import SearchBar from "./components/SearchBar";
import { useCart } from "@/context/CartContext";

const HomePageContainer = () => {
  const [activeCategory, setActiveCategory] = useState(menuData[0].category);
  const [searchQuery, setSearchQuery] = useState("");
  const { totalCount, totalPrice, setIsCartOpen } = useCart();

  // Filter items across all categories if searching, else filter by active category
  const filteredItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (query) {
      // Gather all items from all categories
      const allItems: MenuItem[] = menuData.flatMap((cat) => cat.items);
      return allItems.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.barcode.includes(query)
      );
    }

    const currentCat = menuData.find((c) => c.category === activeCategory);
    return currentCat ? currentCat.items : [];
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-[calc(100vh-5rem)] pb-28">
      {/* Container */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-4 space-y-4">
        {/* Search Bar */}
        <SearchBar query={searchQuery} onQueryChange={setSearchQuery} />

        {/* Category Tabs (Shown when not searching) */}
        {!searchQuery && (
          <CategoryTabs
            categories={menuData.map((c) => c.category)}
            active={activeCategory}
            onChange={setActiveCategory}
          />
        )}

        {/* Search status header if searching */}
        {searchQuery && (
          <div className="flex items-center justify-between px-1 py-1">
            <span className="text-xs text-stone-400">
              نتایج جستجو برای &quot;<span className="text-amber-400 font-bold">{searchQuery}</span>&quot;: ({filteredItems.length} مورد)
            </span>
            <button
              onClick={() => setSearchQuery("")}
              className="text-xs text-amber-500 hover:underline"
            >
              پاک کردن جستجو
            </button>
          </div>
        )}

        {/* Menu Items Grid */}
        <MenuList items={filteredItems} />
      </div>

      {/* Floating Bottom Cart Summary Bar */}
      {totalCount > 0 && (
        <div className="fixed bottom-4 left-4 right-4 z-30 mx-auto max-w-md animate-slideUp">
          <div className="flex items-center justify-between rounded-2xl bg-amber-600 px-5 py-3 text-stone-950 shadow-2xl shadow-amber-900/50 border border-amber-400/40">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-stone-950 text-amber-400 font-extrabold text-sm">
                {totalCount}
              </div>
              <div className="flex flex-col text-right">
                <span className="text-xs font-bold text-stone-950">سبد خرید شما</span>
                <span className="text-sm font-black text-stone-950">
                  {totalPrice.toLocaleString("fa-IR")} تومان
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-1.5 rounded-xl bg-stone-950 px-4 py-2 text-xs font-bold text-amber-400 hover:bg-stone-900 transition-colors shadow-md"
            >
              <span>مشاهده سبد</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePageContainer;
