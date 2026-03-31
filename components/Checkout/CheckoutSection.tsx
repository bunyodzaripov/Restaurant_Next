"use client";

import { useState } from "react";
import Image from "next/image";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Cart } from "@/types/index";
import Title from "../common/Title";
import { createOrder } from "@/service/cart";

interface Props {
  cart: Cart;
}

export default function CheckoutSection({ cart }: Props) {
  const [delivery, setDelivery] = useState("pickup");
  const [payment, setPayment] = useState("card");

  async function handleCheckout() {
    try {
      const payload = {
        customerId: 5,
        paymentMethod: "CASH",
        deliveryAddress: "Toshkent, Chilonzor, 24-uy",
        items: [
          {
            productId: 38,
            quantity: 2,
          },
        ],
      };
      await createOrder(payload);
      alert("Buyurtma muvaffaqiyatli yaratildi");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="py-10">
      <Title title="Оформление заказа" />

      <div className="flex items-start gap-12">
        <div className="flex-1 flex flex-col gap-8">
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4">
              Способ получения:
            </h2>
            <RadioGroup
              value={delivery}
              onValueChange={setDelivery}
              className="flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                <RadioGroupItem value="pickup" id="pickup" />
                <Label htmlFor="pickup" className="text-base cursor-pointer">
                  Заказ с собой
                </Label>
              </div>

              <div className="flex items-center gap-3">
                <RadioGroupItem value="door" id="door" />
                <Label htmlFor="door" className="text-base cursor-pointer">
                  Доставка до двери
                </Label>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="address" id="address" />
                  <Label
                    htmlFor="address"
                    className="flex items-center gap-2 text-base cursor-pointer"
                  >
                    <Home size={18} />
                    Доставка по адресу:
                  </Label>
                </div>
                {delivery === "address" && (
                  <div className="ml-7 flex flex-col gap-2">
                    <p className="text-sm text-gray-500">
                      Укажите адрес доставки на карте:
                    </p>
                    <Button className="w-fit bg-black text-white rounded-full hover:bg-zinc-800 cursor-pointer">
                      Выбрать
                    </Button>
                  </div>
                )}
              </div>
            </RadioGroup>
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4">
              Способ оплаты:
            </h2>
            <RadioGroup
              value={payment}
              onValueChange={setPayment}
              className="flex flex-col gap-3"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="text-base cursor-pointer">
                    Картой онлайн
                  </Label>
                </div>
                {payment === "card" && (
                  <div className="ml-7 flex items-center gap-2">
                    <Image
                      src="/card-humo.png"
                      alt="humo"
                      width={40}
                      height={24}
                      className="object-contain"
                    />
                    <Image
                      src="/card-humo.png"
                      alt="uzcard"
                      width={40}
                      height={24}
                      className="object-contain"
                    />
                    <Image
                      src="/card-humo.png"
                      alt="visa"
                      width={40}
                      height={24}
                      className="object-contain"
                    />
                    <Image
                      src="/card-humo.png"
                      alt="mastercard"
                      width={40}
                      height={24}
                      className="object-contain"
                    />
                    <Image
                      src="/card-humo.png"
                      alt="applepay"
                      width={40}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3">
                <RadioGroupItem value="cash" id="cash" />
                <Label htmlFor="cash" className="text-base cursor-pointer">
                  Оплата при получении
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <div className="backdrop-blur-md bg-white/30 border border-white/40 rounded-2xl p-6 w-72 flex flex-col gap-10">
          <h2 className="text-xl font-bold text-gray-900 text-center">
            Ваш заказ
          </h2>

          <div className="flex flex-col gap-2">
            {cart.items.map((item) => (
              <div
                className="flex justify-between text-sm text-gray-600 border-b border-black pb-2"
                key={item.id}
              >
                <span>
                  {item.product.name} ({item.quantity})
                </span>
                <span>{item.totalPrice.toLocaleString()} сум</span>
              </div>
            ))}
            <div className="h-px bg-gray-200" />
            <div className="flex justify-between font-bold text-gray-900">
              <span>Итого:</span>
              <span>{cart.subtotal.toLocaleString()} сум</span>
            </div>
          </div>

          <Button
            onClick={handleCheckout}
            className="w-full bg-black text-white rounded-full py-6 hover:bg-zinc-800 cursor-pointer"
          >
            Заказать
          </Button>
        </div>
      </div>
    </section>
  );
}
