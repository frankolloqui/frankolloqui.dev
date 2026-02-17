import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photography | Frank Olloqui",
  description: "Visual moments captured through the lens - photography portfolio",
};

export default function PhotographyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
