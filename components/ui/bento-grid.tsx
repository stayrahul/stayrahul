"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";

import { links } from "@/config";
import { techStack } from "@/data";
import animationData from "@/data/confetti.json";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { MagicButton } from "./magic-button";
import { GridGlobe } from "../grid-globe";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid grid-cols-2 md:grid-cols-1 lg:grid-cols-5 gap-4 w-full",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  id?: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(links.ownerEmail);
    setCopied(true);
  };

  useEffect(() => {
    if (!copied) return;
    const timeout = setTimeout(() => setCopied(false), 3500);
    return () => clearTimeout(timeout);
  }, [copied]);

  return (
    <div
      className={cn(
        "group/bento relative row-span-1 flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.1] shadow-input transition duration-200 hover:shadow-lg dark:shadow-none",
        "p-3 md:p-4 lg:p-6 min-h-[10vh] lg:min-h-[25vh] text-xs md:text-sm lg:text-base",
        className
      )}
      style={{
        background: "linear-gradient(90deg, #04071d 0%, #0c0e23 100%)",
      }}
    >
      <div
        className={cn(
          "h-full",
          id === 6 && "flex flex-col justify-center items-center text-center gap-4"
        )}
      >
        {/* Main image */}
        {img && (
          <Image
            width={689}
            height={541}
            src={img}
            alt={img}
            className={cn("absolute object-cover object-full", imgClassName)}
          />
        )}

        {/* Spare image */}
        {spareImg && (
          <div className={cn("absolute right-0 -mb-5", id === 5 && "w-full opacity-80")}>
            <Image
              width={208}
              height={96}
              src={spareImg}
              alt={spareImg}
              className="h-full w-full object-cover object-center"
            />
          </div>
        )}

        {/* Background animation for id 6 */}
        {id === 6 && <BackgroundGradientAnimation />}

        <div
          className={cn(
            "relative flex flex-col transition duration-200 group-hover/bento:translate-x-1 gap-2 lg:gap-4",
            id === 6 && "items-center text-center w-full max-w-md",
            titleClassName
          )}
        >
          {/* Description */}
          {description && (
            <div className="z-10 text-[#c1c2d3] font-light">{description}</div>
          )}

          {/* Title */}
          <div className="z-10 font-bold text-sm lg:text-3xl">{title}</div>

          {/* GridGlobe for id 2 */}
          {id === 2 && <GridGlobe />}

          {/* Tech Stack for id 3 */}
          {id === 3 && (
            <div className="absolute -right-2 flex w-fit gap-1 lg:gap-3">
              <div className="flex flex-col gap-2 lg:gap-4">
                {techStack.stack1.map((item) => (
                  <span
                    key={item}
                    className="rounded bg-[#10132e] px-2 py-1 text-[10px] lg:text-sm opacity-70"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-2 lg:gap-4">
                {techStack.stack2.map((item) => (
                  <span
                    key={item}
                    className="rounded bg-[#10132e] px-2 py-1 text-[10px] lg:text-sm opacity-70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Email copy animation for id 6 */}
          {id === 6 && (
            <div className="group relative mt-3">
              <div className="pointer-events-none absolute -bottom-4 right-0">
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                  height={100}
                  width={100}
                />
              </div>

              <MagicButton
                title={copied ? "✅ Copied!" : "Copy my email 📧"}
                icon={
                  <span
                    className={cn(
                      "transition-transform duration-300",
                      copied && "scale-110 text-green-400"
                    )}
                  >
                    <IoCopyOutline />
                  </span>
                }

                
                otherClasses={cn(
                  "bg-gradient-to-r from-[#3a3f74] to-[#202442]",
                  "text-white/90 text-[11px] lg:text-sm px-4 py-1.5 rounded-md",
                  "hover:brightness-110 transition-all duration-200",
                  "border border-white/10 shadow-sm"
                )}
                handleClick={handleCopy}
                asChild
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
