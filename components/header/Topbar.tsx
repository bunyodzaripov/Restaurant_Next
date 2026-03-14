"use client";

import { Phone, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const languages = [
  { value: "ru", label: "Русский", flag: "🇷🇺" },
  { value: "uz", label: "O'zbek", flag: "🇺🇿" },
  { value: "en", label: "English", flag: "eng" },
];

export default function Topbar() {
  return (
    <div className="py-2 flex items-center justify-between">
      <div className="flex gap-6.75">
        <Link href="tel:+998907583833" className="flex items-center gap-2">
          <Phone size={16} />
          +998(90)758 38 33
        </Link>
        <Link
          href="mailto:info@bmgsoft.com"
          className="flex items-center gap-2 hover:text-black transition"
        >
          <Mail size={16} />
          info@bmgsoft.com
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 px-3 py-1.5 rounded-md cursor-pointer outline-none">
            Русский
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {languages.map((lang) => (
              <DropdownMenuItem
                key={lang.value}
                className="gap-2 cursor-pointer"
              >
                {lang.flag} {lang.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <Button
          variant="default"
          className={"bg-black text-white cursor-pointer"}
        >
          <User size={16} />
          Вход в аккаунт
        </Button>
      </div>
    </div>
  );
}
