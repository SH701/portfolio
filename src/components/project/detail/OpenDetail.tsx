"use client";

import { Dispatch, SetStateAction, useEffect } from "react";
import ProjectDetail from "./ProjectDetail";
import { Main } from "@/data/project";
import { ProjectLink } from "@/data/project";

type Props = {
  openIndex: number | null;
  setOpenIndex: Dispatch<SetStateAction<number | null>>;
  projectLink?: ProjectLink[];
};

export default function OpenDetail({ openIndex, setOpenIndex }: Props) {
  useEffect(() => {
    if (openIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [openIndex]);

  return (
    <>
      {openIndex !== null && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setOpenIndex(null)}
        >
          <div
            className="bg-white text-gray-900 p-6 max-w-[800px] w-full max-h-[80vh] flex flex-col relative mx-auto mt-20 overflow-y-auto rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <ProjectDetail
              title={Main[openIndex].title}
              description={Main[openIndex].description}
              onClose={() => setOpenIndex(null)}
              githubLink={Main[openIndex].githubLink}
              projectLink={Main[openIndex]?.projectLink ?? []}
              language={Main[openIndex].language}
              capability={Main[openIndex].capability}
              awards={Main[openIndex].awards}
              detailimg={Main[openIndex].detailimg}
              contribution={Main[openIndex].contribution}
            />
          </div>
        </div>
      )}
    </>
  );
}
