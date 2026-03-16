"use client";

import { useState } from "react";
import GalleryCard from "@/components/common/GalleryCard";
import AppPagination from "@/components/common/AppPagination";

const allImages = [
  { id: 1, image: "/images/gallery-1.png" },
  { id: 2, image: "/images/gallery-1.png" },
  { id: 3, image: "/images/gallery-1.png" },
  { id: 4, image: "/images/gallery-1.png" },
  { id: 5, image: "/images/gallery-1.png" },
  { id: 6, image: "/images/gallery-1.png" },
  { id: 7, image: "/images/gallery-1.png" },
  { id: 8, image: "/images/gallery-1.png" },
  { id: 9, image: "/images/gallery-1.png" },
  { id: 10, image: "/images/gallery-1.png" },
  { id: 11, image: "/images/gallery-1.png" },
  { id: 12, image: "/images/gallery-1.png" },
];

const PER_PAGE = 8;

export default function GalleryGrid() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allImages.length / PER_PAGE);
  const paginated = allImages.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE,
  );

  return (
    <section className="py-10">
      <h2 className="text-[48px] font-extrabold text-center text-black mb-15">
        Галерея
      </h2>

      <div className="grid grid-cols-4 gap-x-6 gap-y-12">
        {paginated.map((item) => (
          <GalleryCard key={item.id} image={item.image} />
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
