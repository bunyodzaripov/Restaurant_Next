import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ShadcnButton from "@/components/common/ShadcnButton";

interface ContactFormProps {
  title?: string;
}

const inputClass =
  "text-[18px] bg-transparent border border-black rounded-none px-6 py-5 placeholder:text-[#585858] focus-visible:ring-0 focus-visible:border-gray-black resize-none";

export default function ContactForm({ title }: ContactFormProps) {
  return (
    <section className="mt-19">
      <h2 className="text-[48px] font-extrabold text-center text-black mb-15">
        {title}
      </h2>

      <div className="flex flex-col gap-5 w-201 mx-auto">
        <Input placeholder="Ваше имя" className={inputClass} />
        <Input type="email" placeholder="Ваш E-mail" className={inputClass} />
        <Input
          type="tel"
          placeholder="Ваш номер телефона"
          className={inputClass}
        />
        <Textarea
          placeholder="Ваше сообщение"
          rows={3}
          className={inputClass}
        />

        <div className="flex justify-end mt-2">
          <ShadcnButton label="Отправить" href="#" />
        </div>
      </div>
    </section>
  );
}
