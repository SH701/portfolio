export type ProjectLink = string | { label: string; url: string };

interface ProjectProps {
  title: string;
  award?: string;
  description: string;
  simple: string;
  img: string;
  language: string[];
  period: string;
  detailimg: string[];
  projectLink: ProjectLink[];
  githubLink: string;
  capability: {
    title: string;
    description: string;
  }[];
  contribution: string;
  awards?: string;
}

export const Main: ProjectProps[] = [
  {
    title: "✈️ TripUs",
    period: "2025.12 ~ 2026.01",
    img: "/images/tripus/tripus_thumbnail.png",

    simple: "혼자는 싫고, 아무나도 싫은 사람을 위한 취향 기반 여행 동행 서비스",
    detailimg: [
      "/images/tripus/login.png",
      "/images/tripus/post.png",
      "/images/tripus/profile.png",
      "/images/tripus/chatting.png",
      "/images/tripus/notify.png",
    ],
    language: [
      "TypeScript",
      "Next.js",
      "React",
      "TailwindCSS",
      "React-Query",
      "Zustand",
      "Zod",
      "Next-Auth",
      "ShadcnUI",
      "Jest",
    ],
    description:
      "여행 스타일과 취향이 맞는 동행을 찾아주는 매칭 서비스입니다. 게시글을 통해 여행 동행자를 모집할 수 있으며, 실시간 채팅으로 여행 전부터 소통하며 서로를 알아갈 수 있습니다.",
    contribution: "25%",
    projectLink: [
      {
        label: "사이트",
        url: "https://tripus.site/",
      },
    ],
    githubLink: "https://github.com/codeit12-team3/FE",
    capability: [
      {
        title: "게시글 CRUD",
        description:
          "- 여행 동행 모집 게시글의 작성, 수정, 삭제 기능을 구현했으며, 이미지 업로드와 여행 정보 입력 폼을 포함합니다.",
      },
      {
        title: "동행 신청",
        description:
          "- 게시글에서 동행 신청 버튼을 통해 신청할 수 있으며, 신청 상태를 관리하는 기능을 구현했습니다.",
      },
      {
        title: "북마크",
        description:
          "- 관심 있는 게시글을 북마크하여 마이페이지에서 모아볼 수 있는 기능을 구현했습니다.",
      },
      {
        title: "필터링",
        description:
          "- 여행 국가, 날짜, 성별, 나이 등 조건별 게시글 필터링 기능을 구현하여 원하는 동행을 쉽게 찾을 수 있습니다.",
      },
    ],
  },
  {
    title: "🎡 SeoulCourse",
    period: "2025.10 ~ 2026.01",
    img: "/images/seoul_course/seoul_course_thumbnail.png",
    contribution: "100%",
    simple:
      "나만의 취향을 반영해 원하는 지역과 활동으로 하루 코스를 설계해 주는 AI 서비스.",
    detailimg: [
      "/images/seoul_course/course.png",
      "/images/seoul_course/chat.png",
      "/images/seoul_course/detail.png",
      "/images/seoul_course/save.png",
      "/images/seoul_course/post.png",
    ],
    language: [
      "TypeScript",
      "Next.js",
      "React",
      "TailwindCSS",
      "Framer-motion",
      "React-Query",
      "Zustand",
      "OpenAI",
      "Prisma",
      "PostgreSQL",
      "Clerk",
    ],
    description:
      "사용자의 지역·활동을 바탕으로 AI가 하루 일정을 자동으로 설계합니다. 요청은 입력 또는 챗으로 할 수 있으며 식사·카페·관광 등을 미리보기로 확인할 수 있습니다. 또한 AI를 거치지 않는 ‘구 탐색’ 모드로 특정 구의 인기 장소를 즉시 목록 형태로 확인할 수 있어 탐색과 맞춤 일정 생성 모두를 지원합니다.",
    projectLink: [
      {
        label: "사이트",
        url: "https://seoulcourse.vercel.app/",
      },
    ],
    githubLink: "https://github.com/SH701/potenday",
    capability: [
      {
        title: "AI 코스 생성",
        description:
          "- OpenAI로 의도·제약을 추출해 사용자가 선택한 지역·활동을 결합한 개인화된 하루 코스를 생성합니다. 생성 결과는 구조화된 JSON으로 반환되어 UI에서 즉시 렌더링됩니다.",
      },
      {
        title: "AI 채팅 기능",
        description:
          "- 대화형 챗봇이 자연어 요청을 해석해 장소 유형을 추천합니다. 세션 기반 대화 컨텍스트를 유지해 후속 질의에 대응하고 추천을 필터링·정렬합니다.",
      },
      {
        title: "장소 저장 ",
        description:
          "- 마음에 드는 장소를 저장하여 내 저장 목록에서 관리 할 수 있습니다.",
      },
      {
        title: "게시글 · 댓글 CRUD",
        description:
          "- 로그인 기반 권한으로 게시글 및 댓글 CRUD를 구현했습니다.",
      },
    ],
  },
  {
    title: "🤓 Noonchi ",
    award: "508 비사이드 포텐데이 우수 프로젝트 선정",
    period: "2025.08 ~ 진행 중",
    img: "/images/noonchi/noonchi_thumbnail.png",
    awards: "네이버 클라우드 주최  508 AI 포텐데이 우수 프로젝트 선정",
    simple: "NOONCHI — 한국어 존댓말, 상황과 관계까지 코칭해주는 AI",
    detailimg: [
      "/images/noonchi/main.png",
      "/images/noonchi/chatroom.png",
      "/images/noonchi/chatting.png",
      "/images/noonchi/history.png",
    ],
    language: [
      "TypeScript",
      "Next.js",
      "React",
      "TailwindCSS",
      "React-Query",
      "Zustand",
      "Lottie",
      "AWS S3",
    ],
    description:
      "페르소나 선택, 번역 박스, 음성 입력·TTS 기능을 결합한 대화형 학습 서비스입니다. 사용자는 상황(상사와 대화, 카페 주문 등)에 맞는 AI 페르소나를 선택해 실제 같은 대화를 경험할 수 있으며, 번역 박스로 언어 전환과 표현 교정을 확인할 수 있습니다.",
    contribution: "33%",
    projectLink: [
      { label: "웹", url: "https://noonchi-web.vercel.app" },
      { label: "모바일", url: "https://noonchi.ai.kr" },
    ],
    githubLink: "https://github.com/SH701/pangpang",
    capability: [
      {
        title: "커스텀 챗봇",
        description:
          "- 사용자가 원하는 챗봇으로 커스텀하여 대화를 할 수 있습니다.",
      },
      {
        title: "상황별 챗봇",
        description:
          "- 직장 상사와 대화하기·카페 주문하기 등 현실 시나리오 기반 대화 시뮬레이션을 구현했습니다.",
      },
      {
        title: "실시간 피드백 & 리라이팅",
        description:
          "- 표현의 정중도·자연스러움 분석 + 더 자연스러운 대안 제시합니다.",
      },
      {
        title: "히스토리 & 리포트",
        description: "- 대화 기록을 분석해 반복 학습 및 개선 방향 제공합니다.",
      },
    ],
  },
  {
    title: "🤗 Portfolio ",
    period: "2025.06 ~ 진행 중",
    img: "/images/portfolio/portfolio_thumbnail.png",

    simple: "개인 포트폴리오를 탐색할 수 있는 웹 애플리케이션입니다.",
    detailimg: [
      "/images/portfolio/introduce.png",
      "/images/portfolio/skills.png",
      "/images/portfolio/projects.png",
      "/images/portfolio/contact.png",
    ],
    language: ["TypeScript", "Next.js", "React", "TailwindCSS"],
    description:
      "Next.js와 TypeScript 기반의 개인 포트폴리오 웹사이트입니다. Framer Motion을 활용한 부드러운 스크롤 애니메이션과 인터랙티브한 UI를 구현했으며, 반응형 디자인으로 다양한 디바이스에서 최적화된 경험을 제공합니다. 프로젝트 상세 모달, 기술 스택 시각화 등 사용자 친화적인 인터페이스를 통해 프로젝트와 경험을 효과적으로 소개합니다.",
    contribution: "100%",
    projectLink: [{ label: "웹", url: "https://kimsuhwan.vercel.app/" }],
    githubLink: "https://github.com/SH701/portfolio",
    capability: [
      {
        title: "메인 페이지",
        description:
          "- Framer Motion 스크롤 애니메이션과 FadeUp 효과 적용, Introduce에서 About 섹션으로 자연스럽게 연결됩니다.",
      },
      {
        title: "Project 섹션",
        description:
          "- 카드형 레이아웃으로 프로젝트 목록 표시, 호버 시 상세보기 전환 애니메이션과 반응형 그리드를 제공합니다.",
      },
      {
        title: "Contact 섹션",
        description:
          "- EmailJS를 활용한 이메일 전송 폼 구현, 반응형 디자인으로 모바일·데스크톱 모두 최적화했습니다.",
      },
    ],
  },
];
