import Image from "next/image";

const team = [
  {
    id: 1,
    name: "Александр Петро",
    role: "главный повар",
    image: "/images/team-1.png",
  },
  {
    id: 2,
    name: "Александр Петро",
    role: "помощник повара",
    image: "/images/team-1.png",
  },
  {
    id: 3,
    name: "Александр Петро",
    role: "бургер кинг",
    image: "/images/team-1.png",
  },
  {
    id: 4,
    name: "Жулия Виллиам",
    role: "официантка",
    image: "/images/team-2.png",
  },
  {
    id: 5,
    name: "Жулия Виллиам",
    role: "официантка",
    image: "/images/team-2.png",
  },
  {
    id: 6,
    name: "Жулия Виллиам",
    role: "официантка",
    image: "/images/team-2.png",
  },
];

export default function TeamSection() {
  return (
    <section className="mt-14.25">
      <h2 className="text-[48px] font-extrabold text-center text-black mb-15">
        Наша команда
      </h2>

      <div className="grid grid-cols-3 gap-x-31.25 gap-y-20">
        {team.map((member) => (
          <div key={member.id} className="flex flex-col items-center gap-4">
            <div className="relative p-4 w-58.25 h-58.25 rounded-full border border-black shrink-0 flex items-center justify-center">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="text-center">
              <p className="text-[24px] font-extrabold text-black">
                {member.name}
              </p>
              <p className="text-[20px] font-bold text-[#464646]">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
