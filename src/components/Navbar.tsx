// components/Navbar.tsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Github,
  MessageCirclePlus,
  Camera,
  Lightbulb,
  NotebookText,
  House,
  ChevronUp,
} from "lucide-react";

export default function Navbar() {
  const [scroll, setScroll] = useState(0);
  const pathname = usePathname();

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

  const isActive = (path: string) => pathname === path;

  const navLinkClass = (path: string) =>
    `flex items-center hover:text-white transition-all duration-200 relative ${isActive(path)
      ? "text-white after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-accent-purple after:to-accent-pink after:rounded-full"
      : "text-custom-text"
    }`;

  return (
    <header className="header z-40 relative">
      {/* Scroll to top */}
      <button
        title="Scroll to top"
        aria-label="Scroll to top"
        className={`fixed right-4 bottom-4 w-10 h-10 rounded-full transition-all duration-300 z-50 print:hidden flex items-center justify-center glass ${scroll > 300
            ? "opacity-70 hover:opacity-100 hover:glow-sm translate-y-0"
            : "opacity-0 pointer-events-none translate-y-4"
          }`}
        onClick={toTop}
      >
        <ChevronUp className="w-4 h-4" />
      </button>

      {/* Glassmorphism navbar on scroll */}
      <nav
        className={`nav fixed top-0 left-0 right-0 z-40 flex justify-between items-center px-5 py-3 transition-all duration-500 ${scroll > 50
            ? "bg-[#050507]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20"
            : "bg-transparent border-b border-transparent"
          }`}
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex items-center justify-center w-9 h-9 rounded-lg text-custom-text hover:text-white hover:bg-white/[0.06] transition-all duration-200"
          aria-label="Home"
        >
          <House className="w-5 h-5" />
        </Link>
        <div className="right flex items-center gap-5 print:opacity-0">
          <Link href="/blog" className={navLinkClass("/blog")} aria-label="Blog">
            <span className="hidden md:block text-sm font-medium">Blog</span>
            <div className="md:hidden">
              <NotebookText className="w-5 h-5" />
            </div>
          </Link>
          <Link href="/projects" className={navLinkClass("/projects")} aria-label="Projects">
            <span className="hidden md:block text-sm font-medium">Projects</span>
            <div className="md:hidden">
              <Lightbulb className="w-5 h-5" />
            </div>
          </Link>
          <Link
            href="/photography"
            className={navLinkClass("/photography")}
            aria-label="Photography"
          >
            <span className="hidden md:block text-sm font-medium">Photography</span>
            <div className="md:hidden">
              <Camera className="w-5 h-5" />
            </div>
          </Link>

          {/* Separator */}
          <div className="hidden md:block w-px h-4 bg-white/10" />

          <Link href="/chat" aria-label="Contact - Let's Chat" className={navLinkClass("/chat")}>
            <MessageCirclePlus className="w-5 h-5" />
          </Link>
          <a
            href="https://twitter.com/idkfwank"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hidden md:block text-custom-text hover:text-white transition-colors duration-200"
          >
            <svg
              className="w-5 h-5"
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
            className="hidden md:block text-custom-text hover:text-white transition-colors duration-200"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </nav>
    </header>
  );
}
