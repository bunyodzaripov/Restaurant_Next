import { api } from "@/service/api";
import { Login, Register } from "@/types/index";

export const login = async (data: Login) => {
  const res = await api.post("/api/auth/signin", data);
  return res.data;
};

export const register = async (data: Register) => {
  const res = await api.post("/api/auth/signup", data);
  return res.data;
};
