"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartItem as CartItemType } from "@/types/index";
import { useState } from "react";

interface Props {
  item: CartItemType;
  onDelete: (id: number) => void;
  onUpdate: (id: number, quantity: number) => void;
}

export default function CartItem({ item, onDelete, onUpdate }: Props) {
  const [imgSrc, setImgSrc] = useState(
    item?.product.image
      ? `https://anorkhulov.uz/${item.product.image}`
      : "/no-img.png",
  );

  return (
    <div className="backdrop-blur-md bg-white/30 rounded-2xl p-4 flex items-center gap-6">
      <div className="relative w-24 h-24 shrink-0">
        <Image
          src={imgSrc}
          alt={item.product.name}
          fill
          sizes="w-full h-full"
          className="object-contain drop-shadow-lg rounded-2xl"
          onError={() => setImgSrc("/no-img.png")}
        />
      </div>

      <div className="flex-1">
        <h3 className="font-bold text-black text-2xl">{item.product.name}</h3>
        <p className="text-base text-black">
          {item.unitPrice.toLocaleString()} сум
        </p>
      </div>

      <div className="flex items-center gap-3">
        <Button
          variant={"ghost"}
          onClick={() => onUpdate(item.id, item.quantity - 1)}
          disabled={item.quantity <= 1}
          className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:bg-white/50 transition disabled:opacity-50"
        >
          <Minus size={16} />
        </Button>
        <span className="font-semibold w-6 text-center text-lg">
          {item.quantity}
        </span>
        <Button
          variant={"ghost"}
          onClick={() => onUpdate(item.id, item.quantity + 1)}
          className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:bg-white/50 transition"
        >
          <Plus size={16} />
        </Button>
      </div>

      <p className="font-semibold text-black text-lg w-28 text-right">
        {item.totalPrice.toLocaleString()} сум
      </p>

      <button
        onClick={() => onDelete(item.id)}
        className="flex items-center cursor-pointer justify-center hover:text-red-500 transition"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
}
