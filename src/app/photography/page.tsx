"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ComingSoon from "@/components/ComingSoon";

export default function PhotographyPage() {
  return (
    <div>
      <Navbar />
      <ComingSoon
        title="Photography"
        description="Visual moments captured through the lens. A collection of photographs showcasing creativity, nature, and special moments that inspire."
      />
      <Footer />
    </div>
  );
}