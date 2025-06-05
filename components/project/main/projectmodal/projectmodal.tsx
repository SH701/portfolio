"use client";

import Link from "next/link";

import styles from "../projectmodal/projectmodal.module.css"
import { useState } from "react";
import CloseBtn from "@/components/closebtn";

interface CapabilityItem {
  title:string;
  description:string;
}

interface Props {
  title: string;
  period:string;
  onClose: () => void;
  githubLink:string;
  projectLink:string;
  language:string[];
  capability:CapabilityItem[];
  intension:string;
  simple:string;
}

export default function ProjectModal({ title,simple, onClose,githubLink,projectLink,language,capability,period,intension }: Props) {
  const [isOpen,setIsOpen] = useState<number[]>([]);
  const toggleIndex = (index:number)=>{
    setIsOpen((prev)=>
    prev.includes(index)?prev.filter((i)=>i !== index):[...prev,index])
  }
  return (
    <div className="h-auto ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <CloseBtn onclose={onClose}/>
      </div>
      <div className="flex flex-col gap-2">
      <p>진행 기간 : {period} </p>
      <p>기획 의도 : {intension}</p>
      <hr />
      <div className="flex flex-col gap-3">
        <p className={styles.title}>1. 간단 소개</p>
        <div className="bg-[#F9F9F9] border-1 border-gray-300">
        <p className="text-sm whitespace-pre-line p-2">{simple}</p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className={styles.title}>2. 관련 링크</p>
        <ul className="flex flex-col gap-2 pl-4">
          <li className="list-disc">깃허브: <Link href={githubLink} className="underline">{githubLink}</Link></li>
          <li className="list-disc">사이트: <Link href={projectLink}className="underline">{projectLink}</Link></li>
        </ul>
      </div>

      <div>
        <p className={styles.title}>3. 기술 스텍</p>
           <div className="flex flex-wrap gap-2">
              {language.map((tech) => (
                <span key={tech} className="px-2 py-1 text-sm bg-red-100 text-red-500 rounded-md">
                  {tech}
                </span>
              ))}
            </div>
      </div>

      <div>
        <p className={styles.title}>4. 핵심 기능 설명</p>
       <div>
        {capability.map((item,index)=>{
          const open = isOpen.includes(index);
          return (
            <div key={index}>
              <button
              onClick={()=>toggleIndex(index)}
              className="text-left w-full py-1.5 font-semibold cursor-pointer"
            >
              <span>{open ? "▼" : "▶"} {item.title}</span>
              </button>
              {open&&(
                <p className="px-5  text-gray-900">{item.description}</p>
              )}
            </div>
          )
        })}
       </div>
      </div>
      </div>
    </div>
  );
}

