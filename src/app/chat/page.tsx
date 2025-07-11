"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useState } from "react";

export default function LetsChat() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen  text-white py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-6xl font-bold mb-8 bg-clip-text">
            Let&apos;s Chat
          </h1>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-xl"
            >
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-3 bg-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition h-32"
                    placeholder="What's on your mind?"
                  />
                </div>
                <button className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-medium hover:opacity-90 transition">
                  Send Message
                </button>
              </form>
            </motion.div>

            <motion.div
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-xl flex flex-col justify-center"
              whileHover={{ scale: 1.02 }}
            >
              <div
                className="relative cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <motion.div
                  animate={{ rotate: isHovered ? 360 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-24 h-24 mx-auto mb-6"
                >
                  <div className="w-full h-full bg-gradient-to-r from-purple-400 to-pink-600 rounded-full" />
                </motion.div>
                <h2 className="text-2xl font-bold mb-4">
                  Let&apos;s Create Something Amazing
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Have an idea? Want to collaborate? Or just want to say hi?
                  I&apos;m always excited to connect with fellow creators and
                  innovators.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>devolloqui@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>Portland, Oregon</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
