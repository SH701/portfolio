import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRecoil,
  SiReactrouter,
  SiTailwindcss,
  SiStyledcomponents,
  SiReactquery,
  SiPrisma,
  SiSupabase,
  SiPostman,
  SiGithub,
  SiVercel,
  SiSlack,
} from "react-icons/si";

export type TabKey = "Language" | "Frontend" | "Backend" | "ETC";
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
    key: "Language",
    label: "Language",
    items: [
      {
        Icon: SiHtml5,
        color: "#E34F26",
        name: "HTML",
        description: "웹 페이지의 구조를 설계를 할 수 있습니다.",
      },
      {
        Icon: SiCss3,
        color: "#1572B6",
        name: "CSS",
        description: "반응형 디자인과 애니메이션을 구현 할 수 있습니다.",
      },
      {
        Icon: SiJavascript,
        color: "#F7DF1E",
        name: "JavaScript",
        description:
          "DOM 조작, 이벤트 핸들링, 드래그 앤 드롭 등 다양한 기능을 구현 할 수 있습니다.",
      },
      {
        Icon: SiTypescript,
        color: "#3178C6",
        name: "TypeScript",
        description:
          "정적인 타입을 통해 버그를 줄이고 유지보수 가능한 코드를 사용 할 수 있습니다.",
      },
    ],
  },
  {
    key: "Frontend",
    label: "Frontend",
    items: [
      {
        Icon: SiReact,
        color: "#61DAFB",
        name: "React",
        description:
          "컴포넌트 기반 아키텍처로 사용자 인터페이스를 효율적으로 구성했습니다.",
      },
      {
        Icon: SiNextdotjs,
        color: "#000000",
        name: "Next.js",
        description:
          "App Router 기반의 파일 구조와 서버 컴포넌트를 활용해 SSR 및 SEO 최적화를 구현했습니다",
      },
      { 
        Icon:SiReact,
        color:"#000000",
        name:"React-Native",
        description:
          "상태 및 이벤트 처리를 고려하여 사용자 경험 중심의 컴포넌트 구조로 구현했습니다.",
      },
      {
        Icon: SiRecoil,
        color: "#3578E5",
        name: "Recoil",
        description:
          " React 앱의 전역 상태를 관리하여 컴포넌트 간에 데이터를 효율적으로 공유했습니다.",
      },
      {
        Icon: SiReactrouter,
        color: "#CA4245",
        name: "react-router-dom",
        description: "SPA 구조에서 라우팅 처리에 사용했습니다.",
      },
      {
        Icon: SiReactquery,
        color: "#FF4154",
        name: "React Query",
        description:
          "서버 상태를 효율적으로 관리하고, 데이터 캐싱 및 자동 리페치 기능을 통해 사용자 경험을 개선했습니다.",
      },
      {
        Icon: SiTailwindcss,
        color: "#06B6D4",
        name: "Tailwind CSS",
        description:
          "틸리티 클래스 기반의 빠른 스타일링으로 반응형 UI를 제작했습니다.",
      },
      {
        Icon: SiStyledcomponents,
        color: "#DB7093",
        name: "styled-components",
        description: "컴포넌트 단위의 스타일을 관리했습니다.",
      },
    ],
  },
  {
    key: "Backend",
    label: "Backend",
    items: [
      {
        Icon: SiPrisma,
        color: "#2D3748",
        name: "Prisma",
        description:
          "데이터 모델링 및 ORM으로 Next.js 프로젝트에서 데이터를 구조화했습니다.",
      },
      {
        Icon: SiSupabase,
        color: "#3FCF8E",
        name: "Supabase",
        description:
          "채팅 및 실시간 기능을 구현하기 위해 인증과 DB를 연동했습니다.",
      },
      {
        Icon: SiPostman,
        color: "#FF6C37",
        name: "REST API",
        description:
          "상품 CRUD 및 로그인/리뷰 기능 등을 API 설계에 맞춰 구현했습니다.",
      },
    ],
  },
  {
    key: "ETC",
    label: "ETC",
    items: [
      {
        Icon: SiGithub,
        color: "#181717",
        name: "GitHub",
        description: "외부 저장과 협업을 위해 사용하였습니다.",
      },
      {
        Icon: SiVercel,
        color: "#000000",
        name: "Vercel",
        description: "NextJS 프로젝트를 배포해 본 경험이 있습니다.",
      },
      {
        Icon: SiSlack,
        color: "#4A154B",
        name: "Slack",
        description: "기술 커뮤니티 소통을 위해 활용 중입니다.",
      },
    ],
  },
];
