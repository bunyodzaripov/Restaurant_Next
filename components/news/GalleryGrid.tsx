import GalleryCard from "@/components/common/GalleryCard";
import { getAll } from "@/service/getAll";
import { Gallery } from "@/types";
import Title from "../common/Title";

export default async function GalleryGrid() {
  const { data } = await getAll("galleries");

  return (
    <section className="py-10">
      <Title title="Галерея" />

      <div className="grid grid-cols-4 gap-x-6 gap-y-12">
        {data.map((item: Gallery) => (
          <GalleryCard key={item.id} image={item.image} />
        ))}
      </div>
    </section>
  );
}
