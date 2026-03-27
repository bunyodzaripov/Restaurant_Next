import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import FoodCard from "@/components/common/FoodCard";
import ShadcnButton from "@/components/common/ShadcnButton";
import { getAll } from "@/service/getAll";
import { Products } from "@/types";

export default async function PopularFoods() {
  const { data } = await getAll("products");

  return (
    <section className="mt-16">
      <h2 className="text-[48px] font-extrabold text-center text-black mb-12">
        Популярные блюда
      </h2>

      <Carousel opts={{ align: "start", loop: true }} className="relative">
        <CarouselContent className="mt-14 pb-4">
          {data.map((item: Products) => (
            <CarouselItem key={item.id} className="basis-1/4 pl-8">
              <FoodCard
                id={item.id}
                image={item.image}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="-left-10 bg-white/40 border-white/50 hover:bg-white/60 backdrop-blur-sm" />
        <CarouselNext className="-right-10 bg-white/40 border-white/50 hover:bg-white/60 backdrop-blur-sm" />
      </Carousel>

      <div className="flex justify-end mt-21">
        <ShadcnButton label="Посмотреть меню" href="/menu" />
      </div>
    </section>
  );
}
