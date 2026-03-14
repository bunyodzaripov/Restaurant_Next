import Header from "@/components/header/Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="backdrop-blur-lg bg-white/40 rounded-[50px] p-17 shadow-sm">
      <Header />

      <main>{children}</main>
    </div>
  );
}
