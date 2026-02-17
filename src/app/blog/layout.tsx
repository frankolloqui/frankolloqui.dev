import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Frank Olloqui",
  description: "Insights on software engineering, web development, and technology",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
