import Link from "next/link";

export default function Introduce(){
    return(
         <>
         <div className="flex flex-col gap-2 pt-15 sm:px-10 ">
         <div className="colorful text-2xl opacity:1">안녕하세요. 저는 웹 개발자</div>
         <div className="lg:text-6xl pt-5 text-white opacity-80 text-4xl font-bold">김수환입니다.</div>
         <div className="lg:text-6xl pt-4 text-3xl font-bold">저는 끊임없는 도전을 즐기며,<br /> 
         웹 개발의 매력에 빠져 있습니다.</div>
         <p className="pt-2 text-lg lg:text-xl">사용자에게 먼저 다가갈 수 있는 웹사이트의 프론트엔드 부분을 담당하고 있습니다.</p>
         <div className="flex flex-row gap-3">
            <Link href="https://github.com/SH701">
                <svg
                    className="size-10 colorful mt-3"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                    ></path>
                </svg>
            </Link>
            <Link href="https://vercel.com/sh701s-projects">
            <svg 
            data-testid="geist-icon" 
            className="size-10 colorful mt-3"
            strokeLinejoin="round" 
            viewBox="0 0 16 16" 
            >    
            <g clipPath="url(#clip0_872_3186)">
                <circle
                cx="8"
                cy="8"
                r="7.25"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
                <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 4.5L11.5 10.625H4.5L8 4.5Z"
                fill="var(--ds-gray-100)"
                />
                 </g>
            <defs>
            <clipPath id="clip0_872_3186">
            <rect width="16" height="16" fill="white" />
            </clipPath>
            </defs>
          </svg>
         </Link>
         <a href="/resume.docx" download className="w-10 h-10 bg-teal-400 rounded-full mt-3 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8  text-black">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
         </a>
        </div>
        </div>
        </>
    )
}