import Link from "next/link";
import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-800 mt-auto">
      <div className="max-w-2xl mx-auto px-4 py-4">
        {" "}
        {/* Changed py-8 to py-4 */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          {" "}
          {/* Changed gap-4 to gap-2 */}
          <div className="text-custom-text text-sm">
            © {new Date().getFullYear()} Frank Olloqui. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/frankolloqui/frankolloqui.dev"
              target="_blank"
              className="text-custom-text hover:text-white transition-colors"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </Link>

            <Link
              href="https://github.com/frankolloqui/frankolloqui.dev"
              className="text-custom-text hover:text-white text-sm transition-colors"
            >
              Source Code
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
