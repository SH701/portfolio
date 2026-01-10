"use client";

import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { Main } from "@/data/mainproject";
import ScrollAnimation from "../../etc/scrollAnimation";
import GithubIcon from "../../etc/githubicon";
import { Globe } from "lucide-react";

type Props = {
  openIndex: number | null;
  setOpenIndex: Dispatch<SetStateAction<number | null>>;
};

export default function MainProject({ setOpenIndex }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {Main.map(
        (
          { title, simple, language, period, img, githubLink, projectLink },
          index
        ) => {
          return (
            <ScrollAnimation delay={0.5} key={title} className="w-full">
              <div className="bg-gray-800 rounded-lg overflow-hidden transition-all duration-300  h-full flex flex-col">
                <div className="relative w-full h-[200px] lg:h-[240px]  cursor-pointer group">
                  <Image
                    src={img}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    onClick={() => {
                      setOpenIndex(index);
                    }}
                  />
                </div>

                <div className="p-5 space-y-3 flex-1 flex flex-col ">
                  <div className="flex-1">
                    <Link
                      href={
                        typeof projectLink[0] === "string"
                          ? projectLink[0]
                          : projectLink[0].url
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h3 className="text-lg lg:text-xl font-bold text-orange-500 transition-colors cursor-pointer line-clamp-1">
                        {title}
                      </h3>
                    </Link>
                    <p className="text-xs text-orange-600/80 mt-1">{period}</p>

                    <p className="text-sm leading-relaxed text-gray-300 mt-3 line-clamp-2">
                      {simple}
                    </p>
                  </div>

                  <div className="flex flex-row flex-wrap gap-1.5">
                    {language.slice(0, 4).map((item) => (
                      <span
                        key={item}
                        className="text-[10px] lg:text-xs bg-white/10 px-2 py-0.5 rounded hover:bg-white/20 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                    {language.length > 4 && (
                      <span className="text-[10px] lg:text-xs bg-white/10 px-2 py-0.5 rounded text-gray-400">
                        +{language.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex justify-end pt-2 gap-3">
                    <Link href={githubLink} target="_blank">
                      <GithubIcon className="md:size-7 size-5 text-white hover:text-orange-500 transition-colors" />
                    </Link>
                    <Link
                      href={
                        typeof projectLink[0] === "string"
                          ? projectLink[0]
                          : projectLink[0].url
                      }
                      target="_blank"
                    >
                      <Globe className="md:size-7 size-5 hover:text-orange-500 transition-colors" />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          );
        }
      )}
    </div>
  );
}
