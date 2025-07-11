"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div>
        <Navbar />
    <div className="min-h-screen flex flex-col items-center justify-center text-white p-4">
      <div className="max-w-3xl w-full text-center space-y-8">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          <span className="block">Blog</span>
          <span className="block mt-2 text-pink-400">Coming Soon</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
          Im currently working on something awesome. My awesome amazing blog will be available here shortly to laydown wisdom.
        </p>
        
        <div className="mt-10">
          <div className="relative w-full h-2 bg-gray-700 rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-2/3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
          </div>
          <p className="mt-4 text-gray-400">Development in progress...</p>
        </div>
        
        <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/" className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-medium hover:opacity-90 transition duration-300 font-medium">
            Return Home
          </Link>
          <Link href="mailto:contact@example.com" className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-300 font-medium">
            Contact Me
          </Link>
        </div>
      </div>
      
      
    </div>
    <Footer />
    </div>
  );
}