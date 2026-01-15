import Image from "next/image";

import { useEffect, useState } from "react";
import CloseBtn from "../../etc/closebtn";
import { ProjectLink } from "@/data/project";
import GithubIcon from "@/componenets/etc/githubicon";
import { Globe } from "lucide-react";

interface CapabilityItem {
  title: string;
  description: string;
}

interface Props {
  title: string;
  onClose: () => void;
  githubLink: string;
  projectLink: ProjectLink[];
  language: string[];
  capability: CapabilityItem[];
  detailimg: string[];
  description: string;
  contribution: string;
  awards?: string;
}

export default function ProjectDetail({
  title,
  description,
  onClose,
  githubLink,
  projectLink,
  language,
  capability,
  detailimg,
  contribution,
  awards,
}: Props) {
  const [isOpen, setIsOpen] = useState<number[]>([]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const toggleIndex = (index: number) => {
    setIsOpen((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
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
    <div className="h-auto rounded-2xl">
      <div className="-mx-6 -mt-6 mb-4 max-h-[500px] overflow-hidden">
        {detailimg.map((image) => (
          <Image
            key={image}
            src={image}
            alt="상세 내용"
            width={800}
            height={200}
            className="
      max-h-[80vh]
      w-full
      h-auto
      object-contain
      rounded-t-xl
    "
          />
        ))}
      </div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex gap-2 ">
          <GithubIcon
            className="md:size-7 size-5 cursor-pointer"
            onClick={moveGitHub}
          />
          <Globe
            className="md:size-7 size-5 cursor-pointer "
            onClick={moveProject}
          />
        </div>
        <CloseBtn onclose={onClose} />
      </div>
      <div className="flex flex-col gap-4">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <p className="text-gray-900 font-semibold">프로젝트 설명</p>
              {awards && (
                <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full font-medium">
                  {awards}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
              {description}
            </p>
          </div>

          <hr className="border-gray-200" />

          <div className="flex items-center gap-2">
            <p className="text-gray-900 font-semibold">기여도</p>
            <span className="text-sm text-gray-600">{contribution}</span>
          </div>

          <hr className="border-gray-200" />

          <div>
            <p className="text-gray-900 font-semibold mb-2">기술 스택</p>
            <div className="flex flex-wrap gap-2">
              {language.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm bg-gradient-to-r from-sky-50 to-blue-50 text-sky-700 rounded-full border border-sky-200 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <p className="text-black font-bold py-2">서비스 기능 </p>
          <div>
            {capability.map((item, index) => {
              const open = isOpen.includes(index);
              return (
                <div key={index}>
                  <button
                    onClick={() => toggleIndex(index)}
                    className="text-left w-full py-1.5 font-semibold cursor-pointer"
                  >
                    <span>
                      {open ? "▼" : "▶"} {item.title}
                    </span>
                  </button>
                  {open && (
                    <p className="px-5 text-gray-900 text-sm">
                      {item.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
