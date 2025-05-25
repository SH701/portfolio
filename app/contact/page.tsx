"use client"

import Closebtn from "@/components/closebtn";
import EmailForm from "@/components/emailform";
import { useState } from "react";

export default function Contact() {
  const [showForm, setShowForm] = useState(false);
  const click = () => {
    setShowForm(true);
  };

  return (
    <>
    <div className="flex items-center justify-center flex-col gap-5 mb-10">
        <p className="font-bold text-4xl">Contact</p>
        <p>소통을 기반으로 배우고, 성장하는 웹 개발자가 필요하면 언제든지 연락해 주세요!</p>
        <div className="effect inline-block relative">
      <button onClick={click} className="p-3 text-xl cursor-pointer colorful relative z-10">Send Email</button>
      </div>
      {showForm && (
        <div className="fixed top-15 bg-[rgb(17,34,64)] border-[#64FFDA] left-[20%] z-50 flex items-center justify-center border-2 lg:w-[50%] w-[65%] sm:h-[85%] h-[70%] mt-10 sm:mt-0">
          <EmailForm />
          <Closebtn onclose={()=>setShowForm(false)}/>
        </div>
      )}
      </div>
    </>
  );
}
