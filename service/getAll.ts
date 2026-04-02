import { api } from "@/service/api";

export const getAll = async (url: string) => {
  const res = await api.get(`/${url}`);
  return res.data;
};

export const getProducts = async (categoryId?: number | null) => {
  const res = await api.get("/products", {
    params: categoryId ? { categoryId } : {},
  });

  return res.data;
};
