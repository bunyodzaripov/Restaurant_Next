import NewsCard from "@/components/common/NewsCard";
import { getAll } from "@/service/getAll";
import { News } from "@/types";

export default async function NewsGrid() {
  const { data } = await getAll("news");

  return (
    <section className="py-10">
      <h2 className="text-[48px] font-extrabold text-center text-black mb-15">
        Новости
      </h2>

      <div className="grid grid-cols-3 gap-11.75 gap-x-10 gap-y-30 mt-30">
        {data.map((item: News) => (
          <NewsCard
            key={item.id}
            image={item.image}
            description={item.description}
            authorImage={item.author.avatar}
            authorName={item.author.firstName}
          />
        ))}
      </div>
    </section>
  );
}
