import React from "react";
import Image from "next/image";
import Contact from "./Contact";

export default function Hero() {
  return (
    <div
      className="relative min-h-screen h-full 
        bg-gradient-to-r from-indigo-900 to-purple-800 
        p-4 transition-colors duration-500 text-gray-100"
    >
      <h1 className="text-4xl font-bold text-center">
        Welcome to X&#39;s Portfolio
      </h1>
      <p className="text-center mt-4 text-sm sm:text-base md:text-lg">
        Computer Science student at Kasetsart University, passionate about
        backend and frontend development.
      </p>

      <div className="flex justify-center mt-8">
        <Image
          src="/fb-profile.jpg"
          alt="Profile"
          width={150}
          height={150}
          className="rounded-full border-4 border-white shadow-lg"
        />
      </div>

      <div className="mt-6 max-w-lg mx-auto text-sm sm:text-base ">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <ul className="space-y-2">
          <li className="flex items-center">
            <span className="mr-2">😄</span> My name is Prariyavit
            Tachakitmatetumrong.
          </li>
          <li className="flex items-center">
            <span className="mr-2">🌱</span> I am studying Computer Science at
            Kasetsart University.
          </li>
          <li className="flex items-center">
            <span className="mr-2">🌎</span> I live in Pathum Thani.
          </li>
          <li className="flex items-center">
            <span className="mr-2">💻</span> I am interested in backend and
            frontend development.
          </li>
        </ul>
      </div>

      <div className="mt-8 max-w-lg mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-2 justify-center text-sm sm:text-base">
          <span className="tag bg-blue-500 ">Golang</span>
          <span className="tag bg-black">Next.js</span>
          <span className="tag bg-blue-600 ">TypeScript</span>
          <span className="tag bg-purple-500 ">React</span>
          <span className="tag bg-green-500 ">Node.js</span>
          <span className="tag bg-red-500 ">Java</span>
          <span className="tag bg-lime-500 ">Spring Boot</span>
          <span className="tag bg-orange-500 ">MySQL</span>
          <span className="tag bg-blue-400 ">PostgreSQL</span>
          <span className="tag bg-blue-500 ">Docker</span>
        </div>
      </div>

      <section className="mt-1">
        <Contact />
      </section>
    </div>
  );
}
