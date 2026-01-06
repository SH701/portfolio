"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FadeDown } from "@/lib/motion";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

const headerVariants = {
  on: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
export default function Header() {
  const [isHide, setIsHide] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      const path = sectionId === "top" ? "/" : `/${sectionId}`;
      router.push(path, { scroll: false });
    }
    setOpen(false);
  };

  useEffect(() => {
    let lateY = window.scrollY;
    const onscroll = () => {
      const diff = lateY - window.scrollY;
      setIsHide(diff < 0);
      lateY = window.scrollY;
    };
    window.addEventListener("scroll", onscroll);
    return () => window.removeEventListener("scroll", onscroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-30 w-full left-0 sm:px-10 sm:pt-3
        backdrop-blur-md transition-transform duration-300 ${
          isHide ? "-translate-y-full" : "translate-y-0"
        }`}
    >
      <nav className="flex flex-row items-center justify-between">
        <div className="ml-4 mt-2">
          <Link href="/" onClick={(e) => handleNavClick(e, "top")}>
            <Image src="/favicon.ico" alt="logo" width={60} height={60} />
          </Link>
        </div>

        <motion.ul
          initial="init"
          animate="on"
          variants={headerVariants}
          className="hidden lg:flex ml-auto sm:px-7 px-3 py-5 items-end justify-end gap-5 lg:text-lg sm:text-sm text-xs"
        >
          {["About", "Skills", "Projects", "Contact"].map((item, i) => (
            <motion.li key={item} variants={FadeDown}>
              <Link
                href={`/${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, item.toLowerCase())}
                className="flex flex-row sm:gap-2 gap-1"
              >
                <p className="text-teal-300">{String(i + 1).padStart(2, "0")}.</p>
                <p className="hover:text-teal-300 transition-colors duration-300">
                  {item}
                </p>
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden mr-4 p-2 cursor-pointer"
          aria-label="Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className=" w-screen  backdrop-blur-md pt-5 lg:hidden overflow-hidden "
          >
            <ul className="flex flex-col gap-4 text-lg">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    onClick={(e) => handleNavClick(e, item.toLowerCase())}
                  >
                    <p className="pl-5 font-bold hover:text-teal-300 transition-colors duration-300">
                      {item}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
