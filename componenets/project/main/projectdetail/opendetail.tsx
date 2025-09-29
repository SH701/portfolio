import { Dispatch, SetStateAction } from "react";
import ProjectDetail from "./projectdetail";
import { Main } from "../../../../data/mainproject";
import { ProjectLink } from "../../../../data/mainproject";

type Props = {
  openIndex: number | null;
  setOpenIndex: Dispatch<SetStateAction<number | null>>;
  projectLink?: ProjectLink[];
};

export default function OpenDetail({ openIndex, setOpenIndex }: Props) {
  return (
    <>
      {openIndex !== null && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setOpenIndex(null)}
        >
          <div
            className="bg-sky-50 text-gray-900 p-6 max-w-[800px] w-full max-h-[80vh] flex flex-col relative mx-auto mt-20 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <ProjectDetail
              title={Main[openIndex].title}
              simple={Main[openIndex].simple}
              period={Main[openIndex].period}
              intension={Main[openIndex].intension}
              onClose={() => setOpenIndex(null)}
              githubLink={Main[openIndex].githubLink}
              projectLink={Main[openIndex]?.projectLink ?? []}
              language={Main[openIndex].language}
              capability={Main[openIndex].capability}
              situation={Main[openIndex].situation}
              improvement={Main[openIndex].improvement}
              awards={Main[openIndex].awards}
              collaboration={Main[openIndex].collaboration}
            />
          </div>
        </div>
      )}
    </>
  );
}
