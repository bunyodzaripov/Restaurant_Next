"use client";

import { useMutation } from "@tanstack/react-query";
import { createBooking } from "@/service/booking";
import { toast } from "sonner";
import { AxiosError } from "axios";

export const useCreateBooking = () => {
  return useMutation({
    mutationFn: createBooking,
    onSuccess: (data) => {
      toast.success(data?.message);
    },
    onError: (error: AxiosError<{ message: string }>) => {
      const message = error?.response?.data?.message;
      toast.error(message);
    },
  });
};
