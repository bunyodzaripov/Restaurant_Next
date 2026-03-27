import { cn } from "@/lib/utils";

export default function GlassEffectBg({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "backdrop-blur-lg bg-white/40 rounded-[50px] p-15 shadow-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}
