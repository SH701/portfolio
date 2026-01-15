"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "../contact/contact.module.css";
export default function EmailForm() {
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
      })
      .catch(() => {
        alert("메일 전송 실패:");
      });
  };
  return (
    <div className="flex items-center justify-center md:flex-1">
      <div className="w-full max-w-lg">
        <form ref={form} onSubmit={onSubmit} className="flex gap-5 flex-col">
          <input
            type="email"
            name="email"
            required
            placeholder="Name"
            className="border py-2 px-3 rounded-sm focus:outline-none border-gray-100 w-full"
          />
          <input
            type="text"
            name="name"
            required
            placeholder="Title"
            className="border py-2 px-3 rounded-sm focus:outline-none border-gray-100 w-full"
          />
          <textarea
            name="message"
            required
            placeholder="Message"
            className="border h-48 py-2 px-3 rounded-sm focus:outline-none border-gray-100 w-full resize-none"
          />
          <button
            type="submit"
            className={`${styles.effect} cursor-pointer w-full text-orange-500 border h-10`}
          >
            보내기
          </button>
        </form>
      </div>
    </div>
  );
}
