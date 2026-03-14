import Image from "next/image";

interface NewsCardProps {
  image: string;
  description: string;
  authorImage: string;
  authorName: string;
}

export default function NewsCard({
  image,
  description,
  authorImage,
  authorName,
}: NewsCardProps) {
  return (
    <div className="backdrop-blur-lg bg-white/30 rounded-[30px] ">
      <div className="relative -top-15 left-4">
        <Image src={image} alt={authorName} width={213} height={157} />
      </div>

      <div className="px-6.25 pb-5 flex flex-col gap-2">
        <p className="text-base text-black leading-[160%]">{description}</p>

        <div className="flex items-center gap-3">
          <div className="rounded-full">
            <Image src={authorImage} alt={authorName} width={45} height={45} />
          </div>
          <span className="text-[18px] font-semibold text-black">
            {authorName}
          </span>
        </div>
      </div>
    </div>
  );
}
