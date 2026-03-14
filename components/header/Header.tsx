import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-between ">
        <Link href="/" className="text-[48px] text-black font-black">
          LOGO
        </Link>

        <NavLinks />

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full cursor-pointer border border-black text-[33px] hover:bg-white/40"
          >
            <Heart size={33} className="text-black" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full cursor-pointer border border-black hover:bg-white/40 relative"
          >
            <ShoppingCart size={33} className="text-black" />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] w-3 h-3 rounded-full flex items-center justify-center">
              1
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}
