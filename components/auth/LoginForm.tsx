"use client";

import { Utensils } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLogin } from "@/hooks/useAuth";
import { useForm } from "react-hook-form";

type FormData = {
  username: string;
  password: string;
};

export default function LoginForm() {
  const { mutate, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    mutate(data);
  };

  return (
    <div className="w-115.75 relative backdrop-blur-md bg-white/30 rounded-[31px] p-14 flex flex-col gap-8">
      <div className="absolute w-27.75 h-27.75 border-8 border-[#B6B1AF] rounded-full bg-black flex items-center justify-center -top-8">
        <Utensils size={45} className="text-white" />
      </div>

      <h1 className="mt-10 text-[32px] font-bold text-black">Вход в аккаунт</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-5"
      >
        <div className="border-b border-black">
          <Input
            {...register("username", {
              required: "Имя пользователя обязательно",
            })}
            placeholder="Ваше имя пользователя"
            className="border-none shadow-none bg-transparent px-0 placeholder:text-[#585858] focus-visible:ring-0"
          />
        </div>
        {errors.username && (
          <p className="text-red-500 text-sm -mt-5">
            {errors.username.message}
          </p>
        )}

        <div className="border-b border-black">
          <Input
            type="password"
            {...register("password", {
              required: "Пароль обязательно!",
            })}
            placeholder="Пароль"
            className="border-none shadow-none bg-transparent px-0 placeholder:text-[#585858] focus-visible:ring-0"
          />
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm -mt-5">
            {errors.password.message}
          </p>
        )}

        <div className="w-full -mt-4">
          <Link href="#" className="text-xs text-black font-semibold">
            Забыли пароль?
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center gap-3">
          <Button
            type="submit"
            disabled={isPending}
            className="w-42.25 px-6.25 py-7 rounded-[13px] bg-black text-white cursor-pointer"
          >
            {isPending ? "Вход..." : "Вход"}
          </Button>

          <Link href="/register" className="text-xs text-black font-semibold">
            Еще нет учетной записи?
          </Link>
        </div>
      </form>
    </div>
  );
}
