import { api } from "@/service/api";
import { Contact } from "@/types";

export const sendContact = async (data: Contact) => {
  const res = await api.post("/contact", data);
  return res.data;
};
