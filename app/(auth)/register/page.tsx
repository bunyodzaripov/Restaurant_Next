"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const fields = [
  { name: "firstName", placeholder: "Ваше имя", type: "text" },
  { name: "lastName", placeholder: "Фамилия", type: "text" },
  { name: "phone", placeholder: "Ваш номер телефона", type: "tel" },
  { name: "username", placeholder: "Ваше имя пользователя", type: "text" },
  { name: "password", placeholder: "Пароль", type: "password" },
  {
    name: "confirmPassword",
    placeholder: "Подтвердите пароль",
    type: "password",
  },
];

const inputClass =
  "border-none shadow-none bg-transparent px-0 placeholder:text-gray-500 focus-visible:ring-0";

export default function RegisterForm() {
  const [form, setForm] = useState<Record<string, string>>({});
  const [agreed, setAgreed] = useState(false);

  const handleChange = (name: string, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="backdrop-blur-md bg-white/30 rounded-[31px] p-14 flex flex-col gap-5">
      <h1 className="text-[32px] font-bold text-black text-center">
        Зарегистрироваться
      </h1>

      <div className="flex flex-col gap-10">
        {fields.map((field) => (
          <div key={field.name} className="border-b border-black">
            <Input
              type={field.type}
              placeholder={field.placeholder}
              value={form[field.name] || ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
              className={inputClass}
            />
          </div>
        ))}
      </div>

      <div className="flex items-start gap-2">
        <Checkbox
          id="agree"
          checked={agreed}
          onCheckedChange={(val) => setAgreed(!!val)}
          className="mt-0.5"
        />
        <label htmlFor="agree" className="text-xs text-black  cursor-pointer">
          Я прочитал и принял Политику конфиденциальности и Условия*
        </label>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <Button className="w-42.25 px-6.25 py-7 rounded-[13px] bg-black text-white cursor-pointer">
          Вход в аккаунт
        </Button>

        <Link
          href="/login"
          className="text-xs text-center font-semibold text-[#06004C] cursor-pointer"
        >
          Уже есть аккаунт?
        </Link>
      </div>
    </div>
  );
}
