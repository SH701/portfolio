"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

interface EmailProps {
  onClose: () => void;
}

export default function EmailForm({ onClose }: EmailProps) {
  const form = useRef<HTMLFormElement>(null);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        form.current?.reset();
        alert("메일이 성공적으로 전송됐습니다.");
        onClose();
      })
      .catch(() => {
        alert("메일 전송 실패:");
      });
  };
  return (
    <div className="flex flex-col w-[90%] h-[80%] max-w-[800px] ">
      <form
        ref={form}
        onSubmit={onSubmit}
        className="flex gap-5 flex-col w-[90%] mx-auto"
      >
        <label className="flex flex-col gap-1">
          <p className="text-orange-500">Title</p>
          <input
            type="text"
            name="name"
            required
            className="border py-1 px-1.5 rounded-sm focus:outline-none border-gray-100"
          />
        </label>
        <label className="flex flex-col gap-1">
          <p className="text-orange-500">Your Email</p>
          <input
            type="email"
            name="email"
            required
            className="border py-1 px-1.5 rounded-sm focus:outline-none border-gray-100"
          />
        </label>
        <label className="flex flex-col gap-1 ">
          <p className="text-orange-500">Message</p>
          <textarea
            name="message"
            required
            className="border sm:h-70 3xl:h-90 h-50  py-1 px-1.5 rounded-sm focus:outline-none border-gray-100"
          />
        </label>
        <div className="flex items-center justify-center text-orange-500 border h-10 cursor-pointer">
          <button type="submit" className="cursor-pointer">
            보내기
          </button>
        </div>
      </form>
    </div>
  );
}
