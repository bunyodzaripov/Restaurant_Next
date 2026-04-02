"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Button } from "../ui/button";
import Title from "../common/Title";
import { useSendContact } from "@/hooks/useSendContact";

interface ContactFormProps {
  title: string;
}

const inputClass =
  "text-[18px] bg-transparent border border-black rounded-none px-6 py-5 placeholder:text-[#585858] focus-visible:ring-0 focus-visible:border-gray-black resize-none";

export default function ContactForm({ title }: ContactFormProps) {
  const { mutate, isPending } = useSendContact();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = () => {
    mutate({ name, email, phone, message });
  };

  return (
    <section className="mt-19">
      <Title title={title} />

      <div className="flex flex-col gap-5 w-201 mx-auto">
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ваше имя"
          className={inputClass}
        />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Ваш E-mail"
          className={inputClass}
        />
        <Input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="tel"
          placeholder="Ваш номер телефона"
          className={inputClass}
        />
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ваше сообщение"
          rows={3}
          className={inputClass}
        />

        <div className="flex justify-end">
          <Button
            disabled={isPending}
            onClick={() => handleSubmit()}
            variant="default"
            className={
              "bg-black gap-3 text-white text-[18px] font-semibold px-8 py-6 cursor-pointer"
            }
          >
            {isPending ? "Отправка..." : "Отправить"}
          </Button>
        </div>
      </div>
    </section>
  );
}
