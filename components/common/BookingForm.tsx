"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { BookingFormProps } from "@/types";
import { Button } from "../ui/button";
import { useCreateBooking } from "@/hooks/useCreateBooking";
import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  reservationDate: string;
  reservationTime: string;
  guestCount: number;
  tableId: number;
};

export default function BookingForm({
  className,
  title,
  titleClassName,
  icon,
  buttonClassName,
}: BookingFormProps) {
  const fields = [
    {
      name: "email",
      type: "email",
      placeholder: "Ваш электронной почты",
      rules: {
        required: "Email обязателен",
      },
    },
    {
      name: "reservationDate",
      type: "date",
      placeholder: "",
      rules: { required: "Дата обязателена!" },
    },
    {
      name: "reservationTime",
      type: "time",
      placeholder: "",
      rules: { required: "Время обязательно!" },
    },
  ] as const;

  const { mutate, isPending } = useCreateBooking();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      guestCount: 1,
      tableId: 1,
    },
  });

  const onSubmit = (data: FormData) => {
    mutate(data);
  };

  const guestCount = watch("guestCount");
  const tableId = watch("tableId");

  return (
    <div className={cn("flex flex-col gap-8.25", className)}>
      {icon && (
        <div className="absolute w-27.75 h-27.75 border-8 border-[#B6B1AF] rounded-full bg-black flex items-center justify-center -top-8">
          {icon}
        </div>
      )}

      {title && (
        <h2 className={cn("text-black", titleClassName, icon && "mt-5.75")}>
          {title}
        </h2>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-8.25"
      >
        {fields.map((field) => (
          <div key={field.name} className="border-b border-black">
            <Input
              {...register(field.name as keyof FormData, field.rules)}
              type={field.type}
              placeholder={field.placeholder}
              className="border-none shadow-none bg-transparent px-0 placeholder:text-[#585858] focus-visible:ring-0 text-[#585858]"
            />

            {errors[field.name] && (
              <p className="text-red-500 text-sm -mb-6">
                {errors[field.name]?.message as string}
              </p>
            )}
          </div>
        ))}

        <div className="border-b border-black">
          <Select
            value={guestCount?.toString() ?? ""}
            onValueChange={(val) =>
              setValue("guestCount", Number(val), { shouldValidate: true })
            }
          >
            <SelectTrigger className="w-full border-none shadow-none bg-transparent px-0 focus:ring-0 text-[#585858]">
              <SelectValue placeholder="На сколько человек?" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4].map((n) => (
                <SelectItem key={n} value={String(n)}>
                  {n} человек
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <div className="border-b border-black">
            <Select
              value={tableId?.toString() ?? ""}
              onValueChange={(val) =>
                setValue("tableId", Number(val), { shouldValidate: true })
              }
            >
              <SelectTrigger className="w-full border-none shadow-none bg-transparent px-0 focus:ring-0 text-[#585858]">
                <SelectValue placeholder="Выберите место" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Зал</SelectItem>
                <SelectItem value="2">Терраса</SelectItem>
                <SelectItem value="3">VIP зал</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Link
            href="/booking"
            className="text-xs text-[#06004C] hover:underline -mt-2"
          >
            Выбрать место на карте
          </Link>
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={isPending}
            className={cn(
              "bg-black gap-3 text-white text-[18px] font-semibold px-8 py-6 cursor-pointer rounded-br-none",
              buttonClassName,
            )}
          >
            {isPending ? "Забронировать..." : "Забронировать"}
          </Button>
        </div>
      </form>
    </div>
  );
}
