interface Props{
    title:string;
    description:string;
    language:string;
    period:string;
}

export const Main:Props[] =[
    {
        title:"Carrot",
        period:"2025.04.21 ~ 2025.05.09",
        description:"실제 당근마켓 웹페이지에 없는 로그인, 회원가입 기능, 소셜로그인, 로그인 후 권한을 바탕으로 글 CRUD와 댓글 CRUD, 무한 스크롤, 채팅기능을 추가하여 구현하였습니다!",
        language:"NextJs | TailwindCSS | Vercel",
    },
    {
        title:"Suflix",
        period:"2025.03.24 ~ 2025.03.31",
        description:"TMDB API를 활용한 영화 정보 웹 애플리케이션 인기 영화, 상영 예정작, 최고 평점 영화들을 슬라이더로 탐색하고 상세 정보를 확인할 수 있습니다.",
        language:"NextJs | Vercel",
    },
    {
        title:"CoinTracker",
        period:"2025.02.20 ~ 2025.02.25",
        description: "실시간으로 암호화폐 시세를 확인하고, 24시간 가격 변동까지 한눈에 파악할 수 있는 웹 기반 시세 트래커입니다.정돈된 레이아웃과 반응형 디자인으로 데스크탑/모바일 모두 쾌적한 사용이 가능합니다",
        language:"React",
    },
    {
        title:"PlanFlow",
        period:"2025.01.10 ~ 2025.01.17",
        description:"순수 Js로 구현한 하루의 흐름을 자연스럽게 정리하는 감성 플래너 웹앱, 시간대에 따라 배경이 바뀌고, 다크 모드도 지원하는 스마트한 일정 관리 도구입니다 ",
        language:""
    }
]