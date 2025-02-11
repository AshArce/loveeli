import { chapterContents } from "./content";
import React from "react";

export default function Title({ chapter }) { 
  const content = chapterContents[chapter] || { title: "Not Found", text: "Chapter does not exist." };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center">{content.title}</h1>
      <p className="text-xl">{content.text}</p>
    </div>
  );
}
