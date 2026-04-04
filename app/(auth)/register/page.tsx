"use client";

import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRegister } from "@/hooks/useAuth";
import { useForm } from "react-hook-form";
import { RegisterData } from "@/types";

const inputClass =
  "border-none shadow-none bg-transparent px-0 placeholder:text-gray-500 focus-visible:ring-0";

export default function RegisterForm() {
  const { mutate, isPending } = useRegister();

  const fields = [
    {
      name: "firstName",
      placeholder: "Ваше имя",
      type: "text",
      rules: { required: "Имя обязательно" },
    },
    {
      name: "lastName",
      placeholder: "Фамилия",
      type: "text",
      rules: { required: "Фамилия обязательна" },
    },
    {
      name: "email",
      placeholder: "Ваша электронная почта",
      type: "email",
      rules: {
        required: "Email обязателен",
      },
    },
    {
      name: "username",
      placeholder: "Ваше имя пользователя",
      type: "text",
      rules: {
        required: "Имя пользователя обязательно",
      },
    },
    {
      name: "password",
      placeholder: "Пароль",
      type: "password",
      rules: {
        required: "Пароль обязателен",
      },
    },
  ] as const;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>();

  const onSubmit = (data: RegisterData) => {
    mutate(data);
  };

  return (
    <div className="backdrop-blur-md bg-white/30 rounded-[31px] p-14 flex flex-col gap-5">
      <h1 className="text-[32px] font-bold text-black text-center">
        Зарегистрироваться
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10">
        {fields.map((field) => (
          <div key={field.name} className="border-b border-black">
            <Input
              {...register(field.name as keyof RegisterData, field.rules)}
              type={field.type}
              placeholder={field.placeholder}
              className={inputClass}
            />
            {errors[field.name] && (
              <p className="text-red-500 text-sm -mb-6">
                {errors[field.name]?.message as string}
              </p>
            )}
          </div>
        ))}

        <div className="flex items-start gap-2">
          <Checkbox id="agree" className="mt-0.5" />
          <label htmlFor="agree" className="text-xs text-black cursor-pointer">
            Я прочитал и принял Политику конфиденциальности и Условия*
          </label>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <Button
            type="submit"
            disabled={isPending}
            className="w-42.25 px-6.25 py-7 rounded-[13px] bg-black text-white cursor-pointer"
          >
            {isPending ? "Загрузка..." : "Зарегистрироваться"}
          </Button>

          <Link
            href="/login"
            className="text-xs text-center font-semibold text-[#06004C] cursor-pointer"
          >
            Уже есть аккаунт?
          </Link>
        </div>
      </form>
    </div>
  );
}
