
import { Metadata } from "next";
import About from "./about/page";
import Skills from "./skils/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Social from "@/components/side/social";
import Email from "@/components/side/email";
import Introduce from "./introduce/page";

export const metadata: Metadata = {
  title: "프론트엔드 김수환 | 포트폴리오",
  description: "김수환 포트폴리오 페이지입니다.",
  icons:{
    icon:"/favicon.ico",
  }
};

export default function Home(){
  return(
     <>
      <div className="grid grid-cols-[auto,minmax(0,1000px),auto] mx-auto w-full sm:px-10">
        <div className="fixed sm:left-7 left-2 bottom-0">
          <Social/>
        </div>
      <div className="flex flex-col gap-2 lg:px-30 lg:pt-20 pt-10 ">
        <section className="pb-30"><Introduce/></section>
        <section id="about"><About/></section>
        <section id="skills" ><Skills/></section>
        <section id="projects" ><Projects/></section>
        <section id="contact"><Contact/></section>
      </div>
        <div className="fixed sm:right-7 right-2 bottom-0">
          <Email/>
        </div>
      </div>
    </>
  )
}