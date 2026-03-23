"use client";

import { Utensils } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="w-115.75 relative backdrop-blur-md bg-white/30 rounded-[31px] p-14 flex flex-col gap-8">
      <div className="absolute w-27.75 h-27.75 border-8 border-[#B6B1AF] rounded-full bg-black flex items-center justify-center -top-8">
        <Utensils size={45} className="text-white" />
      </div>

      <h1 className="mt-10 text-[32px] font-bold text-black">Вход в аккаунт</h1>

      <div className="w-full flex flex-col gap-5">
        <div className="border-b border-black">
          <Input
            placeholder="Ваше имя пользователя"
            className="border-none shadow-none bg-transparent px-0 placeholder:text-[#585858] focus-visible:ring-0"
          />
        </div>
        <div className="border-b border-black">
          <Input
            type="password"
            placeholder="Пароль"
            className="border-none shadow-none bg-transparent px-0 placeholder:text-[#585858] focus-visible:ring-0"
          />
        </div>
      </div>

      <div className="w-full -mt-6">
        <Link href="#" className="text-xs text-black font-semibold">
          Забыли пароль?
        </Link>
      </div>

      <div className="flex flex-col justify-center items-center gap-3">
        <Button className="w-42.25 px-6.25 py-7 rounded-[13px] bg-black text-white cursor-pointer">
          Вход в аккаунт
        </Button>

        <Link href="/register" className="text-xs text-black font-semibold">
          Еще нет учетной записи?
        </Link>
      </div>
    </div>
  );
}
