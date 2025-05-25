"use client"

import Link from "next/link";
import Image from "next/image"
import { useEffect,useState } from "react";


export default function Header(){
  const [isHide,setIsHide] = useState(false)
  useEffect(()=>{
    let lateY = window.screenY;
    const onscroll = () =>{
      const diff = lateY - window.scrollY;
      setIsHide(diff<0)
      lateY = window.scrollY;
    }
    window.addEventListener("scroll",onscroll);
    return () => window.removeEventListener("scroll",onscroll)
  },[])
    return(
    <header className={`fixed top-0 z-30 w-full left-0 sm:px-10 pt-5
        backdrop-blur-md transition-transform duration-300 ${
       isHide ? '-translate-y-full' : 'translate-y-0'}`}>
        <nav className=" flex flex-row">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={60} height={60} />
        </Link>
    <div className="ml-auto px-7 py-5 flex items-end justify-end gap-5 lg:text-lg sm:text-sm text-xs">
      <Link href="#about" className="flex flex-row">
        <p className="colorful pr-2">01.</p>
        <p className="hover:colorful transition-colors">About</p>
        </Link>
      <Link href="#skills" className="flex flex-row">
        <p className="colorful pr-2">02.</p>
        <p className="hover:colorful transition-colors">Skills</p>
        </Link>
      <Link href="#projects" className="flex flex-row">
        <p className="colorful pr-2">03.</p>
        <p className="hover:colorful transition-colors">Projects</p>
        </Link>
      <Link href="#contact" className="flex flex-row">
        <p className="colorful pr-2">04.</p>
        <p className="hover:colorful transition-colors">Contact</p>
        </Link>
    </div>
      </nav>
      </header>
    )
}