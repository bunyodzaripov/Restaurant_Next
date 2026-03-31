import FoodCard from "@/components/common/FoodCard";
import { getAll } from "@/service/getAll";
import { Products } from "@/types";
import MenuContent from "./MenuContent";
import Title from "../common/Title";

interface Props {
  searchParams: Promise<{ categoryId?: string }>;
}

export default async function MenuGrid({ searchParams }: Props) {
  const params = await searchParams;
  const categoryIdStr = params.categoryId;

  const [categoriesRes, productsRes] = await Promise.all([
    getAll("categories"),
    getAll("products", categoryIdStr ? { categoryId: categoryIdStr } : {}),
  ]);

  const products: Products[] = productsRes.data;

  return (
    <section className="py-10">
      <Title title="Меню" />

      <MenuContent categories={categoriesRes.data} />

      <div className="grid grid-cols-4 gap-x-12 gap-y-20 mt-30">
        {products.map((item: Products) => (
          <div key={item.id} className="flex justify-center">
            <FoodCard
              id={item.id}
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
