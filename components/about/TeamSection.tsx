import { getAll } from "@/service/getAll";
import { Team } from "@/types";
import Image from "next/image";

export default async function TeamSection() {
  const { data } = await getAll("cook");

  return (
    <section className="mt-14.25">
      <h2 className="text-[48px] font-extrabold text-center text-black mb-15">
        Наша команда
      </h2>

      <div className="grid grid-cols-3 gap-x-31.25 gap-y-20">
        {data.map((member: Team) => (
          <div key={member.id} className="flex flex-col items-center gap-4">
            <div className="relative p-4 w-58.25 h-58.25 rounded-full border border-black shrink-0 flex items-center justify-center">
              <Image
                src={`https://anorkhulov.uz/${member.avatar}`}
                alt={`${member.firstName} ${member.lastName}`}
                fill
                className="object-cover"
              />
            </div>

            <div className="text-center">
              <p className="text-[24px] font-extrabold text-black">
                {`${member.firstName} ${member.lastName}`}
              </p>
              <p className="text-[20px] font-bold text-[#464646]">
                {member.position}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
