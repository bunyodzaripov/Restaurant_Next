import type { Metadata } from "next";
import { gilroy } from "./fonts";
import "./globals.css";
import Header from "@/components/Header";

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
        <div className="containers ">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
