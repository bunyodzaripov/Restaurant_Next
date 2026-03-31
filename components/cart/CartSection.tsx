"use client";

import CartItem from "./CartItem";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { Cart } from "@/types/index";
import Title from "../common/Title";
import { deleteCartItem, updateCartItem } from "@/service/cart";

interface Props {
  cart: Cart;
}

export default function CartSection({ cart }: Props) {
  const router = useRouter();

  async function handleDelete(id: number) {
    try {
      await deleteCartItem(id);
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  }

  async function handleUpdate(id: number, quantity: number) {
    try {
      await updateCartItem(id, quantity);
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  }

  if (cart.items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <ShoppingBag size={64} className="text-black/70" />
        <p className="text-black/70 text-lg">Корзина пуста</p>
      </div>
    );
  }

  return (
    <section className="py-10">
      <Title title="Корзина" />

      <div className="flex gap-8 items-start">
        <div className="flex-1 flex flex-col gap-4">
          {cart.items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onDelete={(id) => handleDelete(id)}
              onUpdate={(id, quantity) => handleUpdate(id, quantity)}
            />
          ))}
        </div>

        <div className="backdrop-blur-md bg-white/30 rounded-2xl p-6 w-80 flex flex-col gap-4 sticky top-4">
          <h2 className="text-2xl font-bold text-black">Подсчет</h2>

          <div className="flex flex-col gap-4">
            {cart.items.map((item) => (
              <div
                className="flex justify-between text-base text-black border-b border-black pb-2.5"
                key={item.id}
              >
                <span>
                  {item.product.name} ({item.quantity})
                </span>
                <span>{item.totalPrice.toLocaleString()} сум</span>
              </div>
            ))}
            <div className="flex justify-between font-bold text-lg text-black">
              <span>Итого:</span>
              <span>{cart.subtotal.toLocaleString()} сум</span>
            </div>
          </div>

          <Button
            onClick={() => router.push("/checkout")}
            className="w-full text-base bg-black text-white rounded-xl py-6 hover:bg-zinc-800 cursor-pointer"
          >
            Оформить заказ
          </Button>
        </div>
      </div>
    </section>
  );
}
