"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface AppPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function getPages(current: number, total: number): (number | "ellipsis")[] {
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
  if (current <= 3) return [1, 2, 3, 4, "ellipsis", total];
  if (current >= total - 2)
    return [1, "ellipsis", total - 3, total - 2, total - 1, total];
  return [1, "ellipsis", current - 1, current, current + 1, "ellipsis", total];
}

export default function AppPagination({
  currentPage,
  totalPages,
  onPageChange,
}: AppPaginationProps) {
  const pages = getPages(currentPage, totalPages);

  return (
    <Pagination>
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <button
              onClick={() => onPageChange(currentPage - 1)}
              className="cursor-pointer w-10 h-10 flex items-center justify-center"
            >
              <ChevronLeft size={16} />
            </button>
          </PaginationItem>
        )}

        {pages.map((page, i) =>
          page === "ellipsis" ? (
            <PaginationItem key={`ellipsis-${i}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={page}>
              <PaginationLink
                onClick={() => onPageChange(page)}
                isActive={currentPage === page}
                className={`cursor-pointer rounded-full! w-10 h-10 text-black border border-black ${
                  currentPage === page ? "bg-[#47474766]" : "bg-white/40"
                }`}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ),
        )}

        {currentPage < totalPages && (
          <PaginationItem>
            <button
              onClick={() => onPageChange(currentPage + 1)}
              className="cursor-pointer w-10 h-10 flex items-center justify-center"
            >
              <ChevronRight size={16} />
            </button>
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
