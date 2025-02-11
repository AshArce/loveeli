"use client";

import React, { useState } from "react";
import Chapter from "@/components/Chapter";
import Navigation from "@/components/Navigation";
import Title from "@/components/Title";

export default function Page() {
  const [currentChapter, setCurrentChapter] = useState("chapter1"); // Initialize with chapter1

  // Handle Next and Previous Navigation
  const handleNavigation = (direction) => {
    const chapterOrder = ["chapter1", "chapter2", "chapter3", "chapter4", "chapter5"];
    const currentIndex = chapterOrder.indexOf(currentChapter);
    if (direction === "next" && currentIndex < chapterOrder.length - 1) {
      setCurrentChapter(chapterOrder[currentIndex + 1]);
    }
    if (direction === "back" && currentIndex > 0) {
      setCurrentChapter(chapterOrder[currentIndex - 1]);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      {/* Title Component */}
      <Title chapter={currentChapter}/>
      {/* Chapter Component */}
      <Chapter chapter={currentChapter} />

      {/* Navigation Component */}
      <Navigation
        onBack={() => handleNavigation("back")}
        onNext={() => handleNavigation("next")}
      />
    </main>
  );
}
