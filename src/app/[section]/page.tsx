"use client";



import Contact from "@/components/contact/Contact";
import Introduce from "@/components/introduce/Introduce";
import ProjectContainer from "@/components/project/ProjectContainer";
import Skills from "@/components/skills/Skills";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

const sectionId = ["introduce", "skills", "projects", "contact"];

export default function SectionPage() {
  const router = useRouter();
  const params = useParams();
  const section = params.section as string;
  useEffect(() => {
    if (!sectionId.includes(section)) {
      return;
    }
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [section, router]);

  return (
    <>
      <div className="mx-auto max-w-screen-xl md:px-10">
        <div className="max-w-[1200px] flex flex-col gap-2 lg:pt-20 pt-10 ">
          <section id="introduce" className="pt-10 md:h-screen h-[700px]">
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
