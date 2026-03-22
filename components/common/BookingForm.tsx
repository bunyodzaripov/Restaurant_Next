import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import ShadcnButton from "@/components/common/ShadcnButton";
import { cn } from "@/lib/utils";

interface BookingFormProps {
  className?: string;
  title?: string;
  titleClassName?: string;
  icon?: React.ReactNode;
  buttonClassName?: string;
}

export default function BookingForm({
  className,
  title,
  titleClassName,
  icon,
  buttonClassName,
}: BookingFormProps) {
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
          placeholder="Ваш номер"
          className="border-none shadow-none bg-transparent px-0 placeholder:text-[#585858] focus-visible:ring-0"
        />
      </div>

      <div className="border-b border-black">
        <Select>
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
          type="date"
          className="border-none shadow-none bg-transparent px-0 placeholder:text-[#585858] focus-visible:ring-0 text-[#585858]"
        />
      </div>

      <div className="border-b border-black">
        <Input
          type="time"
          className="border-none shadow-none bg-transparent px-0 placeholder:text-[#585858] focus-visible:ring-0 text-[#585858]"
        />
      </div>

      <div>
        <div className="border-b border-black">
          <Select>
            <SelectTrigger className="w-full border-none shadow-none bg-transparent px-0 focus:ring-0 text-[#585858]">
              <SelectValue placeholder="Выберите место" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hall">Зал</SelectItem>
              <SelectItem value="terrace">Терраса</SelectItem>
              <SelectItem value="vip">VIP зал</SelectItem>
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

      <ShadcnButton
        className={cn(buttonClassName)}
        label="Забронировать"
        href="/booking"
      />
    </div>
  );
}
