import { cookies } from "next/headers";
import api from "./api";

export const getCart = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const userId = cookieStore.get("userId")?.value;

  if (!userId || isNaN(Number(userId))) {
    return null;
  }

  const res = await api.get("/cart/current", {
    params: { userId: Number(userId) },
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return res.data;
};
