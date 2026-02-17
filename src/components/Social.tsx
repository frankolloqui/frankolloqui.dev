"use client";

import React from "react";
import { Github, Instagram, Linkedin, Twitch } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  {
    href: "https://github.com/frankolloqui",
    label: "GitHub",
    icon: <Github className="w-5 h-5" />,
    hoverColor: "hover:border-white/40 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]",
  },
  {
    href: "https://instagram.com/idkfwank",
    label: "Instagram",
    icon: <Instagram className="w-5 h-5" />,
    hoverColor: "hover:border-pink-500/40 hover:bg-pink-500/10 hover:shadow-[0_0_20px_rgba(236,72,153,0.15)]",
  },
  {
    href: "https://twitter.com/idkfwank",
    label: "Twitter",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    hoverColor: "hover:border-white/40 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]",
  },
  {
    href: "https://www.twitch.tv/softwarecode",
    label: "Twitch",
    icon: <Twitch className="w-5 h-5" />,
    hoverColor: "hover:border-purple-500/40 hover:bg-purple-500/10 hover:shadow-[0_0_20px_rgba(124,58,237,0.15)]",
  },
  {
    href: "https://www.linkedin.com/in/frankolloqui/",
    label: "LinkedIn",
    icon: <Linkedin className="w-5 h-5" strokeWidth={1.65} />,
    hoverColor: "hover:border-blue-500/40 hover:bg-blue-500/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]",
  },
];

const SocialLinks = () => {
  return (
    <div className="mt-6">
      <h2 className="text-sm uppercase tracking-widest text-custom-text font-medium mb-5">
        Find me on
      </h2>

      <div className="flex flex-wrap gap-3">
        {socials.map((social, i) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${social.label} - Opens in new window`}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.02] transition-all duration-300 ${social.hoverColor} hover:scale-[1.03]`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i, duration: 0.4, ease: "easeOut" }}
          >
            {social.icon}
            <span className="text-sm font-medium">{social.label}</span>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
