import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Let's Chat | Frank Olloqui",
  description: "Get in touch with me - contact form and direct messaging",
};

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
