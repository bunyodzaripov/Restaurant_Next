"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";
import Title from "../common/Title";
import { useSendContact } from "@/hooks/useSendContact";
import { useForm } from "react-hook-form";

interface ContactFormProps {
  title: string;
}

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const inputClass =
  "text-[18px] bg-transparent border border-black rounded-none px-6 py-5 placeholder:text-[#585858] focus-visible:ring-0 focus-visible:border-gray-black resize-none";

export default function ContactForm({ title }: ContactFormProps) {
  const fields = [
    {
      name: "name",
      placeholder: "Ваше имя",
      type: "text",
      rules: { required: "Имя обязательно" },
    },
    {
      name: "email",
      placeholder: "Ваш E-mail",
      type: "email",
      rules: {
        required: "Email обязателен",
      },
    },
    {
      name: "phone",
      placeholder: "Ваш номер телефона",
      type: "tel",
      rules: { required: "Телефон обязателен" },
    },
  ] as const;

  const { mutate, isPending } = useSendContact();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    mutate(data);
  };

  return (
    <section className="mt-19">
      <Title title={title} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 w-201 mx-auto"
      >
        {fields.map((field) => (
          <div key={field.name}>
            <Input
              {...register(field.name as keyof FormData, field.rules)}
              type={field.type}
              placeholder={field.placeholder}
              className={inputClass}
            />

            {errors[field.name] && (
              <p className="text-red-500 text-sm mt-2">
                {errors[field.name]?.message as string}
              </p>
            )}
          </div>
        ))}

        <div>
          <Textarea
            {...register("message", {
              required: "Сообщение обязательно",
            })}
            placeholder="Ваше сообщение"
            rows={3}
            className={inputClass}
          />

          {errors.message && (
            <p className="text-red-500 text-sm mt-2">
              {errors.message.message}
            </p>
          )}
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={isPending}
            className="bg-black gap-3 text-white text-[18px] font-semibold px-8 py-6 cursor-pointer"
          >
            {isPending ? "Отправка..." : "Отправить"}
          </Button>
        </div>
      </form>
    </section>
  );
}
