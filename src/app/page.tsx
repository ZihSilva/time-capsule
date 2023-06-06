// import Image from 'next/image'

// import { start } from "repl";
import { User } from "lucide-react";

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left */}
      <div className="bg-[url(.../assets/bg-stars.svg) border-white-10 relative flex flex-col items-start justify-between overflow-hidden border-r bg-cover px-28 py-16">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
        {/* Stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

        <a
          href=""
          className="flex items-center gap-3 text-left hover:text-gray-50"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400"></div>
          <User className=" h-5 w-5 text-gray-500" />
          <p className="max-w-[140px] text-sm leading-snug">
            <span className="underline">Create an account</span> and save your
            memories!
          </p>
        </a>
      </div>

      {/* Right */}
      <div className="bg-[url(.../assets/bg-stars.svg) flex flex-col bg-cover p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            You have not recorded any memories yet, start {""}
            <a href="" className="underline hover:text-gray-50">
              creating now
            </a>
            !
          </p>
        </div>
      </div>
    </main>
  );
}
