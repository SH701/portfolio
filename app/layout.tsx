import Header from "../componenets/header";
import ClientLoader from "../componenets/loader/clientloader";
import { IBM_Plex_Sans_KR } from "next/font/google";
import "./globals.css";

const nanum = IBM_Plex_Sans_KR({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400"],
});

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
