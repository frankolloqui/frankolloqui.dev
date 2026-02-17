"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ComingSoon from "@/components/ComingSoon";

export default function BlogPage() {
  return (
    <div>
      <Navbar />
      <ComingSoon
        title="Blog"
        description="Sharing insights on software engineering, web development, and technology breakthroughs. Technical articles and personal thoughts coming soon."
      />
      <Footer />
    </div>
  );
}