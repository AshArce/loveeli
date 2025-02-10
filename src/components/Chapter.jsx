import { chapterContents } from "./content";
  
  export default function Chapter({ chapter }) {
    const content = chapterContents[chapter] || { title: "Not Found", text: "Chapter does not exist." };
  
    return (
        <div className="text-center">
        <h1 className="text-3xl font-bold">{content.title}</h1>
        <p className="text-xl mt-2">{content.text}</p>
        

        {/* Check if this is chapter4 */}
        {chapter === "chapter3" && (
          <div className="mt-6">
            {/* Add Image for Chapter 4 */}
            <img src="#" alt="Chapter 3 Image" className="mx-auto" />
          </div>
        )}

        {/* Check if this is chapter4 */}
        {chapter === "chapter4" && (
          <div className="mt-6">
            {/* Add Image for Chapter 4 */}
            <img src="#" alt="Chapter 4 Image" className="mx-auto" />
  
            {/* Add Button for Chapter 4 */}
            <button className="mt-4 px-6 py-2 bg-customPinkButton text-white rounded-lg">
              Chapter 4 Action
            </button>
          </div>
        )}

      </div>
    );
  }
  