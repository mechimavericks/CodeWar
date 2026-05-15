"use client";
import React from "react";
import { motion } from "framer-motion";
import { useScramble } from "use-scramble";

function ComingSoon() {
  const { ref: ref2, replay } = useScramble({
    text: "CODEWAR 2.0",
    speed: 0.2,
    characters: "abcefghijklmnopqrstuvwxyz",
  });

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-gray-900 overflow-hidden font-sans">
      {/* Background Image with Slow Zoom Animation */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{
          scale: { duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" },
          opacity: { duration: 1.5 }
        }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.95)), url('/images/college-image.png')`,
        }}
      ></motion.div>

      {/* Animated background gradients */}
      <div className="absolute inset-0 opacity-30 z-1">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-teal-600/20 rounded-full filter blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-blue-600/20 rounded-full filter blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay z-2"></div>


      {/* Top Navigation / Archive Link */}
      <div className="absolute top-8 right-8 z-20">
        <motion.a 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          href="https://codewar-2025.mechimavericks.tech/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center space-x-2 px-6 py-3 bg-gray-800/30 backdrop-blur-md rounded-full border border-gray-700/50 text-gray-400 text-xs md:text-sm font-bold hover:text-teal-400 hover:border-teal-500/30 transition-all duration-300 shadow-2xl hover:shadow-teal-500/10"
        >
          <span className="tracking-[0.2em] uppercase">CodeWar 1.0</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </motion.a>
      </div>


      <div className="relative z-10 flex flex-col items-center px-4 max-w-4xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-5 py-2 rounded-full bg-teal-900/40 text-teal-400 text-xs sm:text-sm font-bold border border-teal-700/30 mb-8 shadow-2xl backdrop-blur-sm tracking-[0.2em] uppercase"
          >
            The Legend Returns
          </motion.div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter leading-none flex flex-col items-center" onMouseEnter={replay}>
            <span
              ref={ref2}
              className="bg-gradient-to-r from-teal-300 via-cyan-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(45,212,191,0.3)]"
            >
              CODEWAR 2.0
            </span>
            <motion.span 
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              animate={{ opacity: 0.8, letterSpacing: "0.4em" }}
              transition={{ delay: 1.2, duration: 1.5 }}
              className="block text-2xl md:text-4xl text-teal-500/80 mt-4 font-light uppercase"
            >
              2026
            </motion.span>
          </h1>


          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "circOut" }}
            className="h-1.5 w-32 md:w-48 bg-gradient-to-r from-teal-500 via-cyan-400 to-blue-500 mx-auto rounded-full mb-12 shadow-[0_0_20px_rgba(45,212,191,0.5)]"
          ></motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-gray-300 text-lg md:text-2xl font-medium max-w-2xl mx-auto mb-14 leading-relaxed tracking-tight"
          >
            A new chapter of coding excellence is being written. <br className="hidden md:block" />
            <span className="text-teal-400 font-bold">Prepare yourself</span> for the most intense hackathon of the year.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <div className="px-10 py-5 bg-gray-800/40 backdrop-blur-xl rounded-2xl border border-teal-500/20 text-teal-300 font-black text-xl shadow-2xl shadow-teal-500/5 tracking-widest uppercase">
              Coming Soon
            </div>

            <a
              href="https://discord.gg/AGxmYRyWFN"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-teal-600 to-blue-700 rounded-2xl text-white font-black text-lg hover:shadow-[0_0_40px_rgba(45,212,191,0.4)] transition-all duration-500 transform hover:-translate-y-1"
            >
              <span className="relative z-10">Join the Discord</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform group-hover:translate-x-2 transition-transform duration-300 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-0 w-full flex flex-col items-center gap-4"
      >
        <div className="flex items-center space-x-6">
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gray-500"></div>
          <p className="text-gray-400 text-xs sm:text-sm tracking-[0.6em] uppercase font-bold">Assemble Your Squad</p>
          <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gray-500"></div>
        </div>
        
        <a 
          href="https://codewar1.mechimavericks.tech" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-teal-500/60 hover:text-teal-400 text-[10px] sm:text-xs tracking-widest uppercase font-bold transition-colors duration-300 flex items-center gap-2 border-b border-teal-500/20 pb-1"
        >
          Looking for CodeWar 1.0? Visit the Archive
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </motion.div>

      {/* Decorative corner accents */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
    </div>
  );
}

export default ComingSoon;
