import Image from "next/image";
import PineconeLogo from "../../../public/pinecone.svg";
import VercelLogo from "../../../public/vercel.svg";

export default function Header({ className }: { className?: string }) {
  return (
    <header
      className={`flex items-center justify-center text-gray-200 text-2xl ${className}`}
    >
      {/* <Image
        src={PineconeLogo}
        alt="pinecone-logo"
        width="230"
        height="50"
        className="ml-3"
      />{" "}
      <div className="text-4xl ml-3 mr-3">+</div>
      <Image
        src={VercelLogo}
        alt="vercel-logo"
        width="160"
        height="50"
        className="mr-3 mt-3"
      /> */}
      <div className="flex items-center">
        <div className="font-bold text-3xl bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-700 bg-clip-text text-transparent animate-gradient-x transition-all duration-300 hover:scale-105">
          Effective Learning
        </div>
        <div className="ml-2 px-3 py-1 bg-gradient-to-r from-blue-700 to-purple-800 rounded-md text-sm font-medium uppercase tracking-wider shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex items-center">
          <span className="mr-1">Platform</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      </div>
    </header>
  );
}
