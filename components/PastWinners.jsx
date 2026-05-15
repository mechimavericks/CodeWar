"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

function PastWinners() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  // Sample winner data - Modular structure as requested
  const winners = [
    {
      // name: "Team Alpha",
      position: "Winner",
      image: "https://i.ibb.co/d0Q6dkr3/winner.jpg",
      // project: "Smart City Traffic Management System",
      gradient: "from-yellow-300 via-teal-200 to-yellow-500",
      textColor: "text-gray-900",
      delay: 0
    },
    {
      position: "1st Runner Up",
      image: "https://i.ibb.co/JWWc2CYp/1strunnerup.jpg0",
      gradient: "from-cyan-200 via-blue-300 to-cyan-400",
      textColor: "text-gray-900",
      delay: 0.2
    },
    {
      position: "2nd Runner Up",
      image: "https://i.ibb.co/KxLzW3qV/2nd-runnerup.jpg",
      gradient: "from-amber-500 via-orange-400 to-amber-600",
      textColor: "text-white",
      delay: 0.4
    }
  ];

  return (
    <section className="relative overflow-hidden w-full bg-gradient-to-b from-gray-800 to-gray-900 py-20 md:py-28 border-t border-gray-700/30">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-teal-600 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600 rounded-full filter blur-[120px]"></div>
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center justify-center w-full mb-16 text-center"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-teal-900/40 text-teal-400 text-sm font-medium border border-teal-700/30 mb-5 shadow-sm">
            Hall of Fame
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-teal-300 via-cyan-200 to-blue-300 bg-clip-text text-transparent">
              CodeWar 1.0 Winners
            </span>
          </h1>

          <div className="h-1.5 w-32 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto rounded-full mb-8 shadow-teal-500/20 shadow-lg"></div>

          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Honoring the exceptional teams who pushed the boundaries of technology and innovation in our CodeWar1.0.
          </p>
        </motion.div>

        {/* Winners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {winners.map((winner, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: winner.delay }}
              className="group relative flex flex-col h-full"
            >
              {/* Card Container */}
              <div className="flex flex-col h-full bg-gray-800/40 backdrop-blur-md rounded-3xl border border-gray-700/50 hover:border-teal-500/40 transition-all duration-500 shadow-2xl hover:shadow-teal-500/10 overflow-hidden">

                {/* Image Wrapper */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10 opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>

                  {/* Random Image Placeholder */}
                  <img
                    src={winner.image}
                    alt={winner.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Position Badge Overlay */}
                  <div className="absolute top-5 left-5 z-20">
                    <div className={`px-5 py-2 bg-gradient-to-r ${winner.gradient} ${winner.textColor} text-xs font-black uppercase tracking-widest rounded-2xl shadow-xl border border-white/20 transform -rotate-1 group-hover:rotate-0 transition-transform duration-300`}>
                      {winner.position}
                    </div>
                  </div>

                  {/* Winner Icon Overlay */}
                  <div className="absolute bottom-5 right-5 z-20 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-12 h-12 bg-teal-500/20 backdrop-blur-md border border-teal-400/30 rounded-full flex items-center justify-center text-teal-400 shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 flex flex-col flex-grow relative">
                  {/* Floating Action Button Style Decor */}
                  <div className="absolute -top-10 left-8 z-30">
                    <div className="w-16 h-16 bg-gray-900 rounded-2xl border-4 border-gray-800 flex items-center justify-center shadow-2xl group-hover:bg-teal-900 transition-colors duration-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-400 group-hover:text-white transition-colors duration-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3.005 3.005 0 013.75-2.906z" />
                      </svg>
                    </div>
                  </div>


                  {/* Decorative corner element */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-transparent to-teal-500/5 rounded-br-3xl pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PastWinners;
