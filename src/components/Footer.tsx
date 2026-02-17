
import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-800 mt-auto">
      <div className="max-w-2xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-custom-text text-sm">
            © {new Date().getFullYear()} Frank Olloqui. All rights reserved.
          </div>
          <nav className="flex items-center gap-4" aria-label="Footer links">
            <a
              href="https://github.com/frankolloqui/frankolloqui.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-custom-text hover:text-white transition-colors hover:opacity-80"
              aria-label="View source code on GitHub"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://github.com/frankolloqui/frankolloqui.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-custom-text hover:text-white text-sm transition-colors hover:opacity-80"
            >
              Source Code
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
