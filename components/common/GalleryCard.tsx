import Image from "next/image";

interface GalleryCardProps {
  image: string;
  alt?: string;
}

export default function GalleryCard({
  image,
  alt = "gallery",
}: GalleryCardProps) {
  return (
    <div className="relative w-full h-50 rounded-[20px] overflow-hidden">
      <Image src={image} alt={alt} fill className="object-cover" />
    </div>
  );
}
