import { api } from "@/service/api";

export const getAll = async (
  url: string,
  params?: Record<string, string | number>,
) => {
  const res = await api.get(`/${url}`, { params });
  return res.data;
};
