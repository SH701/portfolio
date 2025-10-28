interface Props {
  title: string;
  description: string;
  language: string;
  githubLink: string;
  projectLink: string;
}

export const subProjects: Props[] = [
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
    description: "React를 활용한 넷플릭스 클론코딩",
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
    title: "CoinTracker",
    description:
      "recoil을 활용해 인터페이스 상태를 관리,react-query로 실시간 데이터를 받아오고 캐싱합니다.",
    language: "React | TypeScript | Recoil | React-Query",
    githubLink: "https://github.com/SH701/CoinTracker",
    projectLink: "https://sh701.github.io/CoinTracker/",
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
