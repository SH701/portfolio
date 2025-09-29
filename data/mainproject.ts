export type ProjectLink = string | { label: string; url: string };

interface MainProjectType {
  title: string;
  award?: string;
  demo?: string;
  description: string;
  simple: string;
  intension: string;
  language: string[];
  period: string;
  img: string;
  projectLink: ProjectLink[];
  githubLink: string;
  capability: {
    title: string;
    description: string;
  }[];
  situation: string;
  improvement: string[];
  awards?: string[];
  collaboration?: string;
}

export const Main: MainProjectType[] = [
  {
    title: "🤓 Noonchi ",
    award: "508 AI 포텐데이 우수 프로젝트 선정",
    demo: "계정: demo@noonchi.ai.kr / demo1234  ",
    period: "2025.08.01 ~ 2025.08.26",
    awards: ["✨ 네이버 클라우드 주최  508 AI 포텐데이 우수 프로젝트 선정"],
    collaboration:
      "프론트엔드 전반 설계 및 UI 구현, AI 페르소나·존댓말 기능 및 음성 입력·TTS 연동 담당",
    description:
      "페르소나 선택, 존댓말·반말 슬라이더, 번역 박스, 음성 입력·TTS 기능을 결합한 대화형 학습 서비스의 프론트엔드를 구현했습니다. 사용자는 상황(상사와 대화, 부모님 상견례, 카페 주문 등)에 맞는 AI 페르소나를 선택해 실제 같은 대화를 경험할 수 있으며, 번역 박스로 다양한 언어 전환과 표현 교정을 확인할 수 있습니다.",
    simple: "NOONCHI — 한국어 존댓말, 상황과 관계까지 코칭해주는 AI",
    intension: "AI와 자연스러운 대화를 주고받을 수 있는 웹 클라이언트",
    language: [
      "TypeScript",
      "Next.js",
      "React",
      "TailwindCSS",
      "Context API",
      "Zustand",
    ],
    img: "/noonchi.png",
    projectLink: [
      { label: "웹", url: "https://noonchi-web.vercel.app" },
      { label: "모바일", url: "https://noonchi.ai.kr" },
    ],
    githubLink: "https://github.com/SH701/pangpang",
    capability: [
      {
        title: "눈치코치 (Custom Chatbot)",
        description:
          "상견례·직장 상사와 대화하기·카페 주문하기 등 현실 시나리오 기반 대화 시뮬레이션을 구현했습니다.",
      },
      {
        title: "실시간 피드백 & 리라이팅",
        description:
          "표현의 정중도·자연스러움 분석 + 더 자연스러운 대안 제시합니다.",
      },
      {
        title: "히스토리 & 리포트",
        description: "대화 기록을 분석해 반복 학습 및 개선 방향 제공합니다.",
      },
    ],
    situation:
      "API 응답 지연 시 로딩 처리만 단순해 사용자 경험이 다소 밋밋하다.",
    improvement: [
      "스트리밍 응답 UI 적용 (점차 텍스트가 나타나는 방식)",
      "음성 재생 시 애니메이션 추가, 인터랙션 강화",
    ],
  },
  {
    title: "🛒 NeighBuy",
    period: "2025.04.21 ~ 2025.06.13",
    description:
      "해당 프로젝트는 Next.js 14 기반의 풀스택 웹 애플리케이션으로, Prisma를 활용한 데이터 관리와, iron-session 기반의 인증 시스템을 도입했습니다.react-hook-form과 zod로 폼 유효성 검사를 구현했으며, UploadThing을 통한 이미지 업로드, 문자 인증, 그리고 Tailwind CSS 및 daisyUI로 반응형 UI를 구성하였습니다.",
    simple:
      "실제 당근마켓 웹페이지에 없는 로그인, 회원가입 기능, 소셜로그인, 로그인 후 권한을 바탕으로 글 CRUD와 댓글 CRUD, 무한 스크롤, 채팅기능을 추가하여 구현하였습니다.",
    intension: "로그인 기반의 중고거래 웹서비스",
    language: [
      "Typescript",
      "NextJS",
      "React",
      "TailwindCSS",
      "Zod",
      "PostCSS",
      "React-Query",
      "Express",
      "Prisma",
      "PostgreSQL ",
      "Next-Auth",
    ],
    img: "/Buy.png",
    projectLink: [
      {
        label: "사이트",
        url: "https://carrot-market-reloaded-three.vercel.app/",
      },
    ],
    githubLink: "https://github.com/SH701/carrot-market-reloaded",
    capability: [
      {
        title: "인증 기반 기능 분리",
        description:
          "자체 회원가입, 이메일+비밀번호 로그인과 더불어 Github 로그인을 구현했으며, 인증된 사용자만 글 작성, 수정, 삭제가 가능하도록 권한을 분리했습니다.",
      },
      {
        title: "실시간 채팅 기능",
        description:
          "채팅방 생성, 메시지 전송, 읽음 여부 표시 기능을 포함한 실시간 채팅 기능을 구현하였고, 채팅 목록은 최근 메시지 기준으로 정렬되며, 상대방의 메시지를 확인하면 자동으로 읽음 처리됩니다.",
      },
      {
        title: "게시글 및 댓글 CRUD",
        description:
          "사용자는 게시글과 댓글을 자유롭게 작성, 수정, 삭제 할 수 있으며, 이 모든 동작은 로그인 여부 및 작성자 권한을 기반으로 제한됩니다.",
      },
      {
        title: "이미지 업로드",
        description:
          "Uploadthing을 이용해 게시글 작성 시 이미지를 업로드할 수 있도록 했으며, 이미지 파일은 업로드 즉시 미리보기가 가능합니다.",
      },
    ],
    situation: "이미지 업로드 실패 시 사용자 안내가 부족하다",
    improvement: [
      "로드 진행률 표시, 실패 시 재시도 버튼·토스트 알림 추가",
      "NextAuth.js 또는 Iron Session 전략 통일, 리다이렉트·세션 복원 로직 보완",
    ],
  },
  {
    title: "🎬 Netflix Clone",
    period: "2025.03.24 ~ 2025.03.31",
    description:
      "React 기반으로 개발되었으며, styled-components로 스타일을 구성하고, recoil과 react-query를 통해 클라이언트 및 서버 상태를 효율적으로 관리했습니다. react-hook-form으로 폼 유효성 검사를 구현하고, framer-motion으로 애니메이션 효과를 적용하여 풍부한 사용자 경험을 제공했습니다.",
    simple:
      "영화 정보 웹 애플리케이션 인기 영화, 상영 예정작, 최고 평점 영화들을 슬라이더로 탐색하고 상세 정보를 확인할 수 있습니다.",
    intension: "영화 정보를 탐색할 수 있는 경험을 제공",
    language: [
      "TypeScript",
      "React",
      "React-DOM",
      "Styled-Components",
      "Recoil",
      "React-Query",
      "Framer-Motion",
      "Web-Vitals",
    ],
    img: "/photo.png",
    projectLink: [
      { label: "사이트", url: "https://sh701.github.io/Netflix_Clone/" },
    ],
    githubLink: "https://github.com/SH701/Netflix_Clone",
    capability: [
      {
        title: "상세정보",
        description:
          "영화 카드 클릭 시 모달로 상세정보를 확인할 수 있으며, 컴포넌트는 분리하여 재사용성과 유지보수성을 높였습니다.",
      },
      {
        title: "API 데이터 처리",
        description:
          "TMDB API를 통해 비동기적으로 영화 데이터를 불러오고, 로딩 상태를 반영해 Skeleton UI를 구현했습니다.",
      },
      {
        title: "상태 관리",
        description:
          "각 슬라이더의 영화 hover/선택 상태를 useState로 관리하고, 모달에 선택된 영화 정보를 props로 전달하는 구조로 상태 흐름을 단순화했습니다.",
      },
    ],
    situation: "즐겨찾기·위시리스트 기능이 없어 관심 영화 따로 관리가 안 된다.",
    improvement: [
      "로컬 스토리지 또는 Zustand를 이용해 관심 영화 저장·관리 기능 제공",
      "hooks/useMovies 같은 커스텀 훅으로 호출 로직 통합, 중복 요청 방지",
    ],
  },
];
