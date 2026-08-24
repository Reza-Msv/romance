"use client";

import React from "react";

interface SearchBarProps {
  query: string;
  onQueryChange: (q: string) => void;
}

export default function SearchBar({ query, onQueryChange }: SearchBarProps) {
  return (
    <div className="relative w-full">
      <div className="relative flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="جستجوی نام محصول یا بارکد (مثلاً 001)..."
          className="w-full rounded-2xl bg-stone-900/80 border border-stone-800 py-3.5 pr-11 pl-10 text-sm text-stone-100 placeholder-stone-500 shadow-inner outline-none transition focus:border-amber-600 focus:ring-1 focus:ring-amber-600/30"
        />

        {/* Search Icon */}
        <div className="absolute right-4 text-stone-400">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>

        {/* Clear Button */}
        {query && (
          <button
            onClick={() => onQueryChange("")}
            className="absolute left-3.5 flex h-6 w-6 items-center justify-center rounded-full bg-stone-800 text-stone-400 hover:text-stone-200"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
