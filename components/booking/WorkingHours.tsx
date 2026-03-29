import Image from "next/image";
import Title from "../common/Title";

const hours = [
  { day: "Понедельник", time: "10:00–23:00" },
  { day: "Вторник", time: "10:00–23:00" },
  { day: "Среда", time: "10:00–23:00" },
  { day: "Четверг", time: "10:00–23:00" },
  { day: "Пятница", time: "10:00–23:00" },
  { day: "Воскресенье", time: "11:00–22:00" },
];

export default function WorkingHours() {
  return (
    <section className="mt-8">
      <Title title="Бронирование" />

      <div className="flex items-center gap-29.5 mt-14">
        <div className="flex-1">
          <h2 className="text-[32px] font-bold text-black mb-9">Часы работы</h2>

          <div className="flex flex-col">
            {hours.map((item) => (
              <div key={item.day}>
                <div className="flex items-center justify-between py-3 text-[20px] text-black font-medium border-b border-black">
                  <span>{item.day}</span>
                  <span>{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-126 h-169 rounded-2xl overflow-hidden shrink-0">
          <Image
            src="/booking-img-2.png"
            alt="Restaurant"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
