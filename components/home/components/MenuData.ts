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
      { name: "اسپرسو سینگل", price: 50 },
      { name: "اسپرسو دوبل", price: 60 },
      { name: "اسپرسو سینامون", price: 55 },
      { name: "اسپرسو کوبانو", price: 55 },
      { name: "قهوه ترک", price: 65 },
      { name: "قهوه یونانی", price: 70 },
      { name: "قهوه فرنچ پرس", price: 85 },
      { name: "اسپرسو ماکیاتو", price: 60 },
      { name: "آمریکانو سینگل", price: 60 },
      { name: "آمریکانو دوبل", price: 70 },
      { name: "آمریکانو طعم‌دار (عسل، فندق، کارامل)", price: 75 },
      { name: "کافی (نسکافه)", price: 70 },
      { name: "شیر کافی", price: 80 },
    ],
  },
  {
    category: "Cappuccino&Latte",
    items: [
      { name: "کاپوچینو", price: 80 },
      { name: "کاپوچینو طعم‌دار (انواع طعم‌ها)", price: 90 },
      { name: "کاپوچینو آیریش/کوکی", price: 95 },
      { name: "لته", price: 90 },
      { name: "لته فندق/وانیل/شکلات/نارگیل/کارامل", price: 95 },
      { name: "لته زعفران/آیریش/کوکی", price: 100 },
    ],
  },
  {
    category: "HotBeverages",
    items: [
      { name: "کارامل ماکیاتو", price: 90 },
      { name: "موکا", price: 90 },
      { name: "هانی موکا/ماکیاتو", price: 95 },
      { name: "هات چاکلت", price: 85 },
      { name: "هات چاکلت نوتلا/طعم‌دار", price: 90 },
      { name: "وایت/پینک چاکلت", price: 85 },
      { name: "هات پسته زعفران", price: 100 },
      { name: "شیر عسل دارچین", price: 80 },
      { name: "شیر عسل زعفران", price: 85 },
    ],
  },
  {
    category: "Tea&Herbal",
    items: [
      { name: "چای سیاه ایرانی", price: 45 },
      { name: "چای به لیمو/سبز/ترش", price: 60 },
      { name: "چای گل گاوزبان", price: 65 },
      { name: "چای کرک", price: 85 },
      { name: "چای کرک زعفرانی", price: 90 },
      { name: "چای ماسالا", price: 85 },
      { name: "چای ماسالا عربی", price: 90 },
      { name: "چای زعفران عسل", price: 80 },
    ],
  },
  {
    category: "ColdCoffee&Frappe",
    items: [
      { name: "آفوگاتو", price: 95 },
      { name: "آفوگاتو شکلاتی", price: 100 },
      { name: "کوک اسپرسو", price: 80 },
      { name: "انرژی پلاس", price: 90 },
      { name: "آیس آمریکانو سینگل", price: 60 },
      { name: "آیس آمریکانو دوبل", price: 70 },
      { name: "آیس آمریکانو طعم‌دار", price: 75 },
      { name: "آیس لته", price: 90 },
      { name: "آیس لته زعفران", price: 100 },
      { name: "آیس موکا/کارامل", price: 90 },
      { name: "فراپه (فندق/نارگیل/شکلات/آیریش/کارامل/موز)", price: 110 },
      { name: "فراپه انبه", price: 120 },
      { name: "فراپه مخصوص", price: 130 },
    ],
  },
  {
    category: "Shakes",
    items: [
      { name: "شیک نوتلا/اسپرسو", price: 110 },
      { name: "شیک کافی", price: 100 },
      { name: "شیک توت فرنگی/شاه‌توت/موز شکلات", price: 115 },
      { name: "شیک موز گردو/توت فرنگی نوتلا/انبه", price: 120 },
      { name: "شیک مخصوص رومنس", price: 130 },
      { name: "شیک لوتوس/اورئو", price: 110 },
      { name: "شیک موز نوتلا", price: 120 },
      { name: "شیک مغزدار", price: 170 },
    ],
  },
  {
    category: "Mocktails&Juice",
    items: [
      { name: "موهیتو/بلو هاوایی", price: 85 },
      { name: "باک موهیتو", price: 90 },
      { name: "بلو اوشن/سان ست/سایبورگ", price: 95 },
      { name: "لانگ آیلند", price: 100 },
      { name: "آب هویج", price: 55 },
      { name: "شیر موز/طالبی", price: 70 },
      { name: "آب انبه", price: 110 },
      { name: "شیر انبه", price: 120 },
    ],
  },
  {
    category: "BubbleTea",
    items: [
      { name: "بابل تی کلاسیک", price: 95 },
      { name: "بابل تی توت فرنگی/نارگیل/نوتلا/استوایی", price: 100 },
    ],
  },
  {
    category: "Desserts&Waffles",
    items: [
      { name: "کیک", price: 65 },
      { name: "موچی", price: 60 },
      { name: "وافل موز شکلاتی", price: 160 },
      { name: "وافل میوه فصل", price: 180 },
      { name: "وافل معجون", price: 260 },
      { name: "وافل لوتوس/اورئو", price: 175 },
    ],
  },
  {
    category: "SpecialMix",
    items: [
      { name: "شیر موز مغزدار", price: 130 },
      { name: "شیر پسته", price: 125 },
      { name: "معجون ۱ نفره", price: 200 },
      { name: "معجون ۲ نفره", price: 270 },
    ],
  },
];
