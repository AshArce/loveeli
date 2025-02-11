import { chapterContents } from "./content";
import React from "react";

export default function Title({ chapter }) { 
  const content = chapterContents[chapter] || { title: "Not Found", text: "Chapter does not exist." };

  return (
    <div>
      <h1 className="text-3xl font-bold">{content.title}</h1>
      <p className="text-xl mt-2">{content.text}</p>
    </div>
  );
}
