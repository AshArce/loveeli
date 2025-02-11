import { Playfair_Display } from "next/font/google";
import "./globals.css";
import React from "react";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Eli Effect",
  description: "How you stole my heart.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
