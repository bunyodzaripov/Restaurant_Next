import Image from "next/image";
import { Utensils } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ShadcnButton from "@/components/common/ShadcnButton";
import Link from "next/link";

export default function BookingSection() {
  return (
    <section className="relative flex items-center justify-between mt-19.75">
      <div className="realative backdrop-blur-lg bg-white/30 rounded-[31px] px-13.5 py-16.25 flex flex-col gap-8.25 z-10">
        <div className="absolute w-27.75 h-27.75 border-8 border-[#B6B1AF] rounded-full bg-black flex items-center justify-center -top-8">
          <Utensils size={55} className="text-white" />
        </div>

        <h2 className="mt-5.75 text-[32px] font-bold text-black">
          Забронировать стол
        </h2>

        <div className="border-b border-black">
          <Input
            placeholder="Ваш номер"
            className="border-none shadow-none bg-transparent px-0 placeholder:text-[#585858] focus-visible:ring-0"
          />
        </div>

        <div className="border-b border-black">
          <Select>
            <SelectTrigger className="border-none shadow-none bg-transparent px-0 focus:ring-0 text-[#585858]">
              <SelectValue placeholder="На сколько человек?" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4].map((n) => (
                <SelectItem key={n} value={String(n)}>
                  {n} человек
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="border-b border-black ">
          <Input
            type="date"
            placeholder="Выберите дату"
            className="border-none shadow-none bg-transparent px-0 placeholder:text-[#585858] focus-visible:ring-0 text-[#585858]"
          />
        </div>

        <div className="border-b border-black">
          <Input
            type="time"
            placeholder="Выберите время"
            className="border-none shadow-none bg-transparent px-0 placeholder:text-[#585858] focus-visible:ring-0 text-[#585858]"
          />
        </div>

        <div className="border-b border-black">
          <Select>
            <SelectTrigger className="border-none shadow-none bg-transparent px-0 focus:ring-0 text-[#585858]">
              <SelectValue placeholder="Выберите место" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hall">Зал</SelectItem>
              <SelectItem value="terrace">Терраса</SelectItem>
              <SelectItem value="vip">VIP зал</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Link
          href="/booking"
          className="text-xs text-[#06004C] hover:underline -mt-2"
        >
          Выбрать место на карте
        </Link>

        <ShadcnButton label="Забронировать" href="/booking" />
      </div>

      <Image
        src="/images/booking-img.png"
        alt="Pizza"
        width={736}
        height={736}
      />
    </section>
  );
}
