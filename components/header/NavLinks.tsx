"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Меню", href: "/menu" },
  { label: "Новости", href: "/news" },
  { label: "Бронирование", href: "/booking" },
  { label: "О нас", href: "/about" },
  { label: "Контакты", href: "/contact" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-10.75">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "text-[18px] font-medium",
            pathname === link.href ? "text-[#FF0000]" : "text-black",
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
