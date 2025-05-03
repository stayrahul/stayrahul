'use client'; // Important for client components

import Image from "next/image"; 
import { Button } from "@/components/ui/moving-borders"; 

export const DevicesSection = () => {
  return (
    <section id="devices" className="py-12 sm:py-16 bg-transparent">
      <h1 className="heading text-center text-base sm:text-lg md:text-xl">
        <span className="text-purple">My</span> Devices
      </h1>

      <div className="flex flex-col items-center gap-8 mt-8">
        <div className="flex justify-center gap-8 flex-wrap">

          {/* Device 1 */}
          <Button
            borderRadius="1.25rem"
            className="flex flex-col items-center justify-center w-[300px] p-4 bg-white/5 backdrop-blur-md text-white shadow-md hover:scale-105 hover:shadow-lg transition-all"
            duration={Math.floor(Math.random() * 10000 + 10000)}
          >
            <Image
              src="/mac.svg"
              alt="MacBook Air M2"
              width={240}
              height={150}
              className="rounded-lg"
            />
            <p className="text-center margin-top-5 mt-4 font-bold text-lg sm:text-xl">
              MacBook Air M2
            </p>
            <p className="text-center text-xs sm:text-sm text-gray-400 mt-2 max-w-xs">
              My primary work machine for coding and design.
            </p>
          </Button>

          {/* Device 2 */}
          <Button
            borderRadius="1.25rem"
            className="flex flex-col items-center justify-center w-[300px] p-4 bg-white/5 backdrop-blur-md text-white shadow-md hover:scale-105 hover:shadow-lg transition-all"
            duration={Math.floor(Math.random() * 10000 + 10000)}
          >
            <Image
              src="/phone.svg"
              alt="Realme GT Master Edition"
              width={200}
              height={110}
              className="rounded-lg"
            />
            <p className="text-center mt-4 font-bold text-lg sm:text-xl">
              Realme GT Master Edition
            </p>
            <p className="text-center text-xs sm:text-sm text-gray-400 mt-2 max-w-xs">
              My daily companion for staying connected on the go.
            </p>
          </Button>

        </div>
      </div>
    </section>
  );
};
