import type { Metadata } from "next";
import { gilroy } from "@/app/fonts";
import Topbar from "@/components/header/Topbar";
import Footer from "@/components/footer/Footer";
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
      <body className={`antialiased ${gilroy.className} relative`}>
        {children}
      </body>
    </html>
  );
}
