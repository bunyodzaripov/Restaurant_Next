import type { Metadata } from "next";
import Image from "next/image";
import { gilroy } from "./fonts";
import Topbar from "@/components/header/Topbar";
import "./globals.css";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Restaurant",
  description: "Restaurant App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${gilroy.className} relative`}>
        <div
          className="absolute inset-0 -z-10 backdrop-blur-lg"
          style={{ background: "rgba(255,255,255,0.2)" }}
        />

        <div className="max-w-325 mx-auto px-3">
          <Topbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
