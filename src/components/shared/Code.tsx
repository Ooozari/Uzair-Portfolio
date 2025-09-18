import React from 'react'

export default function Code() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white px-6 h-full">
      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
        Full-Stack Developer in Progress 🚀
      </h1>
      <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-8">
        I’m Uzair, building scalable web applications with React, Next.js, and MongoDB.
        Strong in front-end, expanding into full-stack with APIs, schemas, and authentication.
      </p>

      {/* Resume Button */}
      <a
        href="/resume.pdf"
        download
        className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-lg hover:opacity-90 transition"
      >
        Download Resume
      </a>

      {/* Glassy Code Ribbons */}
      <div className="absolute top-20 left-10 rotate-[-6deg]">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 px-4 py-2 rounded-xl font-mono text-sm text-green-400 shadow-lg">
          npm i uzair-portfolio
        </div>
      </div>

      <div className="absolute bottom-32 right-10 rotate-[8deg]">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 px-4 py-2 rounded-xl font-mono text-sm text-yellow-300 shadow-lg">
          console.log("Hello, I’m Uzair 👋");
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 rotate-[-2deg]">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 px-4 py-2 rounded-xl font-mono text-sm text-purple-300 shadow-lg">
          import Developer from "uzair";
        </div>
      </div>
    </section>
  );
}

