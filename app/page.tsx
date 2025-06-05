import { Metadata } from "next";

import Skills from "../components/skills/skills";
import Projects from "@/components/project/project";
import Social from "@/components/side/social";
import Email from "@/components/side/email";
import Introduce from "@/components/introduce/introduce";
import About from "@/components/about/about";
import Contact from "@/components/contact/contact";


export const metadata: Metadata = {
  title: "프론트엔드 김수환 | 포트폴리오",
  description: "김수환 포트폴리오 페이지입니다.",
};

export default function Home(){
  return(
     <>
      <div className="mx-auto max-w-screen-xl sm:px-10">
        <div className="fixed  sm:left-4 left-2 bottom-0">
          <Social/>
        </div>
      <div className="max-w-[1200px] flex flex-col gap-2 lg:px-30 lg:pt-20 pt-10 ">
        <section id="top" className="pb-30"><Introduce/></section>
        <section id="about"><About/></section>
        <section id="skills" ><Skills/></section>
        <section id="projects" className="w-full" ><Projects/></section>
        <section id="contact"><Contact/></section>
      </div>
        <div className="fixed sm:right-4 right-2 bottom-0">
          <Email/>
        </div>
      </div>
    </>
  )
}