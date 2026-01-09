"use client";

import Introduce from "../componenets/introduce/introduce";

import Skills from "../componenets/skills/skills";
import Projects from "../componenets/project/project";
import Contact from "../componenets/contact/contact";

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-screen-xl md:px-10">
        <div className="max-w-[1200px] flex flex-col  lg:pt-20 pt-10 ">
          <section id="introduce">
            <Introduce text='안녕하세요, 김수환입니다.' />
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
