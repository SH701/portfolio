import Image from "next/image";
import { useEffect, useState } from "react";
import { ProjectLink } from "@/data/project";
import { Globe, ChevronLeft, ChevronRight } from "lucide-react";
import GithubIcon from "@/components/etc/Githubicon";
import CloseModal from "../CloseModal";

interface CapabilityItem {
  title: string;
  problem: string;
  strategy: string;
  result: string;
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
  video: string;
  testAccount?: { id: string; password: string };
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
  video,
  testAccount,
}: Props) {
  const [isOpen, setIsOpen] = useState<number[]>([]);
  const [copied, setCopied] = useState<"id" | "password" | null>(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const copyToClipboard = (text: string, type: "id" | "password") => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 1500);
  };
  const [currentIndex, setCurrentIndex] = useState(0);

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
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };
  const moveProject = () => {
    if (projectLink.length === 0) {
      setShowModal(true);
      return;
    }
    const link = projectLink[0];
    const url = typeof link === "string" ? link : link.url;
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const moveGitHub = () => {
    window.open(githubLink, "_blank", "noopener,noreferrer");
  };
  const goToNext = (index: number) => {
    setCurrentIndex(index + 1);
  };
  const goToPrev = (index: number) => {
    setCurrentIndex(index - 1);
  };

  return (
    <div className="h-auto rounded-2xl">
      <div className="relative -mx-6 -mt-6 mb-4 max-h-[500px] overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {/* 이미지 */}
          {detailimg.map((image, idx) => (
            <Image
              key={idx}
              src={image}
              alt="상세 내용"
              width={800}
              height={200}
              className="max-h-[80vh] w-full h-auto object-contain flex-shrink-0"
            />
          ))}
        </div>
        {currentIndex > 0 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrev(currentIndex);
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 rounded-full cursor-pointer transition-all"
            aria-label="이전 이미지"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
        )}
        {currentIndex < detailimg.length - 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext(currentIndex);
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 rounded-full cursor-pointer transition-all"
            aria-label="다음 이미지"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        )}
      </div>
      {/* 외부 링크 (깃허브, 사이트) */}
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
      </div>
      <div className="flex flex-col gap-4">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-4">
          {/* 한 줄 설명 */}
          <div>
            <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
              {description}
            </p>
          </div>

          <hr className="border-gray-200" />
          {/* 기여도 */}
          <div className="flex items-center gap-2">
            <p className="text-gray-900 font-semibold">기여도</p>
            <span className="text-sm text-gray-600">{contribution}</span>
          </div>
          {/* 시연 영상 */}
          {video && (
            <>
              <hr className="border-gray-200" />
              <div className="flex items-center gap-2">
                <p className="text-gray-900 font-semibold">시연 영상</p>
                <button
                  onClick={() => setShowVideoModal(true)}
                  className="text-sm text-blue-500 hover:text-blue-700 hover:underline transition-colors cursor-pointer"
                >
                  시연 영상 보기 →
                </button>
              </div>
              {showVideoModal && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
                  onClick={() => setShowVideoModal(false)}
                >
                  <div
                    className="relative w-full max-w-3xl aspect-video mx-4"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => setShowVideoModal(false)}
                      className="absolute -top-8 right-0 text-white text-sm hover:text-gray-300 cursor-pointer"
                    >
                      닫기 ✕
                    </button>
                    <iframe
                      src={`https://www.youtube.com/embed/${video.match(/(?:youtu\.be\/|v=)([^&?/]+)/)?.[1]}`}
                      className="w-full h-full rounded-xl"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}
            </>
          )}
          {/* 테스트 계정  */}
          {testAccount && (
            <>
              <hr className="border-gray-200" />
              <div>
                <p className="text-gray-900 font-semibold mb-2">테스트 계정</p>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => copyToClipboard(testAccount.id, "id")}
                    className="flex items-center justify-between px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 transition-colors cursor-pointer"
                  >
                    <span>
                      <span className="font-medium text-gray-500 mr-2">ID</span>
                      {testAccount.id}
                    </span>
                    <span className="text-xs text-gray-400">
                      {copied === "id" ? "복사됨!" : "클릭하여 복사"}
                    </span>
                  </button>
                  <button
                    onClick={() =>
                      copyToClipboard(testAccount.password, "password")
                    }
                    className="flex items-center justify-between px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700  transition-colors cursor-pointer"
                  >
                    <span>
                      <span className="font-medium text-gray-500 mr-2">PW</span>
                      {testAccount.password}
                    </span>
                    <span className="text-xs text-gray-400">
                      {copied === "password" ? "복사됨!" : "클릭하여 복사"}
                    </span>
                  </button>
                </div>
              </div>
            </>
          )}
          <hr className="border-gray-200" />
          {/* 기술 스텍 */}
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
        {/* 기능 설명 */}
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
                    <div className="px-5 pb-2 flex flex-col gap-2">
                      <div>
                        <span className="font-bold text-base text-red-500">
                          문제{" "}
                        </span>
                        <span className="text-gray-700 text-sm">
                          {item.problem}
                        </span>
                      </div>
                      <div>
                        <span className="font-bold text-base text-blue-500">
                          전략{" "}
                        </span>
                        <span className="text-gray-700 text-sm">
                          {item.strategy}
                        </span>
                      </div>
                      <div>
                        <span className="font-bold text-base text-green-600">
                          결과{" "}
                        </span>
                        <span className="text-gray-700 text-sm">
                          {item.result}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        {/* 서버 종료 모달 */}
          <CloseModal showModal={showModal} setShowModal={setShowModal} />
      </div>
    </div>
  );
}
