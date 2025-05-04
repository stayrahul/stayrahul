'use client';

import { Button } from "@/components/ui/moving-borders";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";

const stack = [
  { name: "React", icon: <FaReact className="text-sky-400 text-3xl" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-3xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 text-3xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white text-3xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-3xl" /> },
 
  { name: "GitHub", icon: <FaGithub className="text-gray-800 dark:text-white text-3xl" /> },
 
];

const BuiltWith = () => {
  const duration = Math.floor(Math.random() * 10000 + 10000); // same as DevStats

  return (
    <section id="builtwith" className="py-12 sm:py-16 bg-transparent">
      <h2 className="heading text-center text-base sm:text-lg md:text-xl">
        <span className="text-purple">Built</span> With
      </h2>

      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {stack.map((tech, index) => (
          <Button
            key={index}
            borderRadius="1.25rem"
            duration={duration}
            className="w-[180px] h-[120px] flex flex-col items-center justify-center p-3 bg-white/5 backdrop-blur-md text-white shadow-md hover:scale-105 hover:shadow-lg transition-all"
          >
            {tech.icon}
            <span className="mt-2 text-sm font-semibold">{tech.name}</span>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default BuiltWith;
