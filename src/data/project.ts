export type ProjectLink = string | { label: string; url: string };

interface ProjectProps {
  title: string;
  description: string;
  video?: string;
  img: string;
  language: string[];
  period: string;
  detailimg: string[];
  projectLink: ProjectLink[];
  githubLink: string;
  capability: {
    title: string;
    problem: string;
    strategy: string;
    result: string;
  }[];
  contribution: string;

  testAccount?: { id: string; password: string };
}

export const Main: ProjectProps[] = [
  {
    title: "🤓 Noonchi ",
    period: "2025.08 ~ 진행 중",
    img: "/images/noonchi/noonchi_thumbnail.png",
    description:
      "한국어 학습을 위한 AI 서비스입니다. 상황에 맞는 한국어 표현과 롤플레이 대화를 통해 눈치(사회적 맥락 이해)를 학습할 수 있습니다.",
    detailimg: [
      "/images/noonchi/noonchi_1.png",
      "/images/noonchi/noonchi_2.png",
      "/images/noonchi/noonchi_3.png",
      "/images/noonchi/noonchi_4.png",
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
      "Storybook",
    ],

    contribution: "33%",
    projectLink: [
      { label: "웹", url: "https://noonchi-web.vercel.app" },
      { label: "모바일", url: "https://noonchi.ai.kr" },
    ],
    githubLink: "https://github.com/SH701/noonchi.ai",
    testAccount: { id: "test@naver.com", password: "qwer1234" },
    capability: [
      {
        title: "MediaRecorder 기반 음성 채팅 구현",
        problem:
          "텍스트 입력만으로는 언어 학습 특성상 말하기 연습이 불가능했고, 음성 입력부터 AI 응답까지의 흐름을 자연스럽게 연결해야 했습니다.",
        strategy:
          "브라우저 내장 MediaRecorder API로 녹음 → Blob 업로드 → STT 변환 파이프라인을 외부 라이브러리 없이 구현하고, 녹음 전/중/후 3단계로 음성 입력 흐름을 설계했습니다.",
        result:
          "idle → recording → recorded 3단계 상태 머신으로 음성 입력 흐름을 관리하여, 텍스트와 음성 모두로 AI와 대화할 수 있는 인터페이스를 구현했습니다.",
      },
      {
        title: "SSE 스트리밍으로 실시간 AI 응답 표시",
        problem:
          "AI 응답 완성까지 로딩 상태만 표시되어 사용자가 평균 6초를 대기해야 했습니다.",
        strategy:
          "AI 응답은 서버→클라이언트 단방향 수신이어서 양방향 통신인 WebSocket 대신 SSE를 선택했습니다. 전달받은 데이터의 타입을 구분하여 chunk 타입은 즉시 화면에 출력하고 done 타입은 최종 상태 업데이트로 처리하였습니다.",
        result:
          "동일 AI 서버 기준, 일반 fetch 방식은 응답 완성까지 평균 6초가 소요되었으나, SSE 스트리밍 도입 후 사용자가 첫 응답을 받기까지의 시간을 1.61초로 단축하였습니다.",
      },
      {
        title: "Google Analytics 기반 사용자 행동 분석",
        problem:
          "서비스 출시 후 실제 사용자가 어떤 방식으로 서비스를 이용하는지 파악할 수 없어, 개선 방향을 데이터 기반으로 결정하기 어려웠습니다.",
        strategy:
          "이벤트 기반 데이터 모델로 커스텀 이벤트 추적이 유연한 Google Analytics 4를 도입하여 페이지뷰, 활성 사용자, 이벤트 발생 수, 이탈률 등 핵심 지표를 수집했습니다.",
        result:
          "113명의 활성 사용자와 평균 5분 28초의 참여 시간, 이탈률 37.3%를 확인하였고, 이를 바탕으로 사용자가 서비스에 충분히 몰입하고 있음을 데이터로 검증했습니다.",
      },
    ],
  },
  {
    title: "✈️ TripUs",
    period: "2025.12 ~ 2026.01",
    img: "/images/tripus/tripus_thumbnail.png",
    description:
      "자신과 비슷한 취향을 가진 여행 동행을 구할 수 있는 플랫폼입니다.",
    detailimg: [
      "/images/tripus/login.png",
      "/images/tripus/post.png",
      "/images/tripus/profile.png",
      "/images/tripus/chatting.png",
      "/images/tripus/notify.png",
    ],
    video: "https://youtu.be/lNPxqNL8djA?si=nAif0JgsXhSGimZE",
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

    contribution: "25%",
    projectLink: [],
    githubLink: "https://github.com/codeit12-team3/FE",
    capability: [
      {
        title: "Post 도메인 전반 설계 및 구현",
        problem:
          "게시글 목록·상세·작성·수정·삭제의 전체 플로우를 담당해야 했고, 국가·지역·날짜·인원·성별·나이·태그·이미지 등 복잡한 입력 항목을 하나의 폼으로 처리해야 했습니다.",
        strategy:
          "API 레이어, 커스텀 훅, 컴포넌트, 타입, 상수를 Post 도메인 단위로 구조화하고, React Hook Form과 Zod를 조합해 각 필드의 유효성 검사와 제출 흐름을 설계했습니다.",
        result:
          "도메인 단위의 응집도 높은 구조로 코드 변경 영향 범위를 최소화했고, 복잡한 폼도 안정적으로 동작하도록 구현했습니다.",
      },
      {
        title: "React Hook Form + Zod로 폼 설계",
        problem:
          "국가, 날짜, 인원, 나이, 이미지 등 다양한 타입의 필드와 복잡한 유효성 검증이 필요했습니다",
        strategy:
          "React Hook Form으로 폼 상태를 관리하고 Zod로 필드별 스키마를 정의하여 안전한 유효성 검증을 구현하였습니다.",
        result:
          "국가, 날짜, 인원, 나이, 이미지 등 8개 이상의 이기종 필드를 단일 폼으로 관리하며 타입 안전한 유효성 검증을 구현하였습니다.",
      },
      {
        title: "MSW 기반의 Post 도메인 개발 및 테스트 로직 구현",
        problem:
          " 백엔드 API 완성 전까지 프론트엔드 개발이 중단되는 병목이 예상되었습니다.",
        strategy:
          "API 명세 기반으로 MSW 핸들러를 직접 작성하여 실제 서버 없이 API 통신 로직을 선제적으로 구현하였습니다.",
        result:
          "담당 게시글 도메인 API 8개 중 6개를 MSW로 선구현하여 백엔드 완성 전 병행 개발을 완료하였고, 실제 API 연결 시 핵심 로직 재작성 없이 빠르게 연동을 완료하였습니다.",
      },
    ],
  },
  {
    title: "🎡 SeoulCourse",
    period: "2025.10 ~ 2026.01",
    img: "/images/seoul_course/seoul_course_thumbnail.png",
    contribution: "100%",
    description:
      "원하는 지역과 활동을 입력하면 AI가 식사·카페·관광을 포함한 하루 코스를 자동으로 설계해줍니다.",
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
      "OpenAI API",
      "Prisma",
      "PostgreSQL",
      "Clerk",
    ],

    projectLink: [
      {
        label: "사이트",
        url: "https://seoulcourse.vercel.app/",
      },
    ],
    githubLink: "https://github.com/SH701/potenday",
    capability: [
      {
        title: "Clerk + Prisma 기반 인증 및 데이터 계층 구축",
        problem:
          "소셜 로그인과 인증 UI를 직접 구현할 경우 OAuth 연동, 세션 관리, 로그인 화면 제작까지 개발 범위가 넓어져 핵심 기능인 AI 추천 개발에 집중하기 어려웠습니다.",
        strategy:
          "소셜 로그인 내장과 인증 UI 컴포넌트를 제공하는 Clerk을 도입해 인증 관련 개발 범위를 최소화하고, DB는 익숙한 Prisma ORM을 선택해 러닝커브 없이 데이터 계층을 구축했습니다.",
        result:
          "인증·DB 구현 시간을 최소화하여 AI 추천 파이프라인 등 핵심 비즈니스 로직 개발에 집중할 수 있었습니다.",
      },
      {
        title: "신뢰성 있는 AI 추천 시스템 설계 (OpenAI & Naver API)",
        problem:
          "단순 AI 생성형 답변이 존재하지 않는 장소를 추천하거나 잘못된 정보를 제공하여 서비스의 신뢰도가 저하되는 문제가 있었습니다",
        strategy:
          "Naver API를 통해 특정 구역의 실제 장소 데이터를 선제적으로 확보하여 실제 데이터를 OpenAI 프롬프트에 주입하여, 검증된 장소 내에서만 사용자 맞춤형 추천이 이루어지도록 파이프라인을 구축하였습니다.",
        result:
          " AI의 창의성과 외부 API의 정확성을 결합하여 사용자에게 신뢰도 높은 정보를 제공합니다.",
      },
    ],
  },
];
