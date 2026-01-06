"use client";

import About from "@/componenets/about/about";
import Contact from "@/componenets/contact/contact";
import Introduce from "@/componenets/introduce/introduce";
import Projects from "@/componenets/project/project";
import Skills from "@/componenets/skills/skills";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

const sectionId = ["top", "about", "skills", "projects", "contact"];

export default function SectionPage() {
  const router = useRouter();
  const params = useParams();
  const section = params.section as string;
  useEffect(() => {
    if (!sectionId.includes(section)) {
      router.replace("/");
      return;
    }
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [section, router]);

  return (
    <>
      <div className="mx-auto max-w-screen-xl sm:px-10">
        <div className="max-w-[1200px] flex flex-col gap-2 lg:pt-20 pt-10 ">
          <section id="top" className="pt-10 sm:h-screen h-[700px]">
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
