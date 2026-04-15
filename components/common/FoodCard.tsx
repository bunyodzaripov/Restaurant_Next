"use client";

import Image from "next/image";
import { HeartIcon, ShoppingCart, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FoodCardProps } from "@/types";
import { getCookie } from "cookies-next";
import { useAddToCart } from "@/hooks/useCart";
import { useState } from "react";

export default function FoodCard({
  id,
  image,
  name,
  description,
  price,
  className,
}: FoodCardProps) {
  const [imgSrc, setImgSrc] = useState(
    image ? `https://anorkhulov.uz/${image}` : "/no-img.png",
  );
  const userId = getCookie("userId");
  const { mutate, isPending } = useAddToCart();

  function handleAddToCart(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    e.stopPropagation();
    const payload = {
      userId: Number(userId),
      productId: id,
      quantity: 1,
    };
    mutate(payload);
  }

  return (
    <Link href={`/menu/${id}`}>
      <div
        className={cn(
          "backdrop-blur-lg bg-white/40 rounded-[38px] p-5 flex flex-col justify-between w-65.75 h-77.5",
          className,
        )}
      >
        <div className="relative -mt-20 ">
          <Image
            src={imgSrc}
            alt={name}
            width={239}
            height={239}
            loading="eager"
            onError={() => setImgSrc("/no-img.png")}
          />
        </div>

        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-bold text-[24px] text-black">{name}</h3>
            <p className="text-[15px] text-black">{description}</p>
          </div>
          <Button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            variant="ghost"
            className="rounded-full hover:bg-white/50"
          >
            <HeartIcon size={17} className="text-black font-bold" />
          </Button>
        </div>

        <div className="flex items-center justify-between mt-1">
          <span className="font-bold text-[24px] text-black">{price}</span>
          <Button
            disabled={isPending}
            onClick={(e) => {
              handleAddToCart(e);
            }}
            size="icon"
            className="bg-black text-white p-5 cursor-pointer"
          >
            {isPending ? (
              <Loader className="animate-spin" />
            ) : (
              <ShoppingCart size={17} />
            )}
          </Button>
        </div>
      </div>
    </Link>
  );
}
