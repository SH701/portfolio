

import Footer from "@/components/footer/Footer";
import "./globals.css";
import { Metadata } from "next";
import Header from "@/components/header/Header";

export const metadata: Metadata = {
  title: "SuHawn portfolio",
  description: "김수환 포트폴리오 페이지입니다.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth ">
      <body>
        <div className="px-10 py-5 overflow-x-hidden">
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
