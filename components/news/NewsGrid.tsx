import NewsCard from "@/components/common/NewsCard";
import { getAll } from "@/service/getAll";
import { News } from "@/types";
import Title from "../common/Title";
import EmptyState from "../common/EmptyState";

export default async function NewsGrid() {
  const { data } = await getAll("news");

  return (
    <section className="py-10">
      <Title title="Новости" />

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
    </section>
  );
}
