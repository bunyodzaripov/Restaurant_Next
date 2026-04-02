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
import { useState } from "react";
import { BookingFormProps } from "@/types";
import { Button } from "../ui/button";
import { useCreateBooking } from "@/hooks/useCreateBooking";

export default function BookingForm({
  className,
  title,
  titleClassName,
  icon,
  buttonClassName,
}: BookingFormProps) {
  const { mutate, isPending } = useCreateBooking();

  const [email, setEmail] = useState<string>("");
  const [reservationDate, setReservationDate] = useState<string>("");
  const [reservationTime, setReservationTime] = useState<string>("");
  const [guestCount, setGuestCount] = useState<number>(0);
  const [tableId, setTableId] = useState<number>(0);

  const handleSubmit = () => {
    //react-hook-form va zod ishlatish kerak form uchun
    mutate({
      email,
      reservationDate,
      reservationTime,
      guestCount,
      tableId,
    });
  };

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

      <div className="border-b border-black">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ваш электронной почты"
          className="border-none shadow-none bg-transparent px-0 placeholder:text-[#585858] focus-visible:ring-0"
        />
      </div>

      <div className="border-b border-black">
        <Select
          value={guestCount}
          onValueChange={(e) => setGuestCount(Number(e))}
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

      <div className="border-b border-black">
        <Input
          value={reservationDate}
          onChange={(e) => setReservationDate(e.target.value)}
          type="date"
          className="border-none shadow-none bg-transparent px-0 placeholder:text-[#585858] focus-visible:ring-0 text-[#585858]"
        />
      </div>

      <div className="border-b border-black">
        <Input
          value={reservationTime}
          onChange={(e) => setReservationTime(e.target.value)}
          type="time"
          className="border-none shadow-none bg-transparent px-0 placeholder:text-[#585858] focus-visible:ring-0 text-[#585858]"
        />
      </div>

      <div>
        <div className="border-b border-black">
          <Select value={tableId} onValueChange={(e) => setTableId(Number(e))}>
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
          disabled={isPending}
          onClick={() => handleSubmit()}
          variant="default"
          className={cn(
            "bg-black gap-3 text-white text-[18px] font-semibold px-8 py-6 cursor-pointer rounded-br-none ",
            buttonClassName,
          )}
        >
          {isPending ? "Забронировать..." : "Забронировать"}
        </Button>
      </div>
    </div>
  );
}
