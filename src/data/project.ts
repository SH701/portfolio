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
      "Next.js 기반 AI 한국어 학습 서비스에서 OAuth 인증, 실시간 스트리밍 채팅, PWA 등을 구현하며 프론트엔드 전반을 담당하였습니다.",
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
    projectLink: [{ label: "모바일", url: "https://noonchi.ai.kr" }],
    githubLink: "https://github.com/SH701/noonchi.ai",
    testAccount: { id: "test@naver.com", password: "qwer1234" },
    capability: [
      {
        title: "WebSpeech API 기반 음성 채팅 구현",
        problem:
          "텍스트 입력만으로는 언어 학습 특성상 말하기 연습이 불가능했고, 음성 입력부터 AI 응답까지의 흐름을 자연스럽게 연결해야 했습니다.",
        strategy:
          "브라우저 내장 Web Speech API를 외부 라이브러리 없이 사용해 마이크 입력을 실시간 텍스트로 변환했습니다.",
        result:
          "idle → recording → recorded 3단계 상태 머신으로 음성 입력 흐름을 관리하여, 텍스트와 음성 모두로 AI와 대화할 수 있는 인터페이스를 구현했습니다.",
      },
      {
        title: "SSE 스트리밍으로 실시간 AI 응답 표시",
        problem:
          "AI 응답 완성까지 로딩 상태만 표시되어 사용자가 평균 6초를 대기해야 했습니다.",
        strategy:
          "AI 응답은 서버→클라이언트 단방향 수신이어서 양방향 통신인 WebSocket 대신 SSE를 선택했습니다. ReadableStream과 TextDecoder로 청크를 직접 파싱하여 chunk 타입은 즉시 화면에 누적 출력하고, situation·done 타입은 별도 상태 업데이트로 처리했습니다.",
        result:
          "동일 AI 서버 기준 일반 fetch 방식은 응답 완성까지 평균 6초가 소요되었으나 SSE 스트리밍 도입 후 사용자가 첫 응답을 받기까지의 시간을 1.61초로 단축하였습니다.",
      },
      {
        title: "Axios 인터셉터 기반 인증 자동화 및 401 처리",
        problem:
          "모든 API 요청마다 토큰을 수동으로 주입해야 했고, 토큰 만료 시 사용자가 갑작스럽게 오류 화면을 마주하는 문제가 있었습니다.",
        strategy:
          "Axios request 인터셉터에서 NextAuth 세션을 자동으로 읽어 Authorization 헤더를 주입하고 response 인터셉터에서 401 응답을 감지해 signOut을 자동 호출하도록 설계했습니다.",
        result:
          "인증 관련 코드를 인터셉터 단 1곳으로 집중시켜 전체 API 호출 코드에서 토큰 주입 로직을 제거했고 401 발생 시 자동 로그아웃 및 리디렉션이 동작하는 일관된 인증 처리 구조를 만들었습니다.",
      },
      {
        title: "TanStack Query + Zustand 서버/클라이언트 상태 분리",
        problem:
          "서버 데이터와 UI 상태가 혼재되어 캐싱이 불가능하고 동일 데이터를 여러 컴포넌트에서 중복 요청하는 문제가 있었습니다.",
        strategy:
          "서버 데이터(API 응답)는 TanStack Query로 캐싱·동기화하고 클라이언트 UI 상태(모달 개폐, 탭, 채팅 히스토리)는 Zustand 스토어 4개로 분리 관리했습니다.",
        result:
          "API 중복 호출을 제거하고 캐시 기반 즉시 응답으로 즐겨찾기 등 인터랙션의 반응속도를 개선했습니다.",
      },
      {
        title: "Google Analytics 기반 사용자 행동 분석",
        problem:
          "서비스 출시 후 실제 사용자가 어떤 방식으로 서비스를 이용하는지 파악할 수 없어, 개선 방향을 데이터 기반으로 결정하기 어려웠습니다.",
        strategy:
          "이벤트 기반 데이터 모델로 커스텀 이벤트 추적이 유연한 Google Analytics 4를 도입하여 페이지뷰, 활성 사용자, 이벤트 발생 수, 이탈률 등 핵심 지표를 수집했습니다.",
        result:
          "113명의 활성 사용자와 평균 5분 28초의 참여 시간과 이탈률 37.3%를 확인하였습니다.",
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
        title: "클라이언트 사이드 이미지 압축으로 업로드 성능 개선",
        problem:
          "용량이 큰 이미지를 업로드 하면 속도가 느리고 렌더링 성능에도 영향을 줬습니다.",
        strategy:
          "browser-image-compression 라이브러리를 활용해 업로드 전 클라이언트에서 압축을 처리하고, 프로필(1MB)과 게시물(5MB)의 용도별 프리셋을 분리 설계했습니다. useWebWorker 옵션으로 압축 작업을 별도 스레드에서 실행하였습니다.",
        result: "업로드 용량 절감 및 렌더링 속도 개선하였습니다.",
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
      "프론트엔드부터 API 설계, DB 스키마, 외부 API 연동, 배포까지 전 과정을 단독으로 설계·구현했습니다.",
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
          "OAuth 연동, 세션 관리 등 인증 시스템 직접 구현 시 개발 범위가 지나치게 확장되는 문제가 있었습니다.",
        strategy:
          "Clerk을 도입하여 인증 UI와 소셜 로그인이 내장된 라이브러리를 활용해 인증 개발 공수 최소화하였고 익숙한 ORM을 선택하여 데이터 계층 구축 시 발생하는 러닝커브 제거",
        result:
          "인증 및 DB 인프라 구축 시간을 단축하여 AI 추천 파이프라인 등 핵심 비즈니스 로직 개발에 자원 집중할 수 있었습니다.",
      },
      {
        title: "React Query 캐싱으로 AI API 호출 최적화",
        problem:
          "같은 구를 반복 선택할 때마다 불필요한 API 호출이 발생, AI 응답 지연 문제가 있었습니다.",
        strategy:
          "React Query의 staleTime을 자정까지 동적으로 계산해 설정하고 로딩 중에는 스피너와 텍스트로 대기 상태를 명확히 표시했습니다.",
        result:
          " 같은 구 재선택 시 캐시에서 즉시 렌더링되어 불필요한 AI API 호출을 제거했으며 낙관적 업데이트로 저장 인터랙션의 체감 응답 속도를 개선했습니다.",
      },
    ],
  },
];
