"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartItem as CartItemType } from "@/types/index";

interface Props {
  item: CartItemType;
  onDelete: (id: number) => void;
  onUpdate: (id: number, quantity: number) => void;
}

export default function CartItem({ item, onDelete, onUpdate }: Props) {
  return (
    <div className="backdrop-blur-md bg-white/30 rounded-2xl p-4 flex items-center gap-6">
      <div className="relative w-24 h-24 shrink-0">
        <Image
          src={`https://anorkhulov.uz/${item.product.image}`}
          alt={item.product.name}
          fill
          sizes="w-full h-full"
          className="object-contain drop-shadow-lg rounded-2xl"
        />
      </div>

      <div className="flex-1">
        <h3 className="font-bold text-gray-900 text-lg">{item.product.name}</h3>
        <p className="text-sm text-gray-500">
          {item.unitPrice.toLocaleString()} so`m
        </p>
      </div>

      <div className="flex items-center gap-3">
        <Button
          variant={"ghost"}
          onClick={() => onUpdate(item.id, item.quantity - 1)}
          disabled={item.quantity <= 1}
          className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:bg-white/50 transition disabled:opacity-50"
        >
          <Minus size={14} />
        </Button>
        <span className="font-semibold w-6 text-center">{item.quantity}</span>
        <Button
          variant={"ghost"}
          onClick={() => onUpdate(item.id, item.quantity + 1)}
          className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:bg-white/50 transition"
        >
          <Plus size={14} />
        </Button>
      </div>

      <p className="font-bold text-gray-900 text-lg w-28 text-right">
        {item.totalPrice.toLocaleString()} so`m
      </p>

      <Button
        variant={"destructive"}
        onClick={() => onDelete(item.id)}
        className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-red-50 transition text-red-400 hover:text-red-600"
      >
        <Trash2 size={18} />
      </Button>
    </div>
  );
}
