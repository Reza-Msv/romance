interface Props {
  categories: string[];
  active: string;
  onChange: (cat: string) => void;
}

const categoryLabels: Record<string, string> = {
  EspressoBased: "قهوه‌های بر پایه اسپرسو",
  "Cappuccino&Latte": "کاپوچینو و لته",
  "ColdCoffee&Frappe": "قهوه سرد و فراپه",
  Shakes: "شیک‌ها",
  "Mocktails&Juice": "ماکتیل و آبمیوه",
  BubbleTea: "بابل تی",
  "Desserts&Waffles": "دسر و وافل",
  Majoon: "معجون",
  "Tea&Herbal": "چای و دمنوش",
  SpecialMix: "میکس ویژه",
  HotBeverages: "نوشیدنی های داغ",
};

export default function CategoryTabs({ categories, active, onChange }: Props) {
  return (
    <div className="flex gap-2 overflow-x-auto px-4 py-3 bg-[#f5f1ee]">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`whitespace-nowrap rounded-full px-4 py-2 text-sm transition
            ${
              active === cat
                ? "bg-[#4e342e] text-white"
                : "bg-white text-[#4e342e] border border-[#4e342e]"
            }`}
        >
          {categoryLabels[cat] ?? cat}
        </button>
      ))}
    </div>
  );
}
