"use client";
import React from "react";
import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

function TimeLineCard({ title, date, description }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={cardVariants}
      className="relative"
    >
      <div className="flex flex-col relative pl-8 sm:pl-0 border-l-2 border-teal-400/50 sm:border-none pb-10 sm:pb-12">
        {/* Timeline marker */}
        <div className="absolute top-0 left-[-8px] sm:left-[-28px] z-10">
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 shadow-lg">
            <div className="absolute inset-0 rounded-full animate-ping opacity-30 bg-teal-400 duration-1000"></div>
          </div>
        </div>

        {/* Content card */}
        <div className="bg-gray-800/70 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-teal-500/30 transition-all duration-300 shadow-xl hover:shadow-teal-500/10">
          <h3 className="text-xl sm:text-2xl font-bold mb-2">
            <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
              {title}
            </span>
          </h3>
          
          <time className="inline-block px-3 py-1 bg-teal-900/30 text-teal-300 text-xs font-medium rounded-full mb-4 border border-teal-800/30">
            {date}
          </time>
          
          <p className="text-gray-300 text-sm sm:text-base">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

function Timeline() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="overflow-hidden w-full bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-40 h-40 bg-teal-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-600 rounded-full filter blur-3xl"></div>
      </div>
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center justify-center w-full p-8 pt-16 relative z-10"
      >
        <div className="inline-block px-4 py-1.5 rounded-full bg-teal-900/40 text-teal-400 text-sm font-medium border border-teal-700/30 mb-4">
          Mark Your Calendar
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center">
          <span className="bg-gradient-to-r from-teal-300 via-cyan-200 to-blue-300 bg-clip-text text-transparent">
            Event Timeline
          </span>
        </h1>
        
        <div className="h-1.5 w-24 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
      </motion.div>

      <section className="relative z-10">
        <div className="container max-w-5xl px-4 py-8 mx-auto">
          <div className="grid gap-6 mx-2 sm:gap-8 sm:grid-cols-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="col-span-12 sm:col-span-4 md:sticky md:top-24" 
              style={{ height: "fit-content" }}
            >
              <div className="text-center sm:text-left mb-8 sm:mb-14">
                <div className="inline-block w-24 h-1 mb-4 rounded-full bg-gradient-to-r from-teal-500 to-cyan-400"></div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Our Journey
                </h3>
                <h4 className="text-xl font-semibold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                  CodeWar 2026
                </h4>
                <p className="text-gray-400 mb-6 text-sm sm:text-base">
                  Follow our path as we prepare for the ultimate coding showdown.
                  Mark these key dates in your calendar.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 mr-2"></div>
                    <span className="text-gray-300 text-sm">Registration Period</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 mr-2"></div>
                    <span className="text-gray-300 text-sm">Team Formation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 mr-2"></div>
                    <span className="text-gray-300 text-sm">Main Event</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="col-span-12 sm:col-span-8 space-y-6 text-justify">
              <TimeLineCard
                title="Registration"
                date="23rd August 2026 - 06th September 2026"
                description="Registration for CodeWar 2.0 opens on August 23, 2026, until September 06, 2026. This timeframe provides aspiring participants with the opportunity to register for the upcoming event."
              />
              <TimeLineCard
                title="Formation of Teams"
                date="07th September 2026 - 10th September 2026"
                description="The team formation will take place from 07th September to 10th September 2026. The formatted teams will be notified via email and need to cooperate during the competition."
              />
              <TimeLineCard
                title="Main Event"
                date="15th - 16th September 2026"
                description="The main event will take place on September 15 and 16, 2026. Registered participants and their teams will compete in the final round, which will be held at Mechi Multiple Campus, Bhadrapur, Jhapa."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Timeline;
