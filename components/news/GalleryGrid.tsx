import GalleryCard from "@/components/common/GalleryCard";
import { getAll } from "@/service/getAll";
import { Gallery } from "@/types";
import Title from "../common/Title";
import EmptyState from "../common/EmptyState";

export default async function GalleryGrid() {
  const { data } = await getAll("galleries");

  return (
    <section className="py-10">
      <Title title="Галерея" />

      {data?.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
          {data?.map((item: Gallery) => (
            <GalleryCard key={item.id} image={item.image} />
          ))}
        </div>
      )}
    </section>
  );
}
