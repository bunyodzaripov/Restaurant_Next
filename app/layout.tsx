import type { Metadata } from "next";
import Image from "next/image";
import { gilroy } from "./fonts";
import Header from "@/components/header/Header";
import Topbar from "@/components/header/Topbar";
import "./globals.css";

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
      <body className={`antialiased ${gilroy.className}`}>
        <div className="fixed inset-0 -z-10 flex flex-col">
          <div className="relative flex-1">
            <Image
              src="/images/body-bg-1.png"
              alt="background 1"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative flex-1">
            <Image
              src="/images/body-bg-2.png"
              alt="background 2"
              fill
              className="object-cover"
            />
          </div>
          <div
            className="absolute inset-0 backdrop-blur-lg"
            style={{
              background:
                "linear-gradient(to right, rgba(255,255,255,0.4), rgba(255,255,255,0.4))",
            }}
          />
        </div>

        <div className="containers">
          <Topbar />
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
