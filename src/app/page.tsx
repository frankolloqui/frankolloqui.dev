import Navbar from "@/components/Navbar";
// import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">FRANK OLLOQUI</h1>
        <p className="text-lg">this is a work in progress</p>
        <p className="text-lg">come back soon</p>
      </div>
    </div>
  );
}
