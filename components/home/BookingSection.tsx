import Image from "next/image";
import { Utensils } from "lucide-react";
import BookingForm from "@/components/common/BookingForm";

export default function BookingSection() {
  return (
    <section className="relative flex items-center justify-between mt-19.75">
      <BookingForm
        className="relative backdrop-blur-lg bg-white/30 rounded-[31px] px-13.5 py-16.25 "
        title="Забронировать стол"
        titleClassName="text-[32px] font-bold"
        icon={<Utensils size={55} className="text-white" />}
      />

      <Image src="/booking-img.png" alt="Pizza" width={736} height={736} />
    </section>
  );
}
