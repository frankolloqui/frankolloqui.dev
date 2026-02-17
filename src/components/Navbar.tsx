// components/Header.tsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

import {
  Github,
  MessageCirclePlus,
  Camera,
  Lightbulb,
  NotebookText,
  House,
} from "lucide-react";

export default function Navbar() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="header z-40 relative">
      <Link
        href="/"
        className="w-12 h-12 absolute xl:fixed m-5 select-none outline-none hover:opacity-80 transition-opacity"
        passHref
        aria-label="Home"
      >
        <House className="w-6 h-6" />
      </Link>
      <button
        title="Scroll to top"
        aria-label="Scroll to top"
        className={`fixed right-3 bottom-3 w-10 h-10 rounded-full transition duration-300 z-100 print:hidden ${
          scroll > 300
            ? "opacity-30 hover:opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toTop}
      >
        <div className="text-lg font-bold">⬆</div>
      </button>
      <nav className="nav flex justify-between p-4" aria-label="Main navigation">
        <div className="spacer" />
        <div className="right flex items-center gap-4 print:opacity-0">
          <Link href="/blog" className="flex items-center hover:opacity-80 transition-opacity" aria-label="Blog">
            <span className="hidden md:block text-custom-text">
              Blog
            </span>
            <div className="md:hidden">
              <NotebookText className="w-5 h-5 text-custom-text" />
            </div>
          </Link>
          <Link href="/projects" className="flex items-center hover:opacity-80 transition-opacity" aria-label="Projects">
            <span className="hidden md:block text-custom-text">
              Projects
            </span>
            <div className="md:hidden">
              <Lightbulb className="w-5 h-5 text-custom-text" />
            </div>
          </Link>
          <Link
            href="/photography"
            className="flex items-center hover:opacity-80 transition-opacity"
            aria-label="Photography"
          >
            <span className="hidden md:block text-custom-text">
              Photography
            </span>
            <div className="md:hidden">
              <Camera className="w-5 h-5 text-custom-text" />
            </div>
          </Link>
          <Link href="/chat" aria-label="Contact - Let's Chat" className="hover:opacity-80 transition-opacity">
            <MessageCirclePlus className="w-5 h-5 text-custom-text" />
          </Link>
          <a
            href="https://twitter.com/idkfwank"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hidden md:block hover:opacity-80 transition-opacity"
          >
            <svg
              className="w-5 h-5 text-custom-text"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://github.com/frankolloqui"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden md:block hover:opacity-80 transition-opacity"
          >
            <Github className="w-5 h-5 text-custom-text" />
          </a>
        </div>
      </nav>
    </header>
  );
}
