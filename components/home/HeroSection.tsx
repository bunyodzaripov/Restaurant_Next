import Image from "next/image";

import ShadcnButton from "../common/ShadcnButton";

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
          src="/images/hero-img.png"
          alt="food"
          className="object-cover"
          width={700}
          height={700}
          priority
        />
      </div>
    </section>
  );
}
