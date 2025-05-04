// components/TypingHeader.tsx
"use client";

import React, { useState, useEffect } from "react";

export default function TypingHeader() {
  const [text, setText] = useState("Developer");

  useEffect(() => {
    const texts = ["Developer", "Designer", "Learner"];
    let index = 0;

    const interval = setInterval(() => {
      setText(texts[index]);
      index = (index + 1) % texts.length; // Cycle through the array
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <h1 className="text-center text-3xl sm:text-4xl font-bold text-purple-600">
      {text}
    </h1>
  );
}
