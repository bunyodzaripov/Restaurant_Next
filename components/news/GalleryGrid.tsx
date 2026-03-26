import GalleryCard from "@/components/common/GalleryCard";
import { getAll } from "@/service/getAll";
import { Gallery } from "@/types";

export default async function GalleryGrid() {
  const { data } = await getAll("galleries");

  return (
    <section className="py-10">
      <h2 className="text-[48px] font-extrabold text-center text-black mb-15">
        Галерея
      </h2>

      <div className="grid grid-cols-4 gap-x-6 gap-y-12">
        {data.map((item: Gallery) => (
          <GalleryCard key={item.id} image={item.image} />
        ))}
      </div>
    </section>
  );
}
