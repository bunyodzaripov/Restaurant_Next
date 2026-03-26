import NewsCard from "@/components//common/NewsCard";
import ShadcnButton from "@/components/common/ShadcnButton";
import { getAll } from "@/service/getAll";
import { News } from "@/types";

export default async function NewsGallerySection() {
  const { data } = await getAll("news");
  const news = data.slice(0, 3);

  return (
    <section className="mt-17.75">
      <h2 className="text-[48px] font-extrabold text-center text-black">
        Новости/Галерея
      </h2>

      <div className="grid grid-cols-3 gap-27.5 mt-30">
        {news.map((item: News) => (
          <NewsCard
            key={item.id}
            image={item.image}
            description={item.description}
            authorImage={item.author.avatar}
            authorName={item.author.firstName}
          />
        ))}
      </div>

      <div className="flex justify-end mt-17.75">
        <ShadcnButton label="Посмотреть все" href="/news" />
      </div>
    </section>
  );
}
