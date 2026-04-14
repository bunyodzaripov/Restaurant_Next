import api from "@/service/api";

export const getAll = async (url: string) => {
  try {
    const res = await api.get(`/${url}`);
    return res.data ? res.data : [];
  } catch (error) {
    console.error(`Error fetching ${url}:`, error);
    return [];
  }
};

export const getProducts = async (categoryId?: number | null) => {
  const res = await api.get("/products", {
    params: categoryId ? { categoryId } : {},
  });

  return res.data;
};
