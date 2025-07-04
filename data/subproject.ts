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
  language: "Next.js, Tailwind CSS, Prisma",
  githubLink: "https://github.com/SH701/unwind",
  projectLink: "https://unwind-pi.vercel.app/",
},
  {
    title: "Portfolio",
    description:
      "seungyn님의 프토폴리오 디자인을 참고해 포트폴리오를 제작했습니다.",
    language: "NextJs | TailwindCSS",
    githubLink: "https://github.com/SH701/portfolio",
    projectLink: "/",
  },
  {
    title: "Next Movie",
    description:
      "Next.js의 라우팅과 데이터 패칭을  영화 API로 학습한 프로젝트입니다.",
    language: "NextJs",
    githubLink: "https://github.com/SH701/nextmovie",
    projectLink: "https://nextjsmovie-gamma.vercel.app/",
  },
  {
    title:"CoinTracker",
    description:
      "React 기반으로 구축되었으며, recoil을 활용해 인터페이스 상태를 유연하게 관리합니다.react-query로 실시간 데이터를 빠르게 받아오고 캐싱합니다.",
    language:"React | TypeScript | Recoil | React-Query",
    githubLink:"https://github.com/SH701/CoinTracker",
    projectLink:"https://sh701.github.io/CoinTracker/",
  },
  {
    title: "Planflow",
    description:
      "localStorage를 활용해 사용자 데이터를 저장하며,JavaScript의 내장 메서드로 상태를 관리하는 로직을 구성했습니다.",
    language: "JavaScript",
    githubLink: "https://github.com/SH701/PlanFlow",
    projectLink: "https://sh701.github.io/PlanFlow/",
  },
];
