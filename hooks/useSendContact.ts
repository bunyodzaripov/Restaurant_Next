import { sendContact } from "@/service/contact";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

export const useSendContact = () => {
  return useMutation({
    mutationFn: sendContact,
    onSuccess: (data) => {
      toast.success(data?.message);
    },
    onError: (error: AxiosError<{ message: string }>) => {
      const message = error?.response?.data.message;
      toast.error(message);
    },
  });
};
