"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ComingSoon from "@/components/ComingSoon";

export default function ProjectsPage() {
  return (
    <div>
      <Navbar />
      <ComingSoon
        title="Projects"
        description="Showcasing creative web development projects and technical innovations. From full-stack applications to interactive experiences, my portfolio coming soon."
      />
      <Footer />
    </div>
  );
}