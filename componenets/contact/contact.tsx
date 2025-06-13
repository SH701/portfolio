"use client";

import { useState } from "react";
import styles from "../contact/contact.module.css";
import ScrollAnimation from "../scrollAnimation";
import Closebtn from "../closebtn";
import EmailForm from "./emailform";

export default function Contact() {
  const [showForm, setShowForm] = useState(false);
  const click = () => {
    setShowForm(true);
  };

  return (
    <>
      <ScrollAnimation delay={0.7} className="text-center flex gap-4 flex-col">
        <p className="font-bold text-4xl">Contact</p>
        <p className="text-lg">
          소통을 기반으로 배우고, 성장하는 웹 개발자가
          <br /> 필요하면 언제든지 연락해 주세요!
        </p>
        <div className={`${styles.effect} inline-block relative`}>
          <button
            onClick={click}
            className="p-3 text-xl cursor-pointer colorful relative z-10"
          >
            Send Email
          </button>
        </div>
      </ScrollAnimation>
      {showForm && (
        <div className="fixed top-15 bg-[rgb(17,34,64)] border-[#64FFDA]  z-50 flex items-center justify-center border-2 lg:w-[50%] lg:left-[25%] w-[80%] h-[80%] sm:h-[85%] left-[10%]  mt-10 sm:mt-0">
          <EmailForm onClose={() => setShowForm(false)} />
          <Closebtn onclose={() => setShowForm(false)} />
        </div>
      )}
    </>
  );
}
