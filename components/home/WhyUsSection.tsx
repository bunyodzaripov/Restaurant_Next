import {
  Soup,
  CarTaxiFront,
  Pizza,
  Store,
  ChefHat,
  HeartHandshake,
} from "lucide-react";
import Title from "../common/Title";

const reasons = [
  {
    id: 1,
    icon: Soup,
    title: "Качественные продукты",
    description:
      "Входные билеты в музеи, для посещения достопримечательностей, памятников",
  },
  {
    id: 2,
    icon: CarTaxiFront,
    title: "Быстрая доставка",
    description:
      "Входные билеты в музеи, для посещения достопримечательностей, памятников",
  },
  {
    id: 3,
    icon: Pizza,
    title: "Вкусные рецепты",
    description:
      "Входные билеты в музеи, для посещения достопримечательностей, памятников",
  },
  {
    id: 4,
    icon: Store,
    title: "Уютная атмосфера",
    description:
      "Входные билеты в музеи, для посещения достопримечательностей, памятников",
  },
  {
    id: 5,
    icon: ChefHat,
    title: "Опытные повара",
    description:
      "Входные билеты в музеи, для посещения достопримечательностей, памятников",
  },
  {
    id: 6,
    icon: HeartHandshake,
    title: "Обслуживания",
    description:
      "Входные билеты в музеи, для посещения достопримечательностей, памятников",
  },
];

export default function WhyUsSection() {
  return (
    <section className="mt-10">
      <Title title="Почему выбирают нас?" />

      <div className="grid grid-cols-3 gap-x-18 gap-y-23 mt-17">
        {reasons.map((reason) => {
          const Icon = reason.icon;
          return (
            <div key={reason.id} className="flex flex-col gap-3">
              <Icon size={54} strokeWidth={2.5} className="text-black" />
              <h3 className="text-[32px] font-semibold text-black">
                {reason.title}
              </h3>
              <p className="text-base text-black">{reason.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
