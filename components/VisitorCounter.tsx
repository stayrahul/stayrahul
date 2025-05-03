'use client';

import React, { useEffect, useState, useRef } from 'react';
import CountUp from 'react-countup';
import { Button } from '@/components/ui/moving-borders';
import { motion } from 'framer-motion';

const VisitorCounter = () => {
  const [visits, setVisits] = useState<number>(0);
  const runOnce = useRef(false);

  useEffect(() => {
    if (runOnce.current) return;       // in Strict Mode, prevent double-run
    runOnce.current = true;

    const stored = localStorage.getItem('visitCount');
    const prev = stored ? parseInt(stored, 10) : 0;
    const next = prev + 1;
    localStorage.setItem('visitCount', next.toString());
    setVisits(next);
  }, []);

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-900 via-black to-indigo-900 text-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
        🌍 <span className="text-purple-300">Visitors</span> on this Site
      </h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex justify-center"
      >
        <Button
          borderRadius="1.5rem"
          className="flex flex-col items-center justify-center px-10 py-8 bg-white/10 backdrop-blur-xl shadow-2xl text-white w-[300px] sm:w-[350px]"
          duration={14000}
        >
          <div className="text-5xl sm:text-6xl font-extrabold text-yellow-300 drop-shadow">
            <CountUp end={visits} duration={2.5} />
          </div>
          <p className="text-sm sm:text-base mt-4 text-gray-300 font-medium text-center">
            Amazing people like you have visited! 💜
          </p>
        </Button>
      </motion.div>
    </section>
  );
};

export default VisitorCounter;
