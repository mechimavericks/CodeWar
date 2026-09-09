"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./ui/Button";
import { useInView } from "react-intersection-observer";

const Organized = () => {
  const [imgError, setImgError] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Reset image error state when component mounts - gives image another chance to load on rerenders
  useEffect(() => {
    setImgError(false);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 md:py-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-teal-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600 rounded-full filter blur-3xl"></div>
      </div>

      <div ref={ref} className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-teal-900/40 text-teal-400 text-sm font-medium border border-teal-700/30 mb-4">
            Community & Collaboration
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-teal-300 via-cyan-200 to-blue-300 bg-clip-text text-transparent">
              Organized by Mechi Mavericks
            </span>
          </h1>
          
          <div className="h-1.5 w-24 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
          
          <p className="text-gray-300 text-center max-w-2xl mx-auto">
            Bringing innovation and technology together for the next generation of developers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Modified glow effect - reduced intensity */}
              <div className="absolute inset-4 bg-gradient-to-r from-gray-600/5 to-gray-700/5 rounded-full blur-md"></div>
              
              <div className="relative border-2 border-gray-700/50 bg-gray-800/40 rounded-2xl p-6 backdrop-blur-sm shadow-xl hover:shadow-teal-500/10 transition-all duration-300 flex items-center justify-center min-h-[320px]">
                {!imgError ? (
                  <Image
                    src="/mechimavericks.png" 
                    alt="Mechi Mavericks Logo"
                    width={320}
                    height={320}
                    className="w-auto max-w-[280px] sm:max-w-[320px] h-auto object-contain"
                    priority
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center p-8 text-center">
                    <svg 
                      className="w-20 h-20 mb-4 text-teal-400" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <div className="text-2xl font-bold bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent mb-2">
                      Mechi Mavericks
                    </div>
                    <div className="text-sm text-gray-400">
                      Community of Tech Enthusiasts
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 md:space-y-8"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                <span className="bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
                  About Us
                </span>
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mb-4"></div>
              <p className="text-base text-gray-300">
                Mechi Mavericks is a dynamic community of tech enthusiasts and
                innovators from Mechi Campus. We are dedicated to fostering
                technological growth and creating opportunities for aspiring
                developers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                <span className="bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
                  Our Mission
                </span>
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mb-4"></div>
              <p className="text-base text-gray-300">
                To create a thriving tech ecosystem in the Mechi region by
                organizing events, workshops, and competitions that inspire and
                empower the next generation of developers.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                text="Contact Us"
                url="mailto:mechimavericks@gmail.com"
                variant="primary"
                className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:shadow-teal-500/20 transition-all duration-300"
              />
              <Button
                text="Join Community"
                url="https://discord.gg/tSeEdunV8c"
                variant="outline"
                className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white border border-teal-500/30 font-medium px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Organized;
