import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <Image
        src="/auth-bg.png"
        alt="auth background"
        fill
        className="object-cover -z-10"
        priority
      />
      {children}
    </div>
  );
}
