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
      { name: "اسپرسو سینگل", price: 60 },
      { name: "اسپرسو دوبل", price: 70 },
      { name: "اسپرسو سینامون", price: 65 },
      { name: "اسپرسو کوبانو", price: 65 },
      { name: "قهوه ترک", price: 75 },
      { name: "قهوه یونانی", price: 80 },
      { name: "قهوه فرنچ پرس", price: 95 },
      { name: "اسپرسو ماکیاتو", price: 70 },
      { name: "آمریکانو سینگل", price: 70 },
      { name: "آمریکانو دوبل", price: 80 },
      { name: "آمریکانو طعم‌دار (عسل، فندق، کارامل)", price: 85 },
      { name: "کافی (نسکافه)", price: 90 },
      { name: "شیر کافی", price: 95 },
    ],
  },
  {
    category: "Cappuccino&Latte",
    items: [
      { name: "کاپوچینو", price: 100 },
      { name: "کاپوچینو طعم‌دار (انواع طعم‌ها)", price: 110 },
      { name: "کاپوچینو آیریش/کوکی", price: 115 },
      { name: "لته", price: 110 },
      { name: "لته فندق/وانیل/شکلات/نارگیل/کارامل", price: 120 },
      { name: "لته زعفران/آیریش/کوکی", price: 130 },
    ],
  },
  {
    category: "HotBeverages",
    items: [
      { name: "کارامل ماکیاتو", price: 120 },
      { name: "موکا", price: 120 },
      { name: "هانی موکا/ماکیاتو", price: 130 },
      { name: "هات چاکلت", price: 105 },
      { name: "هات چاکلت نوتلا/طعم‌دار", price: 115 },
      { name: "وایت/پینک چاکلت", price: 105 },
      { name: "هات پسته زعفران", price: 135 },
      { name: "شیر عسل دارچین", price: 90 },
      { name: "شیر عسل زعفران", price: 100 },
    ],
  },
  {
    category: "Tea&Herbal",
    items: [
      { name: "چای سیاه ایرانی", price: 60 },
      { name: "چای به لیمو/سبز/ترش", price: 70 },
      { name: "چای گل گاوزبان", price: 75 },
      { name: "چای کرک", price: 105 },
      { name: "چای کرک زعفرانی", price: 110 },
      { name: "چای ماسالا", price: 105 },
      { name: "چای ماسالا عربی", price: 110 },
      { name: "چای زعفران عسل", price: 100 },
    ],
  },
  {
    category: "ColdCoffee&Frappe",
    items: [
      { name: "آفوگاتو", price: 120 },
      { name: "آفوگاتو شکلاتی", price: 130 },
      { name: "کوک اسپرسو", price: 100 },
      { name: "انرژی پلاس", price: 120 },
      { name: "آیس آمریکانو سینگل", price: 70 },
      { name: "آیس آمریکانو دوبل", price: 80 },
      { name: "آیس آمریکانو طعم‌دار", price: 85 },
      { name: "آیس لته", price: 110 },
      { name: "آیس لته فندق/وانیل/شکلات/نارگیل/کارامل", price: 120 },
      { name: "آیس لته زعفران", price: 130 },
      { name: "آیس موکا/کارامل", price: 120 },
      { name: "فراپه (فندق/نارگیل/شکلات/آیریش/کارامل/موز)", price: 140 },
      { name: "فراپه انبه", price: 150 },
      { name: "فراپه مخصوص", price: 180 },
    ],
  },
  {
    category: "Shakes",
    items: [
      { name: "شیک نوتلا", price: 135 },
      { name: "شیک اسپرسو", price: 140 },
      { name: "شیک کافی", price: 130 },
      { name: "شیک شاه‌توت", price: 150 },
      { name: "شیک توت فرنگی", price: 150 },
      { name: "شیک موز شکلات", price: 140 },
      { name: "شیک موز گردو", price: 150 },
      { name: "شیک انبه ", price: 150 },
      { name: "شیک توت فرنگی نوتلا", price: 160 },
      { name: "شیک مخصوص رومنس", price: 160 },
      { name: "شیک لوتوس", price: 135 },
      { name: "شیک اورئو", price: 135 },
      { name: "شیک موز نوتلا", price: 150 },
      { name: "شیک مغزدار", price: 200 },
      { name: "شیک فانتزی", price: 130 },
      { name: "شیک بادام زمینی", price: 135 },
    ],
  },
  {
    category: "Mocktails&Juice",
    items: [
      { name: "بلو هاوایی", price: 110 },
      { name: "موهیتو", price: 95 },
      { name: "بلک موهیتو", price: 120 },
      { name: "بلو اوشن", price: 120 },
      { name: "سایبورگ", price: 120 },
      { name: "سان ست", price:120 },
      { name: "لانگ آیلند", price: 130 },
      { name: "آب هویج", price: 70 },
      { name: "طالبی", price: 80 },
      { name: "شیر موز", price: 90 },
      { name: "آب انبه", price: 150 },
      { name: "شیر انبه", price: 160 },
    ],
  },
  {
    category: "BubbleTea",
    items: [
      { name: "بابل تی کلاسیک", price: 120 },
      { name: "بابل تی توت فرنگی/نارگیل/نوتلا/استوایی", price: 130 },
    ],
  },
  {
    category: "Desserts&Waffles",
    items: [
      { name: "کیک", price: 80 },
      { name: "موچی", price: 70 },
      { name: "وافل موز شکلاتی", price: 190 },
      { name: "وافل میوه فصل", price: 210 },
      { name: "وافل معجون", price: 300 },
      { name: "وافل لوتوس/اورئو", price: 200 },
    ],
  },
  {
    category: "SpecialMix",
    items: [
      { name: "شیر موز مغزدار", price: 160 },
      { name: "شیر پسته", price: 150 },
      { name: "معجون ۱ نفره", price: 240 },
      { name: "معجون ۲ نفره", price: 310 },
    ],
  },
];
