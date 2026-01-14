"use client";

import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { Main } from "@/data/project";

import { Globe } from "lucide-react";
import ScrollAnimation from "../etc/scrollAnimation";
import GithubIcon from "../etc/githubicon";

interface ProjectListProps {
  openIndex: number | null;
  setOpenIndex: Dispatch<SetStateAction<number | null>>;
}

export default function ProjectList({ setOpenIndex }: ProjectListProps) {
  const [showDetail, setShowDetail] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {Main.map(
        (
          { title, simple, language, period, img, githubLink, projectLink },
          index
        ) => {
          const isHovered = showDetail === index;
          const moveProject = () => {
            if (projectLink.length > 0) {
              const link = projectLink[0];
              const url = typeof link === "string" ? link : link.url;
              window.open(url, "_blank", "noopener,noreferrer");
            }
          };
          const moveGitHub = () => {
            window.open(githubLink, "_blank", "noopener,noreferrer");
          };
          return (
            <ScrollAnimation delay={0.5} key={title} className="w-full">
              <div className="bg-gray-800 rounded-lg overflow-hidden transition-all duration-300  h-full flex flex-col">
                <div
                  className="relative w-full h-[200px] lg:h-[240px] cursor-pointer group"
                  onMouseEnter={() => setShowDetail(index)}
                  onMouseLeave={() => setShowDetail(null)}
                  onClick={() => {
                    setOpenIndex(index);
                  }}
                >
                  <Image
                    src={img}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="relative flex-1">
                  <div
                    className={`absolute inset-0 p-5 flex items-center justify-center transition-all duration-300 ${
                      isHovered
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-4 pointer-events-none"
                    }`}
                  >
                    <div className="text-center">
                      <span className="text-xl lg:text-2xl font-bold text-orange-500">
                        상세 보기
                      </span>
                      <p className="text-sm text-gray-400 mt-2">
                        클릭하여 자세히 보기
                      </p>
                    </div>
                  </div>

                  <div
                    className={`p-5 space-y-3 flex-1 flex flex-col transition-all duration-300 ${
                      isHovered
                        ? "opacity-0 translate-y-4 pointer-events-none"
                        : "opacity-100 translate-y-0"
                    }`}
                  >
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
                      <p className="text-xs text-orange-600/80 mt-1">
                        {period}
                      </p>

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
                      <GithubIcon
                        className="md:size-7 size-5 cursor-pointer hover:text-orange-500"
                        onClick={moveGitHub}
                      />
                      <Globe
                        className="md:size-7 size-5 cursor-pointer  hover:text-orange-500"
                        onClick={moveProject}
                      />
                    </div>
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
