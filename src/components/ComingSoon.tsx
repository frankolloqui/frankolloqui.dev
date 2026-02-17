import Link from "next/link";

interface ComingSoonProps {
  title: string;
  description: string;
}

export default function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white p-4">
      <div className="max-w-3xl w-full text-center space-y-8">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-2">
            {title}
          </h1>
          <p className="text-lg text-custom-text">Coming Soon</p>
        </div>

        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
          {description}
        </p>

        <div className="mt-10">
          <div className="relative w-full h-1 bg-gray-700 rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-2/3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            Development in progress<span className="animate-ellipsis"></span>
          </p>
        </div>

        <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-medium hover:opacity-90 transition duration-300"
          >
            Return Home
          </Link>
          <Link
            href="/chat"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-300 font-medium"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
