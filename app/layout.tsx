import Header from "../componenets/etc/header";
import ClientLoader from "../componenets/loader/clientloader";
import { IBM_Plex_Sans_KR } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const nanum = IBM_Plex_Sans_KR({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400"],
});
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
    <html lang="ko" className="scroll-smooth">
      <body
        className={`${nanum.className} antialiased w-screen px-10 py-5 overflow-x-hidden`}
      >
        <ClientLoader>
          <Header />
          {children}
        </ClientLoader>
      </body>
    </html>
  );
}
