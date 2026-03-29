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
        background: `url('/main-bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-325 mx-auto px-3">
        <Topbar />
        <main>{children}</main>
      </div>

      <Footer />
    </div>
  );
}
