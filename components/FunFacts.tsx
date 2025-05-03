'use client';

import React from 'react';
import { FaBookOpen, FaGuitar, FaGlobeAmericas } from 'react-icons/fa';
import { SiPubg } from 'react-icons/si';
import { Button } from '@/components/ui/moving-borders';

const FunFacts: React.FC = () => {
  const duration = Math.floor(Math.random() * 10000 + 10000);

  return (
    <section id="funfacts" className="py-16 px-4 sm:px-8 bg-transparent">
      <h2 className="heading text-center text-base sm:text-lg md:text-xl">
        🎉 Fun <span className="text-purple">Facts</span> About Me
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 mt-10">
        <Button
          borderRadius="1.25rem"
          duration={duration}
          className="flex flex-col items-start p-6 bg-white/5 backdrop-blur-md text-white shadow-md hover:scale-105 transition-all"
        >
          <div className="flex items-center gap-4">
            <SiPubg className="text-2xl text-yellow-400" />
            <span className="text-sm sm:text-base font-medium">
              I’m a passionate PUBG Mobile player 🎮.
            </span>
          </div>
        </Button>

        <Button
          borderRadius="1.25rem"
          duration={duration}
          className="flex flex-col items-start p-6 bg-white/5 backdrop-blur-md text-white shadow-md hover:scale-105 transition-all"
        >
          <div className="flex items-center gap-4">
            <FaBookOpen className="text-2xl text-green-300" />
            <span className="text-sm sm:text-base font-medium">
              I love diving into books about AI and tech 📘.
            </span>
          </div>
        </Button>

        <Button
          borderRadius="1.25rem"
          duration={duration}
          className="flex flex-col items-start p-6 bg-white/5 backdrop-blur-md text-white shadow-md hover:scale-105 transition-all"
        >
          <div className="flex items-center gap-4">
            <FaGuitar className="text-2xl text-pink-400" />
            <span className="text-sm sm:text-base font-medium">
              I enjoy playing guitar during my chill time 🎸.
            </span>
          </div>
        </Button>

        <Button
          borderRadius="1.25rem"
          duration={duration}
          className="flex flex-col items-start p-6 bg-white/5 backdrop-blur-md text-white shadow-md hover:scale-105 transition-all"
        >
          <div className="flex items-center gap-4">
            <FaGlobeAmericas className="text-2xl text-blue-300" />
            <span className="text-sm sm:text-base font-medium">
              Exploring new places and cultures excites me 🌍.
            </span>
          </div>
        </Button>
      </div>
    </section>
  );
};

export default FunFacts;
