"use client";
import React, { useEffect, useState } from "react";
import { useScramble } from "use-scramble";
import { useInView } from "react-intersection-observer";
import Button from "./ui/Button";
import { motion } from "framer-motion";

function Landing() {
  const url = "./images/hero-image.jpg";
  const [isMounted, setIsMounted] = useState(false);

  const { ref, replay } = useScramble({
    text: "CODEWAR 2.0",
    speed: 0.2,
    characters: "abcefghijklmnopqrstuvwxyz",
  });

  const { ref: reff, replay: replays } = useScramble({
    text: "CODEWAR 2.0",
    speed: 0.2,
    characters: "abcefghijklmnopqrstuvwxyz",
  });

  const { ref: ref1, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (inView && isMounted) {
      replay();
      replays();
    }
  }, [inView, isMounted, replay, replays]);

  return (
    <div
      className="relative flex min-h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.85)), url(${url})`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -inset-[10%] bg-gradient-to-r from-purple-900 via-blue-900 to-cyan-900 rounded-full blur-3xl animate-slow-spin"></div>
        <div className="absolute inset-y-[30%] -inset-x-[10%] bg-gradient-to-r from-teal-900 to-indigo-900 rounded-full blur-3xl animate-slow-spin-reverse"></div>
      </div>

      {/* Main content */}
      <div
        ref={ref1}
        className="flex flex-col items-center justify-center w-full gap-6 sm:gap-8 md:gap-12 p-4 sm:p-6 md:p-8 relative z-10"
      >
        {/* Branding corner */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute left-5 top-5 z-20"
        >
          <h2
            className="text-lg sm:text-xl md:text-2xl text-white font-bold tracking-wider"
            ref={reff}
            onMouseOver={replays}
            onFocus={replays}
          >
            <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              CODEWAR 2.0
            </span>
          </h2>
        </motion.div>

        {/* Top Right - CodeWar 1.0 Link */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute right-5 top-5 z-20"
        >
          <a
            href="https://codewar-2025.mechimavericks.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800/60 hover:bg-gray-800/90 backdrop-blur-sm border border-gray-700/80 hover:border-teal-400/50 text-gray-300 hover:text-white text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 shadow-md group"
          >
            <span>CODEWAR 1.0</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5 ml-1.5 text-gray-400 group-hover:text-teal-400 transition-colors duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </motion.div>

        {/* Main title section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 md:space-y-6"
        >
          {inView && (
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-indigo-600 opacity-20 blur-xl rounded-full"></div>
              <h1
                className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white text-center tracking-tighter"
                ref={ref}
                onMouseOver={replay}
                onFocus={replay}
              >
                <span className="bg-gradient-to-r from-teal-300 via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                  CODEWAR 2.0
                </span>
              </h1>
            </div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-3 md:space-y-4"
          >
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 md:h-5 md:w-5 text-teal-400 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <h2 className="text-xs sm:text-sm md:text-lg lg:text-xl font-medium text-center text-gray-200">
                @Mechi Multiple Campus - Bhadrapur, Jhapa
              </h2>
            </div>

            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 md:h-5 md:w-5 text-teal-400 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-teal-300 to-cyan-200 bg-clip-text text-transparent">
                September 2026
              </h2>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-wrap justify-center items-start gap-4 sm:gap-5 md:gap-6 px-2 sm:px-4 mt-2 md:mt-4"
        >
          <div className="flex flex-col items-center gap-1.5">
            <a
              href="https://forms.gle/Hsj3y7eejgUNvDjW8"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden group bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:shadow-teal-500/40 transition-all duration-300 flex items-center border border-teal-400/30"
            >
              <span className="relative flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Registration Form
              </span>
            </a>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <a
              href="https://practice.geeksforgeeks.org/contest/codewar-20"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden group bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:shadow-blue-500/40 transition-all duration-300 flex items-center border border-blue-400/30"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400/20 to-indigo-400/20 blur-md group-hover:opacity-75 transition-opacity duration-300 opacity-0"></span>
              <span className="absolute -inset-1 bg-blue-500/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Event Page
              </span>
            </a>
          </div>
        </motion.div>

        {/* Application Timeline section */}
        {isMounted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex justify-center w-full px-4 mt-4 md:mt-6"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-teal-400 mr-2 animate-pulse"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center text-gray-200">
                  Application Timeline
                </h2>
              </div>

              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-500/20 via-cyan-500/20 to-blue-500/20 backdrop-blur-md rounded-xl border border-teal-500/30 shadow-lg text-teal-300 font-bold text-lg sm:text-xl">
                Open until September 12, 2026
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Landing;
