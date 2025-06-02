interface Props{
    title:string;
    description:string;
    language:string;
    githubLink: string;
    projectLink:string;
}

export const subProjects:Props[] =[
    {
        title:"Portfolio",
        description:"seungyn님의 프토폴리오 디자인을 참고해 포트폴리오를 제작했습니다.",
        language:"NextJs | TailwindCSS | Vercel",
        githubLink:"https://github.com/SH701/portfolio",
        projectLink:""
    },
    {
        title:"Next Movie",
        description:"Next.js의 라우팅과 데이터 패칭을  영화 API로 학습한 프로젝트입니다.",
        language:"NextJs | Vercel",
        githubLink:"https://github.com/SH701/nextmovie",
        projectLink:"https://nextjsmovie-gamma.vercel.app/"
    },
    {
        title:"React To-Do",
        description: "React로 제작한 할 일 관리 앱. 상태 관리와 컴포넌트 분리에 중점을 두었습니다.",
        language:"React",
        githubLink:"https://github.com/SH701/React-to-do",
        projectLink:"https://sh701.github.io/React-to-do/"
    }
]