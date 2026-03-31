"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

const pathNames: Record<string, string> = {
  menu: "Меню",
  news: "Новости",
  booking: "Бронирование",
  about: "О нас",
  contact: "Контакты",
  cart: "Корзина",
};

export default function AppBreadcrumb() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);

  return (
    <Breadcrumb className="px-6 py-3">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            href="/"
            className="text-[#626464] text-[18px] font-medium"
          >
            Главная
          </BreadcrumbLink>
        </BreadcrumbItem>

        {segments.map((segment, index) => {
          const href = "/" + segments.slice(0, index + 1).join("/");
          const isLast = index === segments.length - 1;
          const label = pathNames[segment] || segment;

          return (
            <React.Fragment key={segment}>
              <BreadcrumbSeparator key={`sep-${segment}`} />
              <BreadcrumbItem key={segment}>
                {isLast ? (
                  <BreadcrumbPage className="font-medium text-[18px] text-black">
                    {label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    href={href}
                    className="text-[#626464] text-[18px]"
                  >
                    {label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
