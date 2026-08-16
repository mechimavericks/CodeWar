"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function WhatIsCodeWar() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
            About The Event
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-teal-300 via-cyan-200 to-blue-300 bg-clip-text text-transparent">
              What is CodeWar 2.0?
            </span>
          </h1>
          
          <div className="h-1.5 w-24 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto bg-gray-800/50 rounded-xl p-6 sm:p-8 md:p-10 backdrop-blur-sm border border-gray-700/50 hover:border-teal-500/30 transition-all duration-300 shadow-xl hover:shadow-teal-500/10"
        >
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed text-justify">
            CodeWar 2.0 is a competitive coding event organized by Mechi
            Mavericks in collaboration with the BCA Association of Mechi
            Multiple Campus. It is an opportunity for students to test their
            problem-solving skills, collaborate with peers, and enhance their
            coding expertise.
          </p>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed text-justify">
            The event consists of multiple challenging rounds, including
            individual and team-based programming tasks, designed to push
            participants&apos; logical and analytical thinking. Whether you are
            a beginner or an advanced programmer, CodeWar 2.0 provides a
            platform to showcase your abilities and learn from others in a
            dynamic, competitive environment.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default WhatIsCodeWar;
