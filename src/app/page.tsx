"use client";

import Introduce from "../components/introduce/Introduce";

import Skills from "../components/skills/Skills";
import ProjectContainer from "../components/project/ProjectContainer";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-screen-xl md:px-10">
        <div className="max-w-[1200px] flex flex-col  lg:pt-20 pt-10 ">
          <section id="introduce">
            <Introduce />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="projects" className="w-full">
            <ProjectContainer />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </div>
    </>
  );
}
