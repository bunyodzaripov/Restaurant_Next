"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Minus, Plus } from "lucide-react";
import Link from "next/link";
import { Products } from "@/types";

interface Props {
  product: Products;
}

export default function ProductDetail({ product }: Props) {
  const [count, setCount] = useState(1);
  console.log("product", product);

  return (
    <section className="py-10">
      <h2 className="text-[48px] font-extrabold text-center text-black mb-15">
        {product.category.name}
      </h2>

      <div className="flex items-center justify-between gap-10">
        <div className="relative w-125 h-125 shrink-0">
          <Image
            src={`https://anorkhulov.uz/${product.image}`}
            alt={product.name}
            fill
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>

        <div className="flex flex-col flex-1">
          <h2 className="text-[40px] font-bold text-black mb-3.75">
            {product.name}
          </h2>

          <div className="flex items-center gap-12 mb-10.75">
            <span className="text-[32px] font-bold text-black">
              {product.price}$
            </span>

            <div className="flex items-center gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={29}
                  className={
                    i < Math.floor(Number(product.rating))
                      ? "fill-[#FAFF00] text-[#FAFF00]"
                      : "fill-[#C1C0C0] text-[#C1C0C0]"
                  }
                />
              ))}

              <span className="text-[24px] font-medium text-black ml-1">
                {product.rating}
              </span>

              <Link
                href="#reviews"
                className="text-[24px] text-[#6D6D6D] hover:underline"
              >
                (Смотреть отзывы)
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-[32px] text-black">Описание:</h3>
            <p className="text-[24px] text-black font-normal ">
              {product.description}
            </p>
          </div>

          <div className="flex items-center gap-9 mt-12.5">
            <div className="flex items-center gap-7 bg-white/40 rounded-[15px] p-4">
              <button
                onClick={() => setCount((c) => Math.max(1, c - 1))}
                className="cursor-pointer"
              >
                <Minus size={24} />
              </button>
              <span className="text-[24px] font-medium text-center">
                {count}
              </span>
              <button
                onClick={() => setCount((c) => c + 1)}
                className="cursor-pointer"
              >
                <Plus size={24} />
              </button>
            </div>

            <button className="bg-black text-white text-[18px] font-semibold py-5 px-10 rounded-[13px] cursor-pointer">
              В корзину
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
