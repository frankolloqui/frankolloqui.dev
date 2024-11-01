// components/Header.tsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

import {
  Github,
  MessageCirclePlus,
  Podcast,
  Camera,
  Lightbulb,
  Heart,
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
        className="w-12 h-12 absolute xl:fixed m-5 select-none outline-none"
        passHref
      >
        <House className="w-6 h-6" />
      </Link>
      <button
        title="Scroll to top"
        className={`fixed right-3 bottom-3 w-10 h-10 rounded-full transition duration-300 z-100 print:hidden ${
          scroll > 300
            ? "opacity-30 hover:opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toTop}
      >
        <div className="text-lg font-bold">⬆</div>
      </button>
      <nav className="nav flex justify-between p-4">
        <div className="spacer" />
        <div className="right flex items-center gap-4 print:opacity-0">
          <Link
            href="/posts"
            className="flex items-center space-x-2"
            title="Blog"
          >
            <span className="hidden md:block">Blog</span>
            <div className="md:hidden">
              <NotebookText className="w-5 h-5" />
            </div>
          </Link>
          <Link
            href="/projects"
            className="flex items-center space-x-2"
            title="Projects"
          >
            <span className="hidden md:block">Projects</span>
            <div className="md:hidden">
              <Lightbulb className="w-5 h-5" />
            </div>
          </Link>
          <Link
            href="/talks"
            className="items-center space-x-2 hidden md:inline-flex"
            title="Talks"
          >
            <span>Talks</span>
          </Link>
          <Link
            href="/sponsors-list"
            className="flex items-center space-x-2"
            title="Sponsors"
          >
            <span className="hidden md:block">Sponsors</span>
            <div className="md:hidden">
              <Heart className="w-5 h-5" />
            </div>
          </Link>
          <Link href="/podcasts" className="hidden md:block" title="Podcasts">
            <Podcast className="w-5 h-5" />
          </Link>
          <Link href="/demos" title="Demos">
            <Camera className="w-5 h-5" />
          </Link>
          <Link href="/chat" title="Let's Chat">
            <MessageCirclePlus className="w-5 h-5" />
          </Link>
          <a
            href="https://twitter.com/idkfwank"
            target="_blank"
            title="Twitter"
            className="hidden md:block"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://github.com/frankolloqui"
            target="_blank"
            title="GitHub"
            className="hidden md:block"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </nav>
    </header>
  );
}
