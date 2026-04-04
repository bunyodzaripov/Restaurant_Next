import FoodCard from "@/components/common/FoodCard";
import { getProducts } from "@/service/getAll";
import { Products } from "@/types";

export default async function MenuGrid({
  categoryId,
}: {
  categoryId?: string;
}) {
  const data = await getProducts(categoryId ? Number(categoryId) : null);

  return (
    <div className="grid grid-cols-4 gap-x-12 gap-y-20 mt-30">
      {data?.data?.map((item: Products) => (
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
  );
}
