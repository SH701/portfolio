"use client"

import { useRef } from "react"
import emailjs from "@emailjs/browser"

export default function EmailForm(){
    const form = useRef<HTMLFormElement>(null)
    const onSubmit = (e:React.FormEvent)=>{
        e.preventDefault()
        if(!form.current) return
        emailjs
        .sendForm("service_izkvvfh", "template_wxgxaes", form.current, "YOUR_PUBLIC_KEY")
        .then(() => {
        alert("메일이 성공적으로 전송됐습니다.")
      })
      .catch((error) => {
        console.error("메일 전송 실패:", error)
      })
    }
    
    return(
        <div className="flex flex-col w-[90%] h-[80%]">
        <form ref={form} onSubmit={onSubmit} className="flex gap-5 flex-col">
            <label className="flex flex-col gap-1">
            <p className="colorful">Title</p>
            <input type="text" name="name" required 
            className="border py-1 px-1.5 rounded-sm focus:outline-none" />
            </label>

            <label className="flex flex-col gap-1">
            <p className="colorful">Your Email</p>
            <input type="email" name="email" required 
            className="border py-1 px-1.5 rounded-sm focus:outline-none"/>
            </label>

            <label className="flex flex-col gap-1 ">
            <p className="colorful">Message</p>
            <textarea name="message" required 
            className="border h-70 py-1 px-1.5 rounded-sm focus:outline-none" />
            </label>
            <div className="flex items-center justify-center colorful border h-10 cursor-pointer">
            <button type="submit">보내기</button>
            </div>
        </form>
        </div>
    )
}