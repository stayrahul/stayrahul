"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const BackgroundGradientAnimation = ({
  gradientBackgroundStart = "rgb(108, 0, 162)",
  gradientBackgroundEnd = "rgb(0, 17, 82)",
  firstColor = "18, 113, 255",
  secondColor = "221, 74, 255",
  thirdColor = "100, 220, 255",
  fourthColor = "200, 50, 50",
  fifthColor = "180, 180, 50",
  pointerColor = "140, 100, 255",
  size = "80%",
  blendingValue = "color-dodge",
  children,
  className,
  interactive = true,
  containerClassName,
}: {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null);
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);

  // Set CSS variables
  useEffect(() => {
    const setVar = (key: string, value: string) =>
      document.body.style.setProperty(key, value);
    setVar("--gradient-background-start", gradientBackgroundStart);
    setVar("--gradient-background-end", gradientBackgroundEnd);
    setVar("--first-color", firstColor);
    setVar("--second-color", secondColor);
    setVar("--third-color", thirdColor);
    setVar("--fourth-color", fourthColor);
    setVar("--fifth-color", fifthColor);
    setVar("--pointer-color", pointerColor);
    setVar("--size", size);
    setVar("--blending-value", blendingValue);
  }, [
    blendingValue,
    firstColor,
    secondColor,
    thirdColor,
    fourthColor,
    fifthColor,
    gradientBackgroundStart,
    gradientBackgroundEnd,
    pointerColor,
    size,
  ]);

  // Animate pointer smoothly
  useEffect(() => {
    let rafId: number;
    const animate = () => {
      setCurX((prev) => prev + (tgX - prev) / 12);
      setCurY((prev) => prev + (tgY - prev) / 12);
      if (interactiveRef.current) {
        interactiveRef.current.style.transform = `translate(${Math.round(
          curX
        )}px, ${Math.round(curY)}px)`;
      }
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [curX, curY, tgX, tgY]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setTgX(event.clientX - rect.left);
    setTgY(event.clientY - rect.top);
  };

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden bg-[linear-gradient(135deg,var(--gradient-background-start),var(--gradient-background-end))]",
        containerClassName
      )}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div className={cn("", className)}>{children}</div>

      <div
        onMouseMove={interactive ? handleMouseMove : undefined}
        className={cn(
          "gradients-container h-full w-full blur-lg pointer-events-none",
          isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
        )}
      >
        {[
          "--first-color",
          "--second-color",
          "--third-color",
          "--fourth-color",
          "--fifth-color",
        ].map((colorVar, idx) => (
          <div
            key={colorVar}
            className={cn(
              "absolute",
              "h-[var(--size)] w-[var(--size)]",
              `[background:radial-gradient(circle,_rgba(var(${colorVar}),_0.8)_0,_rgba(var(${colorVar}),_0)_50%)]`,
              `[mix-blend-mode:var(--blending-value)]`,
              "opacity-80",
              "rounded-full",
              `animate-float${idx + 1}`,
              idx % 2 === 0
                ? "left-[calc(50%-200px)] top-[calc(50%-200px)]"
                : "left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)]"
            )}
          />
        ))}

        {/* Pointer blob */}
        {interactive && (
          <div
            ref={interactiveRef}
            className={cn(
              "absolute h-[30vh] w-[30vh]",
              "[background:radial-gradient(circle,_rgba(var(--pointer-color),0.9)_0,_rgba(var(--pointer-color),0)_70%)]",
              "[mix-blend-mode:var(--blending-value)]",
              "opacity-60 rounded-full"
            )}
          />
        )}
      </div>
    </div>
  );
};
