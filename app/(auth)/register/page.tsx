"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRegister } from "@/hooks/useAuth";
import { toast } from "sonner";

const inputClass =
  "border-none shadow-none bg-transparent px-0 placeholder:text-gray-500 focus-visible:ring-0";

export default function RegisterForm() {
  const { mutate, isPending } = useRegister();

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = () => {
    //react-hook-form va zod ishlatish kerak form uchun
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !username.trim() ||
      !password.trim()
    ) {
      toast.error("Пожалуйста, заполните все поля!");
      return;
    }

    mutate({
      firstName,
      lastName,
      email,
      username,
      password,
    });
  };

  return (
    <div className="backdrop-blur-md bg-white/30 rounded-[31px] p-14 flex flex-col gap-5">
      <h1 className="text-[32px] font-bold text-black text-center">
        Зарегистрироваться
      </h1>

      <div className="flex flex-col gap-10">
        <div className="border-b border-black">
          <Input
            type="text"
            placeholder="Ваше имя"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={inputClass}
          />
        </div>
        <div className="border-b border-black">
          <Input
            type="text"
            placeholder="Фамилия"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={inputClass}
          />
        </div>
        <div className="border-b border-black">
          <Input
            type="email"
            placeholder="Ваш электронная почта"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
        </div>
        <div className="border-b border-black">
          <Input
            type="text"
            placeholder="Ваше имя пользователя"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={inputClass}
          />
        </div>
        <div className="border-b border-black">
          <Input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={inputClass}
          />
        </div>
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
        <Button
          disabled={!agreed || isPending}
          onClick={handleSubmit}
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
    </div>
  );
}
