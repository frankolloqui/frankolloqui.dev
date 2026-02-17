"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useState } from "react";

export default function LetsChat() {
  const [isHovered, setIsHovered] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setError("Please enter a valid email address");
      setLoading(false);
      return;
    }

    if (!formState.name.trim() || !formState.message.trim()) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    try {
      // Send email via API
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
      console.log("Contact form error:", err);
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl focus:ring-2 focus:ring-accent-purple/50 focus:border-accent-purple/50 outline-none transition-all duration-300 disabled:opacity-50 placeholder:text-gray-500 hover:border-white/15";

  return (
    <div className="relative z-10">
      <Navbar />
      <div className="min-h-screen text-white py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-3 gradient-text">
            Let&apos;s Chat
          </h1>
          <p className="text-custom-text text-lg mb-16">
            Got a project in mind? Let&apos;s make it happen.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="glass rounded-2xl p-8 transition-all duration-300 hover:border-white/15"
            >
              <form className="space-y-5" onSubmit={handleSubmit}>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-sm"
                  >
                    ✓ Message sent successfully! I&apos;ll get back to you soon.
                  </motion.div>
                )}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm"
                  >
                    ✕ {error}
                  </motion.div>
                )}
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    disabled={loading}
                    className={inputClass}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    disabled={loading}
                    className={inputClass}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    disabled={loading}
                    className={`${inputClass} h-32 resize-none`}
                    placeholder="What's on your mind?"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-6 rounded-xl font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20"
                  style={{
                    background: "linear-gradient(135deg, #7C3AED, #EC4899)",
                  }}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>

            <motion.div
              className="glass rounded-2xl p-8 flex flex-col justify-center transition-all duration-300 hover:border-white/15"
              whileHover={{ scale: 1.01 }}
            >
              <div
                className="relative cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <motion.div
                  animate={{ rotate: isHovered ? 360 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-24 h-24 mx-auto mb-8"
                >
                  <div
                    className="w-full h-full rounded-full"
                    style={{
                      background: "linear-gradient(135deg, #7C3AED, #EC4899)",
                      boxShadow: "0 0 40px rgba(124, 58, 237, 0.3), 0 0 80px rgba(236, 72, 153, 0.15)",
                    }}
                  />
                </motion.div>
                <h2 className="text-2xl font-bold mb-4">
                  Let&apos;s Create Something Amazing
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  Have an idea? Want to collaborate? Or just want to say hi?
                  I&apos;m always excited to connect with fellow creators and
                  innovators.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <svg
                      className="w-5 h-5 text-accent-purple"
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
                    <span>olloqui.frank@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <svg
                      className="w-5 h-5 text-accent-purple"
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
