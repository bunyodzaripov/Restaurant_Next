import api from "@/service/api";
import { AddToCart, CreateOrderPayload, OrderPayload } from "@/types";
import { getCookie } from "cookies-next";

export const addToCart = (data: AddToCart) => api.post("/cart/items", data);

export const updateCartItem = (itemId: number, quantity: number) =>
  api.patch(`/cart/items/${itemId}`, { quantity });

export const deleteCartItem = (itemId: number) =>
  api.delete(`/cart/items/${itemId}`);

export const checkout = (data: OrderPayload) =>
  api.post("/cart/checkout", data);

export const createOrder = (data: CreateOrderPayload) =>
  api.post("/orders", data, {
    headers: {
      Authorization: `Bearer ${getCookie("accessToken")}`,
      "Content-Type": "application/json",
    },
  });
