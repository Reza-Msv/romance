"use client";

import { useState } from "react";
import { menuData } from "./components/MenuData";
import CategoryTabs from "./components/CategoryTabs";
import MenuList from "./components//MenuList";

const HomePageContainer = () => {
  const [activeCategory, setActiveCategory] = useState(menuData[0].category);

  const currentCategory = menuData.find((c) => c.category === activeCategory);

  return (
    <>
      <CategoryTabs
        categories={menuData.map((c) => c.category)}
        active={activeCategory}
        onChange={setActiveCategory}
      />

      {currentCategory && <MenuList items={currentCategory.items} />}
    </>
  );
};

export default HomePageContainer;
