import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ShadcnButtonProps {
  label: string;
  href?: string;
  className?: string;
}

export default function ShadcnButton({
  label,
  className,
  href = "/",
}: ShadcnButtonProps) {
  return (
    <Link href={href}>
      <Button
        variant="default"
        className={cn(
          "bg-black gap-3 text-white text-[18px] font-semibold px-8 py-6 cursor-pointer",
          "rounded-br-none",
          className,
        )}
      >
        {label} <ArrowRight />
      </Button>
    </Link>
  );
}
