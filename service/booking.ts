import { api } from "@/service/api";
import { Booking } from "@/types";

export const createBooking = async (data: Booking) => {
  const res = await api.post("/reservations/create", data);

  return res.data;
};
