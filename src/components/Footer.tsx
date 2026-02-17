import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full mt-auto relative z-10">
      {/* Gradient separator */}
      <div className="gradient-separator" />

      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-custom-text text-sm">
            © {new Date().getFullYear()} Frank Olloqui
          </div>
          <nav className="flex items-center gap-4" aria-label="Footer links">
            <a
              href="https://github.com/frankolloqui/frankolloqui.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-custom-text hover:text-white text-sm transition-all duration-200 group"
              aria-label="View source code on GitHub"
            >
              <Github className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              <span>Source Code</span>
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
