"use client";

import { useMutation } from "@tanstack/react-query";
import { addToCart, deleteCartItem, updateCartItem } from "@/service/cart";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

export const useAddToCart = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: addToCart,

    onSuccess: (res) => {
      router.refresh();
      toast.success(res?.data.message);
    },

    onError: (error: AxiosError<{ message: string }>) => {
      const message = error?.response?.data?.message;
      toast.error(message);
    },
  });
};

export const useUpdateCartItem = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: ({ itemId, quantity }: { itemId: number; quantity: number }) =>
      updateCartItem(itemId, quantity),

    onSuccess: () => {
      router.refresh();
    },

    onError: (error: AxiosError<{ message: string }>) => {
      const message = error?.response?.data?.message;
      toast.error(message);
    },
  });
};

export const useDeleteCartItem = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: (itemId: number) => deleteCartItem(itemId),

    onSuccess: (res) => {
      router.refresh();
      toast.success(res?.data.message);
    },

    onError: (error: AxiosError<{ message: string }>) => {
      const message = error?.response?.data?.message;
      toast.error(message);
    },
  });
};
