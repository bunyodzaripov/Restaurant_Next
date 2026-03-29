"use client";

import { useSyncExternalStore } from "react";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { deleteCookie, getCookie } from "cookies-next";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const getUser = () => getCookie("user") as string | undefined;
const subscribe = () => () => {};

export default function UserButton() {
  const user = useSyncExternalStore(subscribe, getUser, () => undefined);

  const handleLogout = () => {
    deleteCookie("user");
    deleteCookie("accessToken");
    window.location.reload();
  };

  if (!user) {
    return (
      <Link href="/login">
        <Button
          variant="default"
          className="bg-black text-white cursor-pointer"
        >
          <User size={16} />
          Вход в аккаунт
        </Button>
      </Link>
    );
  }

  return (
    <HoverCard>
      <HoverCardTrigger>
        <button className="bg-black text-white cursor-pointer flex items-center gap-2 px-3 py-1 rounded-md">
          <User size={16} />
          {user}
        </button>
      </HoverCardTrigger>
      <HoverCardContent align="end" className="w-40 p-2">
        <Button
          variant="ghost"
          onClick={handleLogout}
          className="w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-red-50 rounded-md transition cursor-pointer"
        >
          Выйти
        </Button>
      </HoverCardContent>
    </HoverCard>
  );
}
