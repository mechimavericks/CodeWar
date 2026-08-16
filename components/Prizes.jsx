"use client";
import React from "react";
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

function Prizes() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const prizes = [
    {
      title: "Winner",
      gradient: "from-yellow-300 via-teal-200 to-yellow-500",
      textColor: "text-gray-900",
      items: [
        "Prize Pool & Rewards: TBD",
        "To Be Announced Soon",
        "Certificate for all Participants",
      ],
      delay: 0
    },
    {
      title: "First Runner Up",
      gradient: "from-cyan-200 via-blue-300 to-cyan-400",
      textColor: "text-gray-900",
      items: [
        "Prize Pool & Rewards: TBD",
        "To Be Announced Soon",
        "Certificate for all Participants",
      ],
      delay: 0.2
    },
    {
      title: "Second Runner Up",
      gradient: "from-amber-500 via-orange-400 to-amber-600",
      textColor: "text-white",
      items: [
        "Prize Pool & Rewards: TBD",
        "To Be Announced Soon",
        "Certificate for all Participants",
      ],
      delay: 0.4
    }
  ];

  return (
    <div className="overflow-hidden w-full bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-40 h-40 bg-teal-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-600 rounded-full filter blur-3xl"></div>
      </div>

      <div ref={ref}>
        <section className="py-16 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center justify-center w-full px-4 sm:px-6 relative z-10 mb-12"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-teal-900/40 text-teal-400 text-sm font-medium border border-teal-700/30 mb-4">
              Recognition & Rewards
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center">
              <span className="bg-gradient-to-r from-teal-300 via-cyan-200 to-blue-300 bg-clip-text text-transparent">
                Prizes & Awards (TBD)
              </span>
            </h1>

            <div className="h-1.5 w-24 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto rounded-full mb-6"></div>

            <p className="text-gray-300 text-center max-w-2xl font-medium">
              Prizes for CodeWar 2.0 are <span className="text-teal-400 font-bold">TBD</span> for now. Full reward details will be announced soon!
            </p>
          </motion.div>

          {/* Prize Cards Container */}
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {prizes.map((prize, index) => (
                inView && (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: prize.delay }}
                    className="relative flex flex-col h-full"
                  >
                    {/* Card wrapper with consistent height */}
                    <div className="flex flex-col h-full bg-gray-800/70 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-teal-500/30 transition-all duration-300 shadow-xl hover:shadow-teal-500/10 overflow-hidden">
                      {/* Prize badge */}
                      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 z-10">
                        <span className={`inline-block px-6 py-1.5 bg-gradient-to-r ${prize.gradient} ${prize.textColor} font-medium rounded-full whitespace-nowrap shadow-lg border border-white/10`}>
                          {prize.title}
                        </span>
                      </div>

                      {/* Card content */}
                      <div className="flex flex-col h-full p-8 pt-10">
                        {/* Prize glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-teal-600/5 to-transparent opacity-30"></div>

                        {/* Icon */}
                        <div className="flex justify-center mb-6 mt-4">
                          <div className={`p-3 rounded-full bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30`}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-8 w-8 text-teal-400"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>

                        {/* Prize list */}
                        <div className="flex-grow">
                          <ul className="space-y-4">
                            {prize.items.map((item, itemIndex) => (
                              <PrizeListItem key={itemIndex} text={item} />
                            ))}
                            {/* Add empty items to ensure consistent height if needed */}
                            {prize.items.length < 5 && Array(5 - prize.items.length).fill().map((_, i) => (
                              <div key={`spacer-${i}`} className="h-[26px] sm:h-[28px] md:h-[30px]"></div>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </div>
          </div>

          {/* Exclusive Merchandise Section - Commented out for now */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 max-w-4xl mx-auto px-4"
          >
            <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-teal-500/20 rounded-xl p-8 backdrop-blur-sm shadow-xl relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-teal-500/20 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-cyan-500/20 rounded-full filter blur-2xl"></div>

              <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
                <div className="p-4 rounded-full bg-gradient-to-br from-teal-500/30 to-cyan-500/20 border border-teal-400/30 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
                    Exclusive Merchandise from{" "}
                    <a
                      href="https://kharaayo.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-400 hover:text-pink-300 transition-colors duration-300 underline decoration-dotted underline-offset-2 font-semibold"
                    >
                      Kharaayo Inc.
                    </a>
                  </h3>
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full border border-teal-500/30 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="font-bold bg-gradient-to-r from-teal-300 to-cyan-200 bg-clip-text text-transparent">
                      Up to <span className="text-xl text-pink-400">5</span> Teams
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div> */}
        </section>
      </div>
    </div>
  );
}

const PrizeListItem = ({ text }) => (
  <li className="flex items-center space-x-3">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-5 w-5 flex-shrink-0 text-teal-400"
      stroke="currentColor"
      fill="none"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
    <span className="text-gray-200">{text}</span>
  </li>
);

export default Prizes;
