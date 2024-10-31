import Navbar from "@/components/Navbar";
// import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
      </div>
    </div>
  );
}
