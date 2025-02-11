"use client"; // Add this line

import Link from "next/link";
import { motion } from "framer-motion"; // Ensure this import is correct

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Start invisible and slightly below
        animate={{ opacity: 1, y: 0 }} // Fade in and move up
        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
        className="flex flex-col items-center justify-center "
      >
        <h1 className="text-3xl font-bold">The Lorem Ipsum:</h1>
        <p className="text-xl ">Lorem ipsum dolor sit amet.</p>


      <Link href="/pages">
        <button className="bg-customPinkButton px-10 py-2 m-2 rounded-xl">
          Get Started
        </button>
      </Link>

      </motion.div>
    </main>
  );
}



