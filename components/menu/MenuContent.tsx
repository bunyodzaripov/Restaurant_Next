"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Categories } from "@/types";

export default function MenuContent({
  categories,
}: {
  categories: Categories[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get("categoryId") || "";

  const handleFilter = (groupValue: string[]) => {
    const value = groupValue[0];
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("categoryId", value);
    } else {
      params.delete("categoryId");
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex justify-center mb-10">
      <ToggleGroup
        value={[currentCategory]}
        onValueChange={handleFilter}
        className="inline-flex items-center bg-white/30 backdrop-blur-sm rounded-full px-5 py-3"
      >
        {categories.map((item) => (
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
