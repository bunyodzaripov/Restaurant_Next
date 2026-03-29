import Image from "next/image";

import ShadcnButton from "@/components/common/ShadcnButton";

export default function HeroSection() {
  return (
    <section className="mt-19.75">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-6 max-w-xs">
          <h1 className="text-[64px] font-black leading-[150%] text-black uppercase">
            Вкусная еда ждет тебя!
          </h1>
          <ShadcnButton label="Посмотреть меню" href="/menu" />
        </div>

        <Image
          src="/hero-img.png"
          alt="food"
          className="object-cover w-full h-auto"
          width={600}
          height={609}
          priority
        />
      </div>
    </section>
  );
}
