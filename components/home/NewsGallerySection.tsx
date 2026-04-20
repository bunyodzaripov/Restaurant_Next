import NewsCard from "@/components//common/NewsCard";
import ShadcnButton from "@/components/common/ShadcnButton";
import { getAll } from "@/service/getAll";
import { News } from "@/types";
import Title from "../common/Title";
import EmptyState from "../common/EmptyState";

export default async function NewsGallerySection() {
  const data = await getAll("news");

  return (
    <section className="mt-17.75">
      <Title title="Новости и галерея" />

      {data?.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-3 gap-11.75 gap-x-10 gap-y-30 mt-30">
          {data?.map((item: News) => (
            <NewsCard
              key={item.id}
              image={item.image}
              description={item.description}
              authorImage={item.author.avatar}
              authorName={item.author.firstName}
            />
          ))}
        </div>
      )}

      <div className="flex justify-end mt-17.75">
        <ShadcnButton label="Посмотреть все" href="/news" />
      </div>
    </section>
  );
}
