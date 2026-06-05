export interface MenuItem {
  name: string;
  price: number;
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    category: "EspressoBased",
    items: [
      { name: "اسپرسو سینگل", price: 80 },
      { name: "اسپرسو دوبل", price: 90 },
      { name: "اسپرسو سینامون", price: 100 },
      { name: "اسپرسو کوبانو", price: 100 },
      { name: "قهوه ترک", price: 110 },
      { name: "قهوه یونانی", price: 120 },
      { name: "قهوه فرنچ پرس", price: 135 },
      { name: "اسپرسو ماکیاتو", price: 90 },
      { name: "آمریکانو سینگل", price: 90 },
      { name: "آمریکانو دوبل", price: 100 },
      { name: "آمریکانو طعم‌دار (عسل، فندق، کارامل)", price: 110 },
      { name: "کافی (نسکافه)", price: 130 },
      { name: "شیر کافی", price: 140 },
    ],
  },
  {
    category: "Cappuccino&Latte",
    items: [
      { name: "کاپوچینو", price: 140 },
      { name: "کاپوچینو طعم‌دار (انواع طعم‌ها)", price: 150 },
      { name: "کاپوچینو آیریش/کوکی", price: 150 },
      { name: "لته", price: 150 },
      { name: "لته فندق", price: 160 },
      { name: "لته زعفران", price: 170 },
      { name: "لته آیریش", price: 170 },
      { name: "لته وانیل", price: 120 },
      { name: "لته شکلات", price: 160 },
      { name: "لته نارگیل", price: 160 },
      { name: "لته کارامل", price: 170 },
      { name: "لته کوکی", price: 130 },
    ],
  },
  {
    category: "HotBeverages",
    items: [
      { name: "کارامل ماکیاتو", price: 160 },
      { name: "موکا", price: 160 },
      { name: "هانی موکا", price: 170 },
      { name: "ماکیاتو", price: 170 },
      { name: "هات چاکلت", price: 140 },
      { name: "هات چاکلت نوتلا/طعم‌دار", price: 150 },
      { name: "هات چاکلت دارچین", price: 150 },
      { name: "وایت/پینک چاکلت", price: 140 },
      { name: "هات پسته زعفران", price: 190 },
      { name: "شیر عسل دارچین", price: 130 },
      { name: "شیر عسل زعفران", price: 140 },
    ],
  },
  {
    category: "Tea&Herbal",
    items: [
      { name: "چای سیاه ایرانی", price: 70 },
      { name: "چای به لیمو", price: 80 },
      { name: "چای سبز", price: 80 },
      { name: "چای ترش", price: 80 },
      { name: "چای گل گاوزبان", price: 95 },
      { name: "چای کرک", price: 140 },
      { name: "چای کرک زعفرانی", price: 150 },
      { name: "چای ماسالا", price: 140 },
      { name: "چای ماسالا عربی", price: 150 },
      { name: "چای زعفران عسل", price: 120 },
    ],
  },
  {
    category: "ColdCoffee&Frappe",
    items: [
      { name: "آفوگاتو", price: 160 },
      { name: "آفوگاتو شکلاتی", price: 170 },
      { name: "کوک اسپرسو", price: 140 },
      { name: "انرژی پلاس", price: 160 },
      { name: "آیس آمریکانو سینگل", price: 90 },
      { name: "آیس آمریکانو دوبل", price: 100 },
      { name: "آیس آمریکانو طعم‌دار", price: 110 },
      { name: "آیس لته", price: 150 },
      { name: "آیس لته فندق/وانیل/شکلات/نارگیل/کارامل", price: 160 },
      { name: "آیس لته زعفران", price: 170 },
      { name: "آیس موکا/کارامل", price: 160 },
      { name: "فراپه (فندق/نارگیل/شکلات/آیریش/کارامل/موز)", price: 180 },
      { name: "فراپه انبه", price: 190 },
      { name: "فراپه شاه توت", price: 180 },
      { name: "فراپه مخصوص", price: 220 },
    ],
  },
  {
    category: "Shakes",
    items: [
      { name: "شیک نوتلا", price: 180 },
      { name: "شیک اسپرسو", price: 180 },
      { name: "شیک کافی", price: 170 },
      { name: "شیک شاه‌توت", price: 190 },
      { name: "شیک توت فرنگی", price: 190 },
      { name: "شیک موز شکلات", price: 180 },
      { name: "شیک موز گردو", price: 190 },
      { name: "شیک انبه ", price: 200 },
      { name: "شیک توت فرنگی نوتلا", price: 200 },
      { name: "شیک مخصوص رومنس", price: 200 },
      { name: "شیک لوتوس", price: 180 },
      { name: "شیک اورئو", price: 180 },
      { name: "شیک موز نوتلا", price: 190 },
      { name: "شیک مغزدار", price: 260 },
      { name: "شیک فانتزی", price: 170 },
      { name: "شیک بادام زمینی", price: 180 },
    ],
  },
  {
    category: "Mocktails&Juice",
    items: [
      { name: "بلو هاوایی", price: 130 },
      { name: "موهیتو", price: 130 },
      { name: "بلک موهیتو", price: 140 },
      { name: "بلو اوشن", price: 140 },
      { name: "سایبورگ", price: 150 },
      { name: "سان ست", price: 140 },
      { name: "لانگ آیلند", price: 150 },
      { name: "آب هویج", price: 90 },
      { name: "طالبی", price: 110 },
      { name: "شیر موز", price: 100 },
      { name: "آب انبه", price: 190 },
      { name: "شیر انبه", price: 200 },
    ],
  },
  {
    category: "BubbleTea",
    items: [
      { name: "بابل تی کلاسیک", price: 140 },
      { name: "بابل تی توت فرنگی/نارگیل/نوتلا/استوایی", price: 150 },
      { name: "بابل تی نوتلا ", price: 160 },
    ],
  },
  {
    category: "Desserts&Waffles",
    items: [
      { name: "کیک", price: 100 },
      { name: "موچی", price: 90 },
      { name: "وافل موز شکلاتی", price: 240 },
      { name: "وافل میوه فصل", price: 260 },
      { name: "وافل معجون", price: 350 },
      { name: "وافل لوتوس/اورئو", price: 250 },
    ],
  },
  {
    category: "SpecialMix",
    items: [
      { name: "شیر موز مغزدار", price: 200 },
      { name: "شیر پسته", price: 195 },
      { name: "معجون ۱ نفره", price: 300 },
      { name: "معجون ۲ نفره", price: 370 },
    ],
  },
];
