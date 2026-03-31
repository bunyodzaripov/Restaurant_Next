import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavLinks from "@/components/header/NavLinks";
import AppBreadcrumb from "@/components/common/Breadcrumb";
import { Badge } from "@/components/ui/badge";
import { getCart } from "@/service/cartGet";

export default async function Header() {
  const cart = await getCart();

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
          <Link href="/cart">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full cursor-pointer border border-black hover:bg-white/40 relative"
            >
              <ShoppingCart size={33} className="text-black" />
              <Badge
                variant="default"
                className="absolute -top-3 -right-3 bg-red-500"
              >
                {cart ? cart.data.items.length : 0}
              </Badge>
            </Button>
          </Link>
        </div>
      </div>
      <div className="mt-20">
        <AppBreadcrumb />
      </div>
    </header>
  );
}
