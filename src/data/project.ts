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
    problem: string;
    strategy: string;
    result: string;
  }[];
  contribution: string;
  awards?: string;
  testAccount?: { id: string; password: string };
}

export const Main: ProjectProps[] = [
  {
    title: "🤓 Noonchi ",
    award: "508 비사이드 포텐데이 우수 프로젝트 선정",
    period: "2025.08 ~ 진행 중",
    img: "/images/noonchi/noonchi_thumbnail.png",
    awards: "네이버 클라우드 주최  508 AI 포텐데이 우수 프로젝트 선정",
    simple:
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
      "NextAuth v5",
      "Storybook",
    ],
    description:
      "페르소나 선택, 번역 박스, 음성 입력·TTS 기능을 결합한 대화형 학습 서비스입니다. 사용자는 상황에 맞는 AI 페르소나를 선택해 실제 같은 대화를 경험할 수 있으며, 번역 박스로 언어 전환과 표현 교정을 확인할 수 있습니다.",
    contribution: "33%",
    projectLink: [
      { label: "웹", url: "https://noonchi-web.vercel.app" },
      { label: "모바일", url: "https://noonchi.ai.kr" },
    ],
    githubLink: "https://github.com/SH701/noonchi.ai",
    testAccount: { id: "test@naver.com", password: "qwer1234" },
    capability: [
      {
        title: "사용자 경험 중심의 인증 시스템 최적화",
        problem:
          "Access Token 만료 시 사용자가 다시 로그인해야 하거나 앱 흐름이 끊기는 불편함이 있었고, 클라이언트 사이드 리다이렉트로 인해 비로그인 사용자에게 보호된 페이지가 잠깐 노출되는 문제가 있었습니다.",
        strategy:
          "NextAuth v5의 JWT 콜백을 통해 토큰을 자동 갱신하고, Next.js Middleware에서 세션을 검증하여 서버 사이드에서 보호된 라우트를 처리했습니다.",
        result:
          "백그라운드에서 토큰이 자동으로 갱신되어 사용자 경험이 개선되었고, 비로그인 사용자가 보호된 페이지에 접근할 때 페이지 내용이 잠깐이라도 보이는 현상이 사라졌습니다.",
      },
      {
        title: "디자이너 3인과의 협업 체계 구축",
        problem:
          "프론트엔드 개발자가 1명인 상황에서 3명의 디자이너가 제작하는 다양한 컴포넌트의 일관성을 유지해야 했고, UI 수정 및 검토 과정에서 발생하는 커뮤니케이션 비용을 줄여야 했습니다.",
        strategy:
          "Storybook 10을 도입하여 모든 공통 컴포넌트를 독립된 환경에서 문서화하고, 각 컴포넌트의 다양한 상태(Default, Hover, Disabled, Error 등)를 미리 시각화하여 디자이너가 개발 단계에서 결과물을 즉시 검토할 수 있도록 공유했습니다.",
        result:
          "디자인 가이드와 실제 구현체 간의 차이를 최소화하여 UI 품질의 일관성을 확보하였습니다.",
      },
      {
        title: "SSE 스트리밍으로 실시간 AI 응답 표시",
        problem:
          "서버에서 AI 응답을 한 번에 받아올 경우, 전체 답변이 생성될 때까지 긴 대기 시간이 발생하여 사용자 이탈 및 UX 저하가 우려되었습니다.",
        strategy:
          "전달받은 데이터의 타입을 구분하여 chunk 타입은 즉시 화면에 스트리밍하고, done 타입은 최종 응답 완성 및 상태 업데이트로 처리했습니다.",
        result:
          "글자가 하나씩 나타나는 스트리밍 UX를 구현하여 사용자가 느끼는 첫 응답 대기 시간을 단축하였습니다.",
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
        title: "Post 도메인 전반 설계 및 구현",
        problem:
          "게시글 목록·상세·작성·수정·삭제의 전체 플로우를 담당해야 했고, 국가·지역·날짜·인원·성별·나이·태그·이미지 등 복잡한 입력 항목을 하나의 폼으로 처리해야 했습니다.",
        strategy:
          "API 레이어, 커스텀 훅, 컴포넌트, 타입, 상수를 Post 도메인 단위로 구조화하고, React Hook Form과 Zod를 조합해 각 필드의 유효성 검사와 제출 흐름을 설계했습니다.",
        result:
          "도메인 단위의 응집도 높은 구조로 코드 변경 영향 범위를 최소화했고, 복잡한 폼도 안정적으로 동작하도록 구현했습니다.",
      },
      {
        title: "React Virtuoso를 통한 무한스크롤 성능 최적화",
        problem:
          "무한 스크롤 기능을 통해 대량의 게시글이 로드될 때, 브라우저 내 DOM 노드가 무한정 증가하며 메모리 점유율이 상승하고 스크롤이 끊기는 성능 저하 현상이 발생했습니다.",
        strategy:
          "React Virtuoso를 도입하여 수백 개의 데이터 중 현재 사용자 화면에 보이는 항목만 렌더링하고, 나머지는 DOM에서 동적으로 제거하는 윈도잉 기법을 구현했습니다.",
        result:
          "수백 개의 게시글을 로드하더라도 실제 DOM 노드 수를 일정하게 유지하였습니다.",
      },
      {
        title: "MSW 기반의 Post 도메인 개발 및 테스트 로직 구현",
        problem:
          "백엔드 API 개발이 완료될 때까지 기다릴 경우 프론트엔드 전체 일정이 지연되는 병목 현상이 예상되었습니다.",
        strategy:
          "백엔드 API 명세를 바탕으로 MSW핸들러를 직접 작성하여, 실제 서버 없이도 API 통신 로직을 선제적으로 구현하고 검증할 수 있도록 했습니다.",
        result:
          "백엔드 API 완료 여부와 관계없이 Post 도메인의 CRUD 및 핵심 로직 구현을 마쳤으며, 실제 API 연결 시 발생할 수 있는 시행착오를 최소화했습니다.",
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
        title: "SSE 스트리밍으로 실시간 AI 응답 표시",
        problem:
          "서버에서 AI 응답을 한 번에 받아올 경우, 전체 답변이 생성될 때까지 긴 대기 시간이 발생하여 사용자 이탈 및 UX 저하가 우려되었습니다.",
        strategy:
          "ReadableStream API를 사용하여 서버로부터 전달되는 SSE 데이터를 data: 라인 단위로 실시간 파싱했습니다. chunk 타입은 즉시 화면에 스트리밍하고, done 타입은 최종 응답 완성 및 상태 업데이트로 처리했습니다.",
        result:
          "글자가 하나씩 나타나는 스트리밍 UX를 구현하여 사용자가 느끼는 첫 응답 대기 시간을 획기적으로 단축하였습니다.",
      },
      {
        title: "React Query를 통한 데이터 페칭 및 캐싱 최적화",
        problem:
          "초기 useEffect 기반의 페칭 방식에서 발생하던 페이지 진입 시마다 중복 API 호출, 불필요한 리렌더링, 캐싱 부재 문제를 해결하기 위해 도입 하였습니다.",
        strategy:
          "빈번하게 변하지 않는 장소 정보는 staleTime을 길게(예: 5분) 설정하고, 실시간성이 중요한 채팅 데이터는 짧게 설정하여 데이터 성격에 따른 네트워크 비용을 최적화였습니다.",
        result:
          "동일 데이터에 대한 네트워크 요청 발생 빈도를 대폭 절감하고, 캐싱된 데이터를 통한 즉각적인 UI 응답성 확보하였습니다.",
      },
      {
        title: "신뢰성 있는 AI 추천 시스템 설계 (OpenAI & Naver API)",
        problem:
          "단순 AI 생성형 답변이 존재하지 않는 장소를 추천하거나 잘못된 정보를 제공하여 서비스의 신뢰도가 저하되는 문제가 있었습니다",
        strategy:
          "Naver API를 통해 특정 구역의 실제 장소 데이터를 선제적으로 확보하여 실제 데이터를 OpenAI 프롬프트에 주입하여, 검증된 장소 내에서만 사용자 맞춤형 추천이 이루어지도록 파이프라인을 구축하였습니다.",
        result:
          " AI의 창의성과 외부 API의 정확성을 결합하여 사용자에게 신뢰도 높은 여행 코스 큐레이션 제공합니다.",
      },
    ],
  },
];
