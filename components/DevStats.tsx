'use client';

import React from "react";
import { Button } from "@/components/ui/moving-borders";

const DevStats = () => {
  const duration = Math.floor(Math.random() * 10000 + 10000);

  return (
    <section id="devstats" className="py-12 sm:py-16 bg-transparent">
      <h2 className="heading text-center text-base sm:text-lg md:text-xl">
        <span className="text-purple">Dev</span> Stats
      </h2>

      <div className="flex flex-col items-center gap-8 mt-8">
        <div className="flex justify-center gap-8 flex-wrap">

          {/* GitHub Stats */}
          <Button
            borderRadius="1.25rem"
            duration={duration}
            className="flex flex-col items-center justify-center w-[300px] p-4 bg-white/5 backdrop-blur-md text-white shadow-md hover:scale-105 hover:shadow-lg transition-all"
          >
            <img
              src="https://github-readme-stats.vercel.app/api?username=stayrahul&show_icons=true&theme=radical&hide_title=true"
              alt="GitHub Stats"
              className="rounded-lg"
            />
          </Button>

          {/* GitHub Streak */}
          <Button
            borderRadius="1.25rem"
            duration={duration}
            className="flex flex-col items-center justify-center w-[300px] p-4 bg-white/5 backdrop-blur-md text-white shadow-md hover:scale-105 hover:shadow-lg transition-all"
          >
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=stayrahul&theme=radical&hide_border=true"
              alt="GitHub Streak"
              className="rounded-lg"
            />
          </Button>

          {/* Top Languages */}
          <Button
            borderRadius="1.25rem"
            duration={duration}
            className="flex flex-col items-center justify-center w-[300px] p-4 bg-white/5 backdrop-blur-md text-white shadow-md hover:scale-105 hover:shadow-lg transition-all"
          >
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=stayrahul&layout=compact&theme=radical&hide_title=true"
              alt="Top Languages"
              className="rounded-lg"
            />
          </Button>

        </div>
      </div>
    </section>
  );
};

export default DevStats;
