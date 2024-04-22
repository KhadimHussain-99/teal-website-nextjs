"use client";
import React from "react";
import useDarkMode from "@/hooks/useDarkMode";

const Loading = () => {
  const [isDark] = useDarkMode();
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <span className="loader"></span>
    </div>
  );
};

export default Loading;
