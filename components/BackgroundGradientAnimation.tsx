import { useState, useEffect, useRef } from "react";

export const BackgroundGradientAnimation = ({
  children,
  className,
  interactive = true,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);

  const interactiveRef = useRef<HTMLDivElement>(null);

  // Switch mode (dark or light)
  const toggleMode = () => setIsDarkMode((prev) => !prev);

  // Set CSS variables based on the mode (dark or light)
  useEffect(() => {
    if (typeof window !== "undefined") {
      // This ensures that the code only runs on the client side
      const mode = isDarkMode ? "dark" : "light";
      document.body.classList.toggle("dark", isDarkMode);

      // Set custom variables for light/dark mode
      document.body.style.setProperty(
        "--gradient-background-start",
        isDarkMode ? "rgb(108, 0, 162)" : "rgb(0, 122, 255)"
      );
      document.body.style.setProperty(
        "--gradient-background-end",
        isDarkMode ? "rgb(0, 17, 82)" : "rgb(255, 253, 253)"
      );
      document.body.style.setProperty(
        "--pointer-color",
        isDarkMode ? "140, 100, 255" : "255, 100, 100"
      );
    }
  }, [isDarkMode]);

  // Smooth pointer animation
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

  return (
    <div className={containerClassName}>
      {/* Toggle Button */}
      <button
        onClick={toggleMode}
        className="absolute top-4 right-4 p-2 bg-gray-800 text-white rounded-full z-10"
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>

      {/* Gradient Background with Animation */}
      <div
        className={`absolute inset-0 overflow-hidden bg-gradient-to-br ${
          isDarkMode ? "from-purple-800 to-blue-900" : "from-blue-200 to-yellow-200"
        }`}
      >
        {/* Organic Blob Animation */}
        <svg className="hidden">
          <defs>
            <filter id="organicBlob">
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

        <div
          onMouseMove={interactive ? handleMouseMove : undefined}
          className="h-full w-full"
        >
          <div
            className="absolute h-[60vh] w-[60vh] bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-80 animate-float1"
            style={{ filter: "url(#organicBlob)" }}
          />
          <div
            className="absolute h-[50vh] w-[50vh] bg-gradient-to-r from-yellow-400 to-red-500 rounded-full opacity-70 animate-float2"
            style={{ filter: "url(#organicBlob)" }}
          />
          {/* Pointer blob */}
          {interactive && (
            <div
              ref={interactiveRef}
              className="absolute h-[30vh] w-[30vh] bg-gradient-to-r from-pink-400 to-pink-600 rounded-full opacity-60"
              style={{ filter: "url(#organicBlob)" }}
            />
          )}
        </div>
      </div>

      {/* Children content */}
      <div className={className}>{children}</div>
    </div>
  );
};
