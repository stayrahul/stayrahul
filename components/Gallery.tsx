'use client';

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/moving-borders";


export const Gallery = () => {
  const images = [
    
    { src: "/image1.png" },
    { src: "/image2.png" },
    { src: "/image3.png" },
    { src: "/image4.png" },
    { src: "/image5.png" },
    { src: "/image6.png" },
    { src: "/image7.png" },
    { src: "/image8.png" },
    { src: "/image9.png" },
    { src: "/image10.png" },
    { src: "/image11.png" },
    { src: "/image12.png" },
  ];

  return (
    <section id="gallery" className="py-20 px-3 sm:px-6">
      <h1 className="text-4xl font-bold text-center text-white mb-10">
      My <span className="text-purple">Gallery</span>
      </h1>
      <div className="mx-auto max-w-[450px] grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-8 md:grid-cols-6 lg:max-w-[900px] lg:gap-3">

        {/* Adjust the grid layout based on screen size */}
        {images.map((image, index) => (
          <Button
            key={index}
            borderRadius="1.5rem"
            className="overflow-hidden border border-neutral-300 dark:border-slate-700 shadow-md hover:scale-105 transition-transform duration-300"
            duration={Math.floor(Math.random() * 10000 + 10000)}
          >
            <div className="relative w-full aspect-[4/5]">
              <Image
                src={image.src}
                alt={`Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};
