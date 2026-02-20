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
      "React-Query",
      "Zustand",
      "TailwindCSS",
      "Zod",
      "React-Hook-Form",
      "Axios",
      "NextAuth v5",
      "Storybook",
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
        title: "챗봇 대화 UI",
        description:
          "- 커스텀 챗봇과 상황별 챗봇의 실시간 대화 인터페이스를 구현하고, React-Query로 메시지 송수신 API를 연동했습니다.",
      },
      {
        title: "피드백 · 리라이팅",
        description:
          "- 사용자 입력에 대한 정중도 분석 및 대안 표현을 보여주는 피드백 UI와 API 연동을 구현했습니다.",
      },
      {
        title: "히스토리 · 리포트",
        description:
          "- 대화 기록 목록 조회 및 학습 리포트 화면을 구현하고, 필터링을 적용했습니다.",
      },
      {
        title: "음성 입력 · TTS",
        description:
          "- 음성 녹음 및 TTS 재생 기능의 UI와 API 연동을 구현해 음성 기반 대화를 지원합니다.",
      },
    ],
  },
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
      "React-Query",
      "Zustand",
      "TailwindCSS",
      "Shadcn/UI",
      "Zod",
      "React-Hook-Form",
      "NextAuth v5",
      "Jest",
      "MSW",
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
          "- React-Query로 게시글 작성·수정·삭제 API를 연동하고, 이미지 업로드와 여행 정보 입력 폼 UI를 구현했습니다.",
      },
      {
        title: "동행 신청",
        description:
          "- 동행 신청 및 상태(대기/수락/거절) 관리 API를 연동하고, 신청 현황 UI를 구현했습니다.",
      },
      {
        title: "북마크",
        description:
          "- 북마크 추가·삭제 API를 연동하고, 마이페이지에서 북마크 목록을 조회하는 기능을 구현했습니다.",
      },
      {
        title: "필터링",
        description:
          "- 여행 국가, 날짜, 성별, 나이 등 조건별 필터링 로직을 구현했습니다.",
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
      "React-Query",
      "Zustand",
      "TailwindCSS",
      "Framer-motion",
      "OpenAI API",
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
          "- OpenAI API와 Function Calling을 활용해 사용자 의도를 파싱하고, 지역·활동 조건을 결합한 코스를 JSON 형태로 반환합니다.",
      },
      {
        title: "AI 채팅 기능",
        description:
          "- OpenAI Chat Completions API 기반 대화형 추천 시스템을 구현하고, 세션별 컨텍스트를 유지해 멀티턴 대화를 지원합니다.",
      },
      {
        title: "장소 저장",
        description:
          "- Clerk 인증 기반으로 사용자별 저장 기능을 구현하고, Prisma ORM을 통해 PostgreSQL에 데이터를 저장·조회합니다.",
      },
      {
        title: "게시글 · 댓글 CRUD",
        description:
          "- Next.js Server Actions을 활용해 게시글·댓글을 구현하였습니다.",
      },
    ],
  },
];
