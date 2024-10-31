import Navbar from "@/components/Navbar";
// import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="flex flex-col items-center  h-screen px-4 sm:px-8 md:px-16">
        <div className="max-w-2xl w-full mt-20">
          <h1 className="text-4xl font-bold mb-10">Frank Olloqui</h1>
          <p className="text-lg text-custom-text">
            Full-stack software engineer with a passion for crafting creative,
            innovative solutions to complex challenges. Skilled in developing
            and refining web technologies to drive efficiency and impact.
            Committed to making a meaningful difference through technology and
            inspiring influence in the tech landscape.
          </p>
        </div>
      </div>
    </div>
  );
}
