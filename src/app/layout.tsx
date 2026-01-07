import Header from "../componenets/header/header";

import "./globals.css";
import { Metadata } from "next";

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
      <body className=" px-10 py-5 overflow-x-hidden">
        <Header />
        {children}
      </body>
    </html>
  );
}
