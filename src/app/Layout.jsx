import { Playfair_Display } from "next/font/google";
import "./globals.css";
import React from "react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});


export const metadata = {
  title: "The Eli Effect",
  description: "How you stole my heart.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
