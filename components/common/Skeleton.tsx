"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function GallerySkeleton() {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="space-y-3">
          {/* Image */}
          <Skeleton className="h-40 w-full rounded-xl" />

          {/* Optional caption */}
          <Skeleton className="h-4 w-2/3 rounded-md" />
        </div>
      ))}
    </div>
  );
}
