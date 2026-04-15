"use client";

import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

import CartItem from "./CartItem";
import { Button } from "@/components/ui/button";
import EmptyState from "../common/EmptyState";
import { Cart } from "@/types/index";
import { useDeleteCartItem, useUpdateCartItem } from "@/hooks/useCart";

interface Props {
  cart: Cart | undefined;
}

export default function CartSection({ cart }: Props) {
  const router = useRouter();
  const { mutate: updateCartItem } = useUpdateCartItem();
  const { mutate: deleteCartItem } = useDeleteCartItem();

  const isCartEmpty = !cart || !cart.items || cart.items.length === 0;

  if (isCartEmpty) {
    return (
      <div className="py-20">
        <EmptyState
          title="Ваша корзина пуста"
          description="Похоже, вы еще ничего не выбрали. Самое время добавить что-нибудь вкусное!"
        />
        <div className="mt-6 flex justify-center">
          <Button onClick={() => router.push("/menu")} variant="outline">
            Перейти в меню
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start py-10">
      <div className="flex-1 flex flex-col gap-4 w-full">
        <h1 className="text-3xl font-bold mb-4">Корзина</h1>
        {cart.items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onDelete={(id) => deleteCartItem(id)}
            onUpdate={(id, quantity) =>
              updateCartItem({ itemId: id, quantity })
            }
          />
        ))}
      </div>

      <div className="backdrop-blur-md bg-white/30 rounded-2xl p-6 w-full lg:w-80 flex flex-col gap-6 sticky top-24 border border-white/20 shadow-xl">
        <h2 className="text-2xl font-bold text-black border-b border-black/10 pb-2">
          Итого
        </h2>

        <div className="flex flex-col gap-3">
          <div className="max-h-50 overflow-y-auto pr-2 flex flex-col gap-2">
            {cart.items.map((item) => (
              <div
                className="flex justify-between text-sm text-zinc-700"
                key={item.id}
              >
                <span className="truncate flex-1 mr-2">
                  {item.product?.name}
                </span>
                <span className="font-medium whitespace-nowrap">
                  {item.quantity} x {item.product?.price?.toLocaleString()}
                </span>
              </div>
            ))}
          </div>

          <div className="h-px bg-black/20 my-2" />

          <div className="flex justify-between font-extrabold text-xl text-black">
            <span>К оплате:</span>
            <span className="text-primary">
              {cart.subtotal?.toLocaleString()} сум
            </span>
          </div>
        </div>

        <Button
          onClick={() => router.push("/checkout")}
          className="w-full text-base bg-black text-white rounded-xl py-6 hover:bg-zinc-800 transition-all cursor-pointer shadow-lg"
        >
          Оформить заказ
        </Button>
      </div>
    </div>
  );
}
