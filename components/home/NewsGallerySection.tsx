import NewsCard from "@/components//common/NewsCard";
import ShadcnButton from "@/components/common/ShadcnButton";

const news = [
  {
    id: 1,
    image: "/images/news-1.png",
    description:
      "Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня. Итеративные подходы к данным корпоративной.",
    authorImage: "/images/news-avatar-1.png",
    authorName: "Сергей",
  },
  {
    id: 2,
    image: "/images/news-2.png",
    description:
      "Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня. Итеративные подходы к данным корпоративной.",
    authorImage: "/images/news-avatar-1.png",
    authorName: "Сергей",
  },
  {
    id: 3,
    image: "/images/news-3.png",
    description:
      "Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня. Итеративные подходы к данным корпоративной.",
    authorImage: "/images/news-avatar-1.png",
    authorName: "Сергей",
  },
];

export default function NewsGallerySection() {
  return (
    <section className="py-17.75">
      <h2 className="text-[48px] font-extrabold text-center text-black">
        Новости/Галерея
      </h2>

      <div className="grid grid-cols-3 gap-27.5 mt-30">
        {news.map((item) => (
          <NewsCard
            key={item.id}
            image={item.image}
            description={item.description}
            authorImage={item.authorImage}
            authorName={item.authorName}
          />
        ))}
      </div>

      <div className="flex justify-end mt-17.75">
        <ShadcnButton label="Посмотреть все" href="/news" />
      </div>
    </section>
  );
}
