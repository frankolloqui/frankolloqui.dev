import React from "react";
import { Github, Instagram, Linkedin, Twitch } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="mt-10">
      <h2 className="text-lg text-custom-text font-light mb-5">Find me on</h2>

      <div className="flex flex-wrap gap-4">
        <a
          href="https://github.com/frankolloqui"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub - Opens in new window"
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors hover:border-white/40"
        >
          <Github className="w-5 h-5" />
          <span>GitHub</span>
        </a>

        <a
          href="https://instagram.com/idkfwank"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram - Opens in new window"
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors hover:border-white/40"
        >
          <Instagram className="w-5 h-5" />
          <span>Instagram</span>
        </a>

        <a
          href="https://twitter.com/idkfwank"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter - Opens in new window"
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors hover:border-white/40"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <span>Twitter</span>
        </a>

        <a
          href="https://www.twitch.tv/softwarecode"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitch - Opens in new window"
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors hover:border-white/40"
        >
          <Twitch className="w-5 h-5" />
          <span>Twitch</span>
        </a>

        <a
          href="https://www.linkedin.com/in/frankolloqui/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn - Opens in new window"
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors hover:border-white/40"
        >
          <Linkedin className="w-5 h-5" strokeWidth={1.65} />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
