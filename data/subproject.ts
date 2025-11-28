interface Props {
  title: string;
  description: string;
  language: string;
  githubLink: string;
  projectLink: string;
}

export const subProjects: Props[] = [
  {
    title: "Summary AI",
    description:
      "파일을 업로드하면 내용을 추출하고 OpenAI로 요약을 생성하는 문서 요약 서비스입니다.",
    language: "React | TypeScript | OpenAI | Jest",
    githubLink: "https://github.com/SH701/summary/",
    projectLink: "https://summary-plum.vercel.app/",
  },
  {
    title: "Unwind",
    description:
      "Unwind는 로그인, 게시글 작성, 댓글 기능이 포함된 커뮤니티 웹 애플리케이션입니다.",
    language: "Next.js | Tailwind CSS | Prisma",
    githubLink: "https://github.com/SH701/unwind",
    projectLink: "https://unwind-sh701s-projects.vercel.app/",
  },
  {
    title: "Netflix Clone",
    description: "TMDB API와 React를 활용한 넷플릭스 클론코딩입니다.",
    language: "React, | styled-Components | Recoil",
    githubLink: "https://github.com/SH701/Netflix_Clone",
    projectLink: "https://sh701.github.io/Netflix_Clone/",
  },
  {
    title: "Portfolio",
    description: "Nextjs와 Typescript를 활용한 개인 포트폴리오입니다.",
    language: "NextJs | TailwindCSS",
    githubLink: "https://github.com/SH701/portfolio",
    projectLink: "/",
  },

  {
    title: "Planflow",
    description:
      "JavaScript의 내장 메서드로 상태를 관리하는 일정 관리 웹을 구성했습니다.",
    language: "JavaScript",
    githubLink: "https://github.com/SH701/PlanFlow",
    projectLink: "https://sh701.github.io/PlanFlow/",
  },
];
