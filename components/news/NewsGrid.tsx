"use client";

import { useState } from "react";
import NewsCard from "@/components/common/NewsCard";
import AppPagination from "../common/AppPagination";

const allNews = [
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
  {
    id: 4,
    image: "/images/news-1.png",
    description:
      "Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня. Итеративные подходы к данным корпоративной.",
    authorImage: "/images/news-avatar-1.png",
    authorName: "Сергей",
  },
  {
    id: 5,
    image: "/images/news-2.png",
    description:
      "Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня. Итеративные подходы к данным корпоративной.",
    authorImage: "/images/news-avatar-1.png",
    authorName: "Сергей",
  },
  {
    id: 6,
    image: "/images/news-3.png",
    description:
      "Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня. Итеративные подходы к данным корпоративной.",
    authorImage: "/images/news-avatar-1.png",
    authorName: "Сергей",
  },
  {
    id: 7,
    image: "/images/news-1.png",
    description:
      "Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня. Итеративные подходы к данным корпоративной.",
    authorImage: "/images/news-avatar-1.png",
    authorName: "Сергей",
  },
  {
    id: 8,
    image: "/images/news-2.png",
    description:
      "Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня. Итеративные подходы к данным корпоративной.",
    authorImage: "/images/news-avatar-1.png",
    authorName: "Сергей",
  },
  {
    id: 9,
    image: "/images/news-3.png",
    description:
      "Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня. Итеративные подходы к данным корпоративной.",
    authorImage: "/images/news-avatar-1.png",
    authorName: "Сергей",
  },
  {
    id: 10,
    image: "/images/news-1.png",
    description:
      "Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня. Итеративные подходы к данным корпоративной.",
    authorImage: "/images/news-avatar-1.png",
    authorName: "Сергей",
  },
  {
    id: 11,
    image: "/images/news-2.png",
    description:
      "Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня. Итеративные подходы к данным корпоративной.",
    authorImage: "/images/news-avatar-1.png",
    authorName: "Сергей",
  },
  {
    id: 12,
    image: "/images/news-3.png",
    description:
      "Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня. Итеративные подходы к данным корпоративной.",
    authorImage: "/images/news-avatar-1.png",
    authorName: "Сергей",
  },
];

const PER_PAGE = 6;

export default function NewsGrid() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allNews.length / PER_PAGE);
  const paginated = allNews.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE,
  );

  return (
    <section className="py-10">
      <h1 className="text-[48px] font-extrabold text-center text-black mb-15">
        Новости
      </h1>

      <div className="grid grid-cols-3 gap-11.75 gap-x-10 gap-y-30 mt-30">
        {paginated.map((item) => (
          <NewsCard
            key={item.id}
            image={item.image}
            description={item.description}
            authorImage={item.authorImage}
            authorName={item.authorName}
          />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <AppPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
}
