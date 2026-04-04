"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useGetAll } from "@/hooks/useGetAll";
import { Categories } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";

export default function MenuContent() {
  const { data, isLoading } = useGetAll("categories");
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeId = searchParams.get("categoryId")
    ? [searchParams.get("categoryId") as string]
    : [];

  const handleChange = (value: string[]) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("categoryId", value[0]);
    } else {
      params.delete("categoryId");
    }

    router.push(`/menu?${params.toString()}`);
  };

  if (isLoading) return null;

  return (
    <div className="flex justify-center mb-10">
      <ToggleGroup
        value={activeId}
        onValueChange={(val) => val && handleChange(val)}
        className="inline-flex items-center bg-white/30 backdrop-blur-sm rounded-full px-5 py-3"
      >
        {data?.data?.map((item: Categories) => (
          <ToggleGroupItem
            key={item.id}
            value={item.id.toString()}
            className="px-5! py-2! rounded-[27px]! text-[20px] font-semibold! cursor-pointer"
          >
            {item.name}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}
