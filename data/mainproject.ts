interface MainProjectType {
  title: string;
  description: string;
  simple: string;
  intension: string;
  language: string[];
  period: string;
  img: string;
  projectLink: string;
  githubLink: string;
  capability: {
    title: string;
    description: string;
  }[];
  situation: string;
  improvement: string[];
}

export const Main: MainProjectType[] = [
  {
    title: "🛒 NeighBuy",
    period: "2025.04.21 ~ 2025.06.13",
    description:
      "해당 프로젝트는 Next.js 14 기반의 풀스택 웹 애플리케이션으로, Prisma + Supabase를 활용한 데이터 관리와, iron-session 기반의 인증 시스템을 도입했습니다.react-hook-form과 zod로 폼 유효성 검사를 구현했으며, AWS S3 및 UploadThing을 통한 이미지 업로드, 문자 인증, 그리고 Tailwind CSS 및 daisyUI로 반응형 UI를 구성하였습니다.",
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
      "GitHub",
      "Vercel",
    ],
    img: "/Buy.png",
    projectLink: "https://carrot-market-reloaded-three.vercel.app/",
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
    projectLink: "https://sh701.github.io/Netflix_Clone/",
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
