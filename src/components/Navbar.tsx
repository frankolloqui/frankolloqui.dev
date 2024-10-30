// components/Header.tsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

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
        <Image src="/home.svg" alt="Vercel logomark" width={20} height={20} />
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
            <div className="md:hidden">📰</div>
          </Link>
          <Link
            href="/projects"
            className="flex items-center space-x-2"
            title="Projects"
          >
            <span className="hidden md:block">Projects</span>
            <div className="md:hidden">💡</div>
          </Link>
          <Link
            href="/talks"
            className="flex items-center space-x-2 hidden md:inline-flex"
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
            <div className="md:hidden">❤️</div>
          </Link>
          <Link href="/podcasts" className="hidden md:block" title="Podcasts">
            🎙️
          </Link>
          <Link href="/demos" title="Demos">
            📸
          </Link>
          <Link href="/chat" title="Let's Chat">
            💬
          </Link>
          <a
            href="https://twitter.com/antfu7"
            target="_blank"
            title="Twitter"
            className="hidden md:block"
          >
            🐦
          </a>
          <a
            href="https://github.com/antfu"
            target="_blank"
            title="GitHub"
            className="hidden md:block"
          >
            🐱
          </a>
        </div>
      </nav>
    </header>
  );
}
