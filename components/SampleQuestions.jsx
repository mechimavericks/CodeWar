"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SampleQuestions = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Organize questions by level
  const questionsByLevel = {
    "Beginner Level": {
      questions: [
        {
          question: "Write a function that reverses a string.",
          example: "Input: \"hello\" → Output: \"olleh\"",
        },
        {
          question: "Check if a word is a palindrome.",
          example: "Input: \"radar\" → Output: true",
        },
        {
          question: "Find the largest number in an array.",
          example: "Input: [3, 7, 2, 9, 1] → Output: 9",
        },
        {
          question: "Calculate the factorial of a number.",
          example: "Input: 5 → Output: 120 (5×4×3×2×1)",
        },
      ],
      delay: 0.1,
      gradient: "from-teal-300 via-cyan-200 to-blue-300",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    "Easy Level": {
      questions: [
        {
          question: "Find the sum of all even numbers in an array.",
          example: "Input: [1, 2, 3, 4, 5, 6] → Output: 12 (2+4+6)",
        },
        {
          question: "Count the number of vowels in a string.",
          example: "Input: \"hello world\" → Output: 3",
        },
        {
          question: "Find the maximum subarray sum.",
          example: "Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4] → Output: 6",
        },
        {
          question: "Convert a string to title case.",
          example: "Input: \"hello world\" → Output: \"Hello World\"",
        },
      ],
      delay: 0.3,
      gradient: "from-blue-300 via-indigo-200 to-purple-300",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    "Intermediate Level": {
      questions: [
        {
          question: "Find the first non-repeating character in a string.",
          example: "Input: \"programming\" → Output: \"p\"",
        },
        {
          question: "Implement a function to check if a string has balanced parentheses.",
          example: "Input: \"{[()]}\" → Output: true",
        },
        {
          question: "Find all permutations of a string.",
          example: "Input: \"abc\" → Output: [\"abc\", \"acb\", \"bac\", \"bca\", \"cab\", \"cba\"]",
        },
        {
          question: "Implement a queue using two stacks.",
          example: "Operations: enqueue(1), enqueue(2), dequeue() → Output: 1",
        },
      ],
      delay: 0.5,
      gradient: "from-purple-300 via-pink-200 to-rose-300",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
  };

  return (
    <div className="overflow-hidden w-full bg-gradient-to-b from-gray-800 to-gray-900">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-40 h-40 bg-blue-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-teal-600 rounded-full filter blur-3xl"></div>
      </div>
      
      <div ref={ref}>
        <section className="py-16 relative z-10">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center justify-center w-full px-4 sm:px-6 relative z-10 mb-12"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-teal-900/40 text-teal-400 text-sm font-medium border border-teal-700/30 mb-4">
              Challenge Preview
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center">
              <span className="bg-gradient-to-r from-teal-300 via-cyan-200 to-blue-300 bg-clip-text text-transparent">
                Sample Questions
              </span>
            </h1>
            
            <div className="h-1.5 w-24 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
            
            <p className="text-gray-300 text-center max-w-2xl">
              Here are some sample questions to give you an idea of what to expect at CodeWar 2.0
            </p>
          </motion.div>

          {/* Question Cards by Level */}
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {Object.entries(questionsByLevel).map(([level, data], index) => (
                inView && (
                  <motion.div
                    key={level}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: data.delay }}
                    className="h-full"
                  >
                    <div className="flex flex-col h-full bg-gray-800/70 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-teal-500/30 transition-all duration-300 shadow-xl hover:shadow-teal-500/10 overflow-hidden group">
                      {/* Level header */}
                      <div className={`w-full px-6 py-4 bg-gradient-to-r ${data.gradient} text-gray-900`}>
                        <div className="flex items-center space-x-3">
                          <div className="bg-white/20 p-2 rounded-full">
                            {data.icon}
                          </div>
                          <h3 className="text-xl font-bold">{level}</h3>
                        </div>
                      </div>
                      
                      {/* Questions list */}
                      <div className="p-6 flex-grow flex flex-col">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-teal-600/5 to-transparent opacity-30"></div>
                        
                        <div className="flex-grow divide-y divide-gray-700/30">
                          {data.questions.map((q, qIndex) => (
                            <div key={qIndex} className={`${qIndex === 0 ? "" : "pt-4"} ${qIndex === data.questions.length - 1 ? "" : "pb-4"}`}>
                              <div className="mb-2">
                                <div className="flex items-start">
                                  <div className="bg-gray-700/50 rounded-full h-5 w-5 flex items-center justify-center mt-1 mr-2 flex-shrink-0">
                                    <span className="text-xs text-gray-300">{qIndex + 1}</span>
                                  </div>
                                  <span className="font-medium text-gray-100">{q.question}</span>
                                </div>
                              </div>
                              <div className="pl-7">
                                <p className="text-gray-300 text-sm font-mono bg-gray-900/60 p-2 rounded border border-gray-700/60">{q.example}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="text-center mt-12 max-w-3xl mx-auto"
            >
              <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/40 rounded-lg p-6 shadow-lg">
                <p className="text-gray-300">
                  <span className="text-teal-400 font-semibold">Note:</span> During the actual CodeWar event, you&apos;ll encounter questions across various difficulty levels from beginner to medium. All questions will test your problem-solving abilities and coding skills.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SampleQuestions;