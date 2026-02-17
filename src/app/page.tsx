"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SocialLinks from "@/components/Social";
import TypingTitle from "@/components/TypingTitle";
import { motion } from "framer-motion";

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative z-10">
      <Navbar />
      <main className="flex-1 flex flex-col items-center px-4 sm:px-8 md:px-16">
        <motion.div
          className="max-w-2xl w-full mt-20 mb-20"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.header className="mb-16" variants={fadeUp}>
            <TypingTitle />
            <div className="flex items-center gap-3 mt-2">
              <p className="text-lg text-custom-text font-light">
                Software Engineer • Creating Impact Through Technology
              </p>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available
              </span>
            </div>
          </motion.header>

          <motion.section className="space-y-8 mb-12" variants={fadeUp}>
            <article>
              <p className="text-lg text-custom-text leading-relaxed">
                Software engineer with a passion for crafting creative, innovative
                solutions to complex challenges. Skilled in developing and
                refining web technologies to drive efficiency and impact.
                Committed to making a meaningful difference through technology and
                inspiring influence in the tech landscape.
              </p>
            </article>

            <article>
              <p className="text-lg text-custom-text leading-relaxed">
                Recently, I&apos;ve embarked on the incredible journey of
                fatherhood, embracing its joys while continuing to make progress
                on my projects and learning. Alongside this, I&apos;ve rekindled my
                passion for photography, capturing special moments as they come.
              </p>
            </article>
          </motion.section>

          {/* Gradient separator */}
          <motion.div className="gradient-separator my-10" variants={fadeUp} />

          <motion.div variants={fadeUp}>
            <SocialLinks />
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
