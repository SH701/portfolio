export type ProjectLink = string | { label: string; url: string };

interface MainProjectType {
  title: string;
  award?: string;
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
    title: "✈️ SeoulCourse",
    period: "2025.10 ~ 2025.11",
    collaboration: "프로젝트 리드 겸 단독 개발자 (기획 · 설계 · 구현 · 배포)",
    description:
      "사용자의 지역·활동을 바탕으로 AI가 현실적인 하루 일정을 자동으로 설계합니다. 요청은 입력 또는 챗으로 할 수 있으며 식사·카페·관광·이동 경로를 고려한 순서와 소요 시간을 포함해 바로 미리보기로 확인할 수 있습니다. 또한 AI를 거치지 않는 ‘구 탐색’ 모드로 특정 구의 인기 장소를 즉시 목록 형태로 확인할 수 있어 탐색과 맞춤 일정 생성 모두를 지원합니다.",
    simple:
      "나만의 취향을 반영해 원하는 지역과 활동으로 하루 코스를 설계해 주는 AI 서비스.",
    intension: "어디로 놀러갈지 고민하는 사람들을 위한 서비스",
    language: [
      "Typescript",
      "NextJS",
      "React",
      "TailwindCSS",
      "Framer-motion",
      "React-Query",
      "Zsutand",
      "Clerk",
      "Prisma",
      "PostgreSQL ",
      "Openai",
    ],
    img: "/images/course.png",
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
          "OpenAI로 의도·제약을 추출해 사용자가 선택한 지역·활동을 결합한 개인화된 하루 코스를 생성합니다. 생성 결과는 구조화된 JSON으로 반환되어 UI에서 즉시 렌더링됩니다.",
      },
      {
        title: "AI 채팅 기능",
        description:
          "대화형 챗봇이 자연어 요청을 해석해 장소 유형을 추천합니다. 세션 기반 대화 컨텍스트를 유지해 후속 질의에 대응하고 추천을 필터링·정렬합니다.",
      },
      {
        title: "구별 탐색 기능",
        description:
          "특정 구를 선택하면 해당 구의 핫플을 즉시 목록 형태로 확인할 수 있으며 장소 저장이 가능합니다.",
      },
      {
        title: "게시글 · 댓글 CRUD",
        description: "로그인 기반 권한으로 게시글 및 댓글 CRUD를 구현했습니다.",
      },
    ],
    situation: "AI가 정확한 답변을 내놓지 않을떄가 있다.",
    improvement: [
      "프롬프트 템플릿 정교화: 시스템 메시지와 예시 입력을 추가해 의도와 출력 포맷을 명확히 정의",
      "재시도 및 대안 UI 제공: 불확실 표시, 재생성 버튼 노출",
    ],
  },
  {
    title: "🤓 Noonchi ",
    award: "508 비사이드 포텐데이 우수 프로젝트 선정",
    period: "2025.08 ~ 진행 중",
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
      "AWS3",
    ],
    img: "/images/noonchi.png",
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
    period: "2025.04 ~ 2025.06",
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
      "React-Query",
      "Express",
      "Prisma",
      "PostgreSQL ",
      "Next-Auth",
    ],
    img: "/images/Buy.png",
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
];
