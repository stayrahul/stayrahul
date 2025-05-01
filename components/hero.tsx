"use client";

import Image from "next/image";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <Spotlight className="-left-10 -top-40 h-screen md:-left-32 md:-top-20" fill="white" />
        <Spotlight className="left-full top-10 h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        <div className="absolute inset-0 bg-white bg-grid-black/[0.1] dark:bg-black-100 dark:bg-grid-white/[0.02]" />
        <div className="pointer-events-none absolute inset-0 bg-white/30 backdrop-blur-sm [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)] dark:bg-black-100" />
      </div>

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center justify-center text-center px-6"
      >
        
        {/* Profile Image */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
          whileHover={{ scale: 1.1 }}
          className="group relative mb-12 animate-float"  
        >
          <Image
            src="/profile.png"
            alt="Rahul Kushwaha"
            width={220}  
            height={220} 
            className="rounded-full border-4 border-blue-500 shadow-2xl transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-500 opacity-0 blur-lg transition duration-500 group-hover:opacity-70" />
        </motion.div>

        {/* Text Content */}
        <h2 className="mb-4 text-xs sm:text-sm md:text-base uppercase tracking-widest text-blue-400 font-semibold">
          Welcome to My World
        </h2>

        <TextGenerateEffect
          className="mb-5 text-3xl font-extrabold leading-tight tracking-wider text-center md:text-5xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-text-pop drop-shadow-[0_0_10px_rgba(99,102,241,0.7)]"
          words="Code-Create-Inspire"
        />

        <p className="mb-8 max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold text-xl md:text-3xl lg:text-4xl">
            Rahul Kushwaha
          </span>
          , a creative developer and ambitious student crafting beautiful digital experiences.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap justify-center gap-6">
          <a
            href="/Rahul-Kushwaha-CV.pdf"
            download
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-blue-500 px-6 py-3 text-blue-500 font-semibold transition-all duration-300 hover:bg-blue-500 hover:text-white hover:scale-110 shadow-md hover:shadow-xl"
          >
            Download CV
          </a>
        </div>

        {/* Bouncing Arrow */}
        <div className="mt-12 animate-bounce text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};
