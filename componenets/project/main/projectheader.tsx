"use client";

import Link from "next/link";
import { ProjectLink } from "../../../data/mainproject";
import { useState } from "react";

interface Props {
  award?: string;
  title: string;
  period: string;
  className?: string;
  projectLink: ProjectLink[];
  demo?: string;
}

export default function ProjectHeader({
  award,
  title,
  period,
  className,
  demo,
  projectLink,
}: Props) {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <div className={className}>
      <p className="text-xs lg:text-base colorful pb-3">Main Project</p>
      <p className="py-2 text-green-400">{award}</p>
      {demo && (
        <div className="mb-2">
          <button
            onClick={() => setShowDemo((prev) => !prev)}
            className="text-xs text-blue-500 cursor-pointer"
          >
            {showDemo ? "게스트 계정 숨기기" : "게스트 계정 보기"}
          </button>
          {showDemo && (
            <p className="mt-1 text-sm  text-[#cdcdcd] rounded">{demo}</p>
          )}
        </div>
      )}

      <Link
        href={
          typeof projectLink[0] === "string"
            ? projectLink[0]
            : projectLink[0].url
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="text-lg lg:text-4xl py-1 ani cursor-pointer">{title}</p>
      </Link>
      <p className="text-xs lg:text-lg pb-2">{period}</p>
    </div>
  );
}
