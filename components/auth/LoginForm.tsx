"use client";

import { Utensils } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="relative backdrop-blur-md bg-white/30 border border-white/40 rounded-2xl px-10 py-12 w-90 flex flex-col items-center gap-6">
      {/* Ikonka */}
      <div className="absolute -top-8 w-16 h-16 rounded-full bg-black border-4 border-white/60 flex items-center justify-center">
        <Utensils size={28} className="text-white" />
      </div>

      {/* Sarlavha */}
      <h1 className="mt-6 text-2xl font-bold text-gray-900">Вход в аккаунт</h1>

      {/* Inputlar */}
      <div className="w-full flex flex-col gap-5">
        <div className="border-b border-gray-500">
          <Input
            placeholder="Ваше имя пользователя"
            className="border-none shadow-none bg-transparent px-0 placeholder:text-gray-500 focus-visible:ring-0"
          />
        </div>
        <div className="border-b border-gray-500">
          <Input
            type="password"
            placeholder="Пароль"
            className="border-none shadow-none bg-transparent px-0 placeholder:text-gray-500 focus-visible:ring-0"
          />
        </div>
      </div>

      {/* Parolni unutdim */}
      <div className="w-full -mt-2">
        <Link
          href="#"
          className="text-xs text-gray-500 hover:text-black transition"
        >
          Забыли пароль?
        </Link>
      </div>

      {/* Tugma */}
      <Button className="w-full rounded-full bg-black text-white hover:bg-zinc-800 cursor-pointer">
        Вход в аккаунт
      </Button>

      {/* Register link */}
      <Link
        href="/register"
        className="text-xs text-gray-500 hover:text-black transition"
      >
        Еще нет учетной записи?
      </Link>
    </div>
  );
}
