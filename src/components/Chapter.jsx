import React from "react";
import { chapter1Section } from "./content";
import { chapter2Section } from "./content";
import Gallery from "./Gallery";
  
  export default function Chapter({ chapter }) {
  
    return (
        <div className="text-center">

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
         {chapter === "chapter2" && (
         <div className="p-3 max-w-xl mx-auto">
         {chapter2Section().map((section, index) => (
            <div key={index} className="">
              <ul className="list-disc pl-6">
                <li className="whitespace-pre-line text-justify">{section.content}</li>
              </ul>
            </div>
            ))}
          </div>
        )}

                                    {/* CHAPTER 3 */}

        {chapter === "chapter3" && (
            <Gallery/>
        )}

                                    {/* CHAPTER 4 */}

        {chapter === "chapter4" && (
          <div className="">
            {/* CHAPTER 3 COMPONENT */}
          </div>
        )}

                                    {/* CHAPTER 5 */}

        {chapter === "chapter5" && (
          <div className="">
            <h1></h1>
            {/* CHAPTER 3 COMPONENT */}
            {chapter6Section}
          </div>
        )}



      </div>
    );
  }
  