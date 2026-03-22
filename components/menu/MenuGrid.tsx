"use client";

import { useState } from "react";
import FoodCard from "@/components/common/FoodCard";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";

const categories = [
  { value: "all", label: "Все" },
  { value: "first", label: "Первые" },
  { value: "second", label: "Вторые" },
  { value: "salads", label: "Салаты" },
  { value: "drinks", label: "Напитки" },
  { value: "fastfood", label: "Фаст-Фуд" },
];

const foods = [
  {
    id: 1,
    image: "/images/food-1.png",
    name: "Chicken soup",
    description: "Spicy with garlic",
    price: "$10.00",
    category: "first",
  },
  {
    id: 2,
    image: "/images/food-1.png",
    name: "Chicken soup",
    description: "Spicy with garlic",
    price: "$10.00",
    category: "second",
  },
  {
    id: 3,
    image: "/images/food-1.png",
    name: "Chicken soup",
    description: "Spicy with garlic",
    price: "$10.00",
    category: "salads",
  },
  {
    id: 4,
    image: "/images/food-1.png",
    name: "Chicken soup",
    description: "Spicy with garlic",
    price: "$10.00",
    category: "first",
  },
  {
    id: 5,
    image: "/images/food-1.png",
    name: "Chicken soup",
    description: "Spicy with garlic",
    price: "$10.00",
    category: "drinks",
  },
  {
    id: 6,
    image: "/images/food-1.png",
    name: "Chicken soup",
    description: "Spicy with garlic",
    price: "$10.00",
    category: "fastfood",
  },
  {
    id: 7,
    image: "/images/food-1.png",
    name: "Chicken soup",
    description: "Spicy with garlic",
    price: "$10.00",
    category: "second",
  },
  {
    id: 8,
    image: "/images/food-1.png",
    name: "Chicken soup",
    description: "Spicy with garlic",
    price: "$10.00",
    category: "salads",
  },
  {
    id: 9,
    image: "/images/food-1.png",
    name: "Chicken soup",
    description: "Spicy with garlic",
    price: "$10.00",
    category: "first",
  },
  {
    id: 10,
    image: "/images/food-1.png",
    name: "Chicken soup",
    description: "Spicy with garlic",
    price: "$10.00",
    category: "second",
  },
  {
    id: 11,
    image: "/images/food-1.png",
    name: "Chicken soup",
    description: "Spicy with garlic",
    price: "$10.00",
    category: "salads",
  },
  {
    id: 12,
    image: "/images/food-1.png",
    name: "Chicken soup",
    description: "Spicy with garlic",
    price: "$10.00",
    category: "first",
  },
  {
    id: 13,
    image: "/images/food-1.png",
    name: "Chicken soup",
    description: "Spicy with garlic",
    price: "$10.00",
    category: "drinks",
  },
  {
    id: 14,
    image: "/images/food-1.png",
    name: "Chicken soup",
    description: "Spicy with garlic",
    price: "$10.00",
    category: "fastfood",
  },
  {
    id: 15,
    image: "/images/food-1.png",
    name: "Chicken soup",
    description: "Spicy with garlic",
    price: "$10.00",
    category: "second",
  },
  {
    id: 16,
    image: "/images/food-1.png",
    name: "Chicken soup",
    description: "Spicy with garlic",
    price: "$10.00",
    category: "salads",
  },
];

export default function MenuGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? foods
      : foods.filter((f) => f.category === activeCategory);

  return (
    <section className="py-10">
      <h2 className="text-[48px] font-extrabold text-center text-black mb-15">
        Меню
      </h2>

      <div className="flex justify-center">
        <ToggleGroup
          value={[activeCategory]}
          onValueChange={(val) => val.length > 0 && setActiveCategory(val[0])}
          className="inline-flex items-center bg-white/30 backdrop-blur-sm rounded-full px-5 py-3"
        >
          {categories.map((item) => (
            <ToggleGroupItem
              key={item.value}
              value={item.value}
              className="px-5! py-2! rounded-[27px]! text-[20px] font-semibold! cursor-pointer"
            >
              {item.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      <div className="grid grid-cols-4 gap-x-12 gap-y-30 mt-30">
        {filtered.map((item) => (
          <div key={item.id} className="flex justify-center">
            <FoodCard
              image={item.image}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
