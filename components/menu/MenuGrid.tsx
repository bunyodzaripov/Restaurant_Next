import FoodCard from "@/components/common/FoodCard";
import { getAll } from "@/service/getAll";
import { Products } from "@/types";
import MenuContent from "./MenuContent";

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
      <h2 className="text-[48px] font-extrabold text-center text-black mb-10">
        Меню
      </h2>

      <MenuContent categories={categoriesRes.data} />

      <div className="grid grid-cols-4 gap-x-12 gap-y-20">
        {products.map((item: Products) => (
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
