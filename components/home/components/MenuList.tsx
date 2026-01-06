import MenuCard from "./MenuCard";
import { MenuItem } from "./MenuData";

interface Props {
  items: MenuItem[];
}

export default function MenuList({ items }: Props) {
  return (
    <div className="flex flex-col gap-3 px-4 py-4">
      {items.map((item, index) => (
        <MenuCard key={index} {...item} />
      ))}
    </div>
  );
}
