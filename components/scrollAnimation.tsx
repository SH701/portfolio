"use client"


import { PropsWithChildren,useEffect,useRef,useState } from "react"
type Props={
    className?:string
    delay?:number;
}
export default function ScrollAnimation({children,className,delay=0}:PropsWithChildren<Props>){
    const ref = useRef<HTMLDivElement>(null);
    const [isInter,setIsInter] = useState(false);
    useEffect(()=>{
        if(!ref.current) return;
        const observer = new IntersectionObserver(
            (entries)=>{
                entries.forEach((entry)=>{
                    if(entry.isIntersecting){
                        setIsInter(true);
                    }
                })
            },
            {threshold:0.3}
        )
        observer.observe(ref.current)
        return()=>{
            observer.disconnect();
        }
    },[])
    return (
		<div
			ref={ref}
			className={`${className} relative transition-all duration-700 ease-out 
				${isInter ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{
				transitionDelay:  `${delay * 0.1}s`,
			}}
		>
			{children}
		</div>
	);
}