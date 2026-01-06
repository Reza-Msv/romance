import { MenuItem } from "./MenuData";

export default function MenuCard({ name, price }: MenuItem) {
  return (
    <div className="flex items-center justify-between gap-5 rounded-2xl bg-white px-5 py-6 shadow-md">
      {/* Info */}
      <div className="flex flex-col gap-2 text-right">
        <span className="text-base font-extrabold text-[#3e2723]">{name}</span>
        <span className="text-sm text-gray-600">{price} هزار تومان</span>
      </div>

      <div className="h-20 w-20 rounded-xl bg-[#6f4e37]" />
    </div>
  );
}
