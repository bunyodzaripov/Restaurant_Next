import api from "@/service/api";

export const getAll = async (url: string) => {
  try {
    const res = await api.get(`/${url}`);
    return res.data;
  } catch (error) {
    console.log("API ERROR:", error);

    return {
      data: [],
    };
  }
};

export const getProducts = async (categoryId?: number | null) => {
  const res = await api.get("/products", {
    params: categoryId ? { categoryId } : {},
  });

  return res.data;
};
