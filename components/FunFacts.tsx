import React from 'react';
import { FaBookOpen, FaGuitar, FaGlobeAmericas } from 'react-icons/fa';
import { SiPubg } from 'react-icons/si';
import { Button } from '@/components/ui/moving-borders';

const FunFacts: React.FC = () => {
  return (
    <section className="fun-facts py-10 px-5 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
      <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
        🎉 Fun <span className="text-yellow-300">Facts</span> About Me!
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <Button
          borderRadius="1rem"
          className="flex-1 border-neutral-200 text-white dark:border-slate-800"
          duration={12000}
        >
          <div className="flex items-center gap-3 p-4">
            <SiPubg className="text-xl text-yellow-400" />
            <span className="text-sm sm:text-base font-medium">I am a passionate PUBG Mobile player.</span>
          </div>
        </Button>

        <Button
          borderRadius="1rem"
          className="flex-1 border-neutral-200 text-white dark:border-slate-800"
          duration={12000}
        >
          <div className="flex items-center gap-3 p-4">
            <FaBookOpen className="text-xl text-green-300" />
            <span className="text-sm sm:text-base font-medium">I love reading about technology and AI.</span>
          </div>
        </Button>

        <Button
          borderRadius="1rem"
          className="flex-1 border-neutral-200 text-white dark:border-slate-800"
          duration={12000}
        >
          <div className="flex items-center gap-3 p-4">
            <FaGuitar className="text-xl text-pink-400" />
            <span className="text-sm sm:text-base font-medium">I play the guitar in my free time.</span>
          </div>
        </Button>

        <Button
          borderRadius="1rem"
          className="flex-1 border-neutral-200 text-white dark:border-slate-800"
          duration={12000}
        >
          <div className="flex items-center gap-3 p-4">
            <FaGlobeAmericas className="text-xl text-blue-300" />
            <span className="text-sm sm:text-base font-medium">
              I enjoy traveling and experiencing new cultures.
            </span>
          </div>
        </Button>
      </div>
    </section>
  );
};

export default FunFacts;
