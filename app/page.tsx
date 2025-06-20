import { Metadata } from "next";
import Introduce from "../componenets/introduce/introduce";
import About from "../componenets/about/about";
import Skills from "../componenets/skills/skills";
import Projects from "../componenets/project/project";
import Contact from "../componenets/contact/contact";

export const metadata: Metadata = {
  title: "프론트엔드 김수환 | 포트폴리오",
  description: "김수환 포트폴리오 페이지입니다.",
};

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-screen-xl sm:px-10">
        <div className="max-w-[1200px] flex flex-col gap-2 lg:pt-20 pt-10 ">
          <section id="top" className="py-10 h-screen">
            <Introduce />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="projects" className="w-full">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </div>
    </>
  );
}
