import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiStyledcomponents,
  SiReactquery,
  SiGithub,
  SiVercel,
  SiSlack,
  SiFigma,
  SiStorybook,
} from "react-icons/si";

export type TabKey = "Core" | "Styling" | "State" | "DevTools" | "Tools";
export type TabItem = {
  name: string;
  description: string;
  Icon?: React.ElementType;
  color: string;
};
export const tabs: {
  key: TabKey;
  label: string;
  items: TabItem[];
}[] = [
  {
    key: "Core",
    label: "Core",
    items: [
      {
        Icon: SiHtml5,
        color: "#E34F26",
        name: "HTML",
        description:
          "시맨틱 태그를 활용해 웹 접근성과 SEO를 고려한 페이지 구조를 설계했습니다.",
      },
      {
        Icon: SiCss3,
        color: "#1572B6",
        name: "CSS",
        description:
          "Flexbox, Grid를 활용한 반응형 레이아웃과 애니메이션을 구현했습니다.",
      },
      {
        Icon: SiJavascript,
        color: "#F7DF1E",
        name: "JavaScript",
        description:
          "MediaRecorder 등 브라우저 내장 Web API를 라이브러리 없이 직접 활용해 기능을 구현했습니다.",
      },
      {
        Icon: SiTypescript,
        color: "#3178C6",
        name: "TypeScript",
        description:
          "전 프로젝트에 TypeScript를 도입해 타입 설계로 런타임 버그를 줄이고 팀원 간 인터페이스를 명확히 했습니다.",
      },
      {
        Icon: SiReact,
        color: "#61DAFB",
        name: "React",
        description:
          "커스텀 훅으로 UI와 비즈니스 로직을 분리하고, 컴포넌트 재사용성을 고려한 구조로 개발했습니다.",
      },
      {
        Icon: SiNextdotjs,
        color: "#000000",
        name: "Next.js",
        description:
          "App Router와 Server Component를 활용해 SSG 기반 렌더링 최적화와 SEO를 구현했습니다.",
      },
    ],
  },
  {
    key: "Styling",
    label: "Styling",
    items: [
      {
        Icon: SiTailwindcss,
        color: "#06B6D4",
        name: "Tailwind CSS",
        description:
          "전 프로젝트에 걸쳐 유틸리티 클래스로 빠르게 반응형 UI를 구현했습니다.",
      },
      {
        Icon: SiStyledcomponents,
        color: "#DB7093",
        name: "styled-components",
        description:
          "컴포넌트 단위로 스타일을 캡슐화해 CSS 충돌 없이 독립적인 스타일을 관리했습니다.",
      },
    ],
  },
  {
    key: "State",
    label: "State",
    items: [
      {
        Icon: SiReact,
        color: "#FFCC00",
        name: "Zustand",
        description:
          "프로젝트에 도입해 React Query와 역할을 나눠 클라이언트 전역 상태만 관리했습니다.",
      },
      {
        Icon: SiReactquery,
        color: "#FF4154",
        name: "React Query",
        description:
          "서버 상태 캐싱과 자동 리페치로 API 호출을 최소화하고, 데이터 로딩 UX를 개선했습니다.",
      },
    ],
  },
  {
    key: "DevTools",
    label: "DevTools",
    items: [
      {
        Icon: SiStorybook,
        color: "#FF4785",
        name: "Storybook",
        description:
          "공통 컴포넌트를 문서화하여 디자인 시스템을 구축하고, 디자이너와 QA 협업에 활용했습니다.",
      },
    ],
  },
  {
    key: "Tools",
    label: "Tools",
    items: [
      {
        Icon: SiGithub,
        color: "#181717",
        name: "GitHub",
        description:
          "브랜치 전략과 PR 리뷰 기반으로 팀 프로젝트를 협업했습니다.",
      },
      {
        Icon: SiVercel,
        color: "#000000",
        name: "Vercel",
        description: "Next.js 프로젝트를 Vercel에 배포하고 운영했습니다.",
      },
      {
        Icon: SiSlack,
        color: "#4A154B",
        name: "Slack",
        description:
          "팀 프로젝트에서 일정 공유와 이슈 소통을 위해 활용했습니다.",
      },
      {
        Icon: SiFigma,
        color: "#F24E1E",
        name: "Figma",
        description:
          "디자이너 시안을 검토하고 픽셀 단위로 화면에 맞게 구현했습니다.",
      },
    ],
  },
];
