import Topbar from "@/components/header/Topbar";
import Footer from "@/components/footer/Footer";
import Image from "next/image";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen">
      <Image
        src="/main-bg.png"
        alt="background"
        fill
        className="object-cover -z-10"
        priority
      />
      <div className="max-w-325 mx-auto px-3">
        <Topbar />
        <main>{children}</main>
      </div>

      <Footer />
    </div>
  );
}
