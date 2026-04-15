import { Inbox } from "lucide-react";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  title?: string;
  description?: string;
  className?: string;
}

export default function EmptyState({
  title = "Данные не найдены",
  description = "На данный момент в этом разделе нет никакой информации.",
}: EmptyStateProps) {
  return (
    <div
      className={cn("flex flex-col items-center justify-center text-center")}
    >
      <div className="relative mb-6">
        <div className="absolute inset-0 scale-150 blur-2xl opacity-20 bg-primary/30 rounded-full" />
        <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-muted/50 ring-8 ring-muted/20">
          <Inbox
            className="h-12 w-12 text-muted-foreground/60"
            strokeWidth={1.5}
          />
        </div>
      </div>

      <div className="max-w-75 space-y-2">
        <h3 className="text-xl font-semibold tracking-tight text-foreground">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
