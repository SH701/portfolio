"use client";

import Contact from "@/componenets/contact/contact";
import Introduce from "@/componenets/introduce/introduce";
import ProjectContainer from "@/componenets/project/projectcontainer";
import Skills from "@/componenets/skills/skills";

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
