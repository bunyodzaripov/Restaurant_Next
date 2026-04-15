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
import { toast } from "sonner";

interface Props {
  cart: Cart;
}

export default function CheckoutSection({ cart }: Props) {
  const [delivery, setDelivery] = useState<string>("pickup");
  const [payment, setPayment] = useState<string>("card");

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
      toast.success("Order created");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }

  return (
    <section className="py-10">
      <Title title="Оформление заказа" />

      <div className="flex items-start justify-between">
        <div className=" flex flex-col gap-20 ">
          <div>
            <h2 className="text-[32px] font-bold text-black mb-4">
              Способ получения:
            </h2>

            <RadioGroup
              value={delivery}
              onValueChange={setDelivery}
              className="flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                <RadioGroupItem value="pickup" id="l1" />
                <Label
                  htmlFor="l1"
                  className="text-[24px] cursor-pointer text-black"
                >
                  Заказ с собой
                </Label>
              </div>

              <div className="flex items-center gap-3">
                <RadioGroupItem value="door" id="l2" />
                <Label
                  htmlFor="l2"
                  className="text-[24px] cursor-pointer text-black"
                >
                  Доставка до двери
                </Label>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <Label
                    htmlFor="l3"
                    className="flex items-center gap-2 text-[24px] cursor-pointer text-black"
                  >
                    <Home size={18} />
                    Доставка по адресу:
                  </Label>
                </div>
                <div className="ml-7 flex flex-col gap-2">
                  <p className="text-sm text-gray-500">
                    Укажите адрес доставки на карте:
                  </p>
                  <Button
                    type="button"
                    className="bg-black text-white rounded-2 py-4 hover:bg-zinc-800 cursor-pointer"
                  >
                    Выбрать
                  </Button>
                </div>
              </div>
            </RadioGroup>
          </div>

          <div>
            <h2 className="text-[32px] font-bold text-black mb-4">
              Способ оплаты:
            </h2>
            <RadioGroup
              value={payment}
              onValueChange={setPayment}
              className="flex flex-col gap-3"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="card" id="l4" />
                  <Label
                    htmlFor="l4"
                    className="text-[24px] text-black cursor-pointer"
                  >
                    Картой онлайн
                  </Label>
                </div>
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
              </div>

              <div className="flex items-center gap-3">
                <RadioGroupItem value="cash" id="l5" />
                <Label
                  htmlFor="l5"
                  className="text-[24px] text-black cursor-pointer"
                >
                  Оплата при получении
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <div className="w-115.75 backdrop-blur-md bg-white/30 rounded-[31px] p-12.5 flex flex-col gap-10">
          <h2 className="text-[32px] font-bold text-black text-center">
            Ваш заказ
          </h2>

          <div className="flex flex-col gap-10">
            {cart?.items.map((item) => (
              <div
                className="flex justify-between text-sm text-[#585858] border-b border-black pb-2.5"
                key={item.id}
              >
                <span>
                  {item.product.name} ({item.quantity})
                </span>
                <span>{item.totalPrice.toLocaleString()} сум</span>
              </div>
            ))}
            <div className="flex text-[24px] justify-between font-bold text-black">
              <span>Итого:</span>
              <span>{cart.subtotal.toLocaleString()} сум</span>
            </div>
          </div>

          <Button
            type="button"
            onClick={handleCheckout}
            className="text-[20px] font-semibold w-full bg-black text-white rounded-[13px] py-6 hover:bg-zinc-800 cursor-pointer"
          >
            Заказать
          </Button>
        </div>
      </div>
    </section>
  );
}
