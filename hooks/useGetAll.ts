"use client";

import { useQuery } from "@tanstack/react-query";
import { getAll } from "@/service/getAll";

export const useGetAll = (url: string) => {
  return useQuery({
    queryKey: [url],
    queryFn: () => getAll(url),
    staleTime: 1000 * 60 * 5,
  });
};
