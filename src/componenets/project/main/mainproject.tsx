"use client";

import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import ProjectHeader from "./projectheader";
import { Main } from "@/data/mainproject";
import ScrollAnimation from "../../etc/scrollAnimation";
import GithubIcon from "../../etc/githubicon";

type Props = {
  openIndex: number | null;
  setOpenIndex: Dispatch<SetStateAction<number | null>>;
};

export default function MainProject({ setOpenIndex }: Props) {
  return (
    <div className="flex  flex-col gap-8 ">
      {Main.map(
        (
          {
            title,
            award,
            description,
            language,
            period,
            img,
            githubLink,
            projectLink,
          },
          index
        ) => {
          const isEven = index % 2 === 0;
          return (
            <ScrollAnimation
              delay={0.5}
              key={title}
              className={`grid grid-cols-1 md:grid-cols-2 gap-5 md:mb-20`}
            >
              <div
                className={`flex justify-center items-center ${
                  isEven ? "md:order-last" : ""
                }`}
              >
                <div className="relative w-full max-w-[700px] h-[450px] bg-black">
                  <Image
                    src={img}
                    alt="대표사진"
                    fill
                    className="rounded-md shadow-md object-contain p-0 m-0"
                    onClick={() => {
                      setOpenIndex(index);
                    }}
                  />
                </div>
              </div>
              <div
                className={`flex flex-col justify-between bg-[#112240] p-6 rounded-lg ${
                  isEven ? "" : ""
                }`}
              >
                <ProjectHeader
                  title={title}
                  award={award}
                  period={period}
                  projectLink={projectLink}
                  className={`flex flex-col ${
                    isEven
                      ? "md:items-start md:text-left text-left"
                      : "md:items-end md:text-right text-left"
                  }`}
                />
                <div className="mt-4">
                  <p className="text-xs md:text-sm lg:text-lg leading-relaxed">
                    {description}
                  </p>
                </div>
                <div className="flex flex-row flex-wrap  mt-4">
                  {language.map((item) => (
                    <span
                      key={item}
                      className="md:text-xs text-[8px] lg:text-base bg-white/10 px-2 py-1 rounded mr-2 mb-2"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div
                  className={`flex gap-4 mt-4 ${
                    isEven ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <Link href={githubLink}>
                    <GithubIcon className="size-5 lg:size-8" />
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          );
        }
      )}
    </div>
  );
}
