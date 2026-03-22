import Topbar from "@/components/header/Topbar";
import Footer from "@/components/footer/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        backgroundImage: `url('/images/main-bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-325 mx-auto px-3">
        <Topbar />
        <main className="flex-1">{children}</main>
      </div>

      <Footer />
    </div>
  );
}
