"use client";

import { useMutation } from "@tanstack/react-query";
import { login, register } from "@/service/auth";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { AxiosError } from "axios";

export const useLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setCookie("accessToken", data.data.accessToken);
      setCookie(
        "user",
        `${data.data.user.firstName} ${data.data.user.lastName}`,
      );
      setCookie("userId", data.data.user.id);
      toast.success(data?.message);
      router.push("/");
    },
    onError: (error: AxiosError<{ message: string }>) => {
      const message = error?.response?.data.message;
      toast.error(message);
    },
  });
};

export const useRegister = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      toast.success(data?.message);
      router.push("/login");
    },
    onError: (error: AxiosError<{ message: string }>) => {
      const message = error?.response?.data.message;
      toast.error(message);
    },
  });
};
