"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ComingSoonProps {
  title: string;
  description: string;
}

export default function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white p-4 relative overflow-hidden">
      {/* Floating decorative orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-72 h-72 rounded-full bg-accent-purple/10 blur-[100px]"
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "10%", right: "15%" }}
        />
        <motion.div
          className="absolute w-60 h-60 rounded-full bg-accent-pink/10 blur-[100px]"
          animate={{
            x: [0, -40, 30, 0],
            y: [0, 30, -40, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          style={{ bottom: "20%", left: "10%" }}
        />
      </div>

      <motion.div
        className="max-w-3xl w-full text-center space-y-8 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-3 gradient-text">
            {title}
          </h1>
          <p className="text-lg text-custom-text font-light">Coming Soon</p>
        </div>

        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        <div className="mt-10">
          <div className="relative w-full max-w-md mx-auto h-1 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full rounded-full"
              style={{
                background: "linear-gradient(90deg, #7C3AED, #EC4899, #3B82F6)",
                backgroundSize: "200% 100%",
              }}
              initial={{ width: "0%" }}
              animate={{ width: "66%" }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
            />
          </div>
          <p className="mt-4 text-sm text-custom-text">
            Development in progress<span className="animate-ellipsis"></span>
          </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-purple-500/20"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #EC4899)",
            }}
          >
            Return Home
          </Link>
          <Link
            href="/chat"
            className="px-6 py-3 rounded-xl font-medium transition-all duration-300 glass glass-hover hover:scale-[1.03]"
          >
            Get in Touch
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
