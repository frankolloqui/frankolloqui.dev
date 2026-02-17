import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Frank Olloqui",
  description: "Showcasing creative web development projects and technical innovations",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
