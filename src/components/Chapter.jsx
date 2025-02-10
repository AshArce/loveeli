import { chapterContents } from "./content";
import { chapter1Section } from "./content";
  
  export default function Chapter({ chapter }) {
    const content = chapterContents[chapter] || { title: "Not Found", text: "Chapter does not exist." };
  
    return (
        <div className="text-center">
        <h1 className="text-3xl font-bold">{content.title}</h1>
        <h4 className="text-xl">{content.text}</h4>

        {/*CHAPTER 1 */}
        {chapter === "chapter1" && (
  <div className="p-4 max-w-xl mx-auto">
    {chapter1Section().map((section, index) => (
      <div key={index} className="mb-4">
        <h3 className="font-semibold text-justify">{section.title}</h3>
        <ul className="list-disc pl-6">
          <li className="whitespace-pre-line text-justify">{section.content}</li>
        </ul>
      </div>
    ))}
  </div>
)}

        {/*CHAPTER 2 */}
        {chapter === "chapter1" && (
  <div className="p-4 max-w-xl mx-auto">
    {chapter1Section().map((section, index) => (
      <div key={index} className="mb-4">
        <h3 className="font-semibold text-justify">{section.title}</h3>
        <ul className="list-disc pl-6">
          <li className="whitespace-pre-line text-justify">{section.content}</li>
        </ul>
      </div>
    ))}
  </div>
)}


        {/* Check if this is chapter4 */}
        {chapter === "chapter3" && (
          <div className="">
            {/* CHAPTER 3 COMPONENT */}
          </div>
        )}

        {/* Check if this is chapter4 */}
        {chapter === "chapter4" && (
          <div className="">
           {/* CHAPTER 4 COMPONENT */}
          </div>
        )}

      </div>
    );
  }
  