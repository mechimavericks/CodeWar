"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function FAQS() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="w-full">
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 md:py-20">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/3 right-0 w-64 h-64 bg-teal-600 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600 rounded-full filter blur-3xl"></div>
        </div>
        
        <div ref={ref} className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-teal-900/40 text-teal-400 text-sm font-medium border border-teal-700/30 mb-4">
              Got Questions?
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center">
              <span className="bg-gradient-to-r from-teal-300 via-cyan-200 to-blue-300 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h1>
            
            <div className="h-1.5 w-24 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
            
            <p className="text-gray-300 text-center max-w-2xl mx-auto">
              Here are some common questions about CodeWar 2.0 and its details.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <details className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-teal-500/30 rounded-lg overflow-hidden transition-all duration-300 shadow-lg hover:shadow-teal-500/10">
              <summary className="flex justify-between items-center p-5 sm:p-6 cursor-pointer">
                <h3 className="text-base sm:text-lg md:text-xl font-medium pr-2 text-white">
                  What is CodeWar 2.0?
                </h3>
                <span className="transition-transform duration-300 group-open:rotate-180 text-teal-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="flex-shrink-0"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </span>
              </summary>
              <div className="p-5 sm:p-6 pt-0 text-base sm:text-lg text-gray-300 border-t border-gray-700/50">
                CodeWar 2.0 is a coding competition exclusively for the students
                at Mechi Multiple Campus. It aims to promote problem-solving and
                coding skills through challenging coding problems, teamwork, and
                innovative thinking.
              </div>
            </details>

            <details className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-teal-500/30 rounded-lg overflow-hidden transition-all duration-300 shadow-lg hover:shadow-teal-500/10">
              <summary className="flex justify-between items-center p-5 sm:p-6 cursor-pointer">
                <h3 className="text-base sm:text-lg md:text-xl font-medium pr-2 text-white">
                  How can I register for CodeWar 2.0?
                </h3>
                <span className="transition-transform duration-300 group-open:rotate-180 text-teal-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="flex-shrink-0"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </span>
              </summary>
              <div className="p-5 sm:p-6 pt-0 text-base sm:text-lg text-gray-300 border-t border-gray-700/50">
                You can register for CodeWar 2.0 through the official
                registration form available on the event&apos;s website.
                Registration opens on August 23, 2026, and closes on September 06, 2026.
              </div>
            </details>

            <details className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-teal-500/30 rounded-lg overflow-hidden transition-all duration-300 shadow-lg hover:shadow-teal-500/10">
              <summary className="flex justify-between items-center p-5 sm:p-6 cursor-pointer">
                <h3 className="text-base sm:text-lg md:text-xl font-medium pr-2 text-white">
                  Can I participate individually or do I need a team?
                </h3>
                <span className="transition-transform duration-300 group-open:rotate-180 text-teal-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="flex-shrink-0"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </span>
              </summary>
              <div className="p-5 sm:p-6 pt-0 text-base sm:text-lg text-gray-300 border-t border-gray-700/50">
                CodeWar 2.0 allows individual participation only. The organizers
                will be responsible for forming groups and assigning
                participants to teams based on their skill levels, ensuring a
                balanced and competitive environment for everyone.
              </div>
            </details>

            <details className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-teal-500/30 rounded-lg overflow-hidden transition-all duration-300 shadow-lg hover:shadow-teal-500/10">
              <summary className="flex justify-between items-center p-5 sm:p-6 cursor-pointer">
                <h3 className="text-base sm:text-lg md:text-xl font-medium pr-2 text-white">
                  What will be the format of the event?
                </h3>
                <span className="transition-transform duration-300 group-open:rotate-180 text-teal-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="flex-shrink-0"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </span>
              </summary>
              <div className="p-5 sm:p-6 pt-0 text-base sm:text-lg text-gray-300 border-t border-gray-700/50">
                The event will consist of multiple rounds, including
                preliminary, intermediate, and team challenges. Participants
                will have specific time limits to complete coding challenges and
                present their solutions.
              </div>
            </details>

            <details className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-teal-500/30 rounded-lg overflow-hidden transition-all duration-300 shadow-lg hover:shadow-teal-500/10">
              <summary className="flex justify-between items-center p-5 sm:p-6 cursor-pointer">
                <h3 className="text-base sm:text-lg md:text-xl font-medium pr-2 text-white">
                  Do I need prior coding experience to participate?
                </h3>
                <span className="transition-transform duration-300 group-open:rotate-180 text-teal-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="flex-shrink-0"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </span>
              </summary>
              <div className="p-5 sm:p-6 pt-0 text-base sm:text-lg text-gray-300 border-t border-gray-700/50">
                While prior coding experience is helpful, it is not mandatory.
                CodeWar 2.0 encourages participants from various backgrounds,
                including those who are still learning programming. The
                challenges are designed to accommodate different skill levels.
              </div>
            </details>

            <details className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-teal-500/30 rounded-lg overflow-hidden transition-all duration-300 shadow-lg hover:shadow-teal-500/10">
              <summary className="flex justify-between items-center p-5 sm:p-6 cursor-pointer">
                <h3 className="text-base sm:text-lg md:text-xl font-medium pr-2 text-white">
                  How will the challenges be judged?
                </h3>
                <span className="transition-transform duration-300 group-open:rotate-180 text-teal-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="flex-shrink-0"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </span>
              </summary>
              <div className="p-5 sm:p-6 pt-0 text-base sm:text-lg text-gray-300 border-t border-gray-700/50">
                The challenges will be judged based on several factors,
                including accuracy, creativity, complexity, and overall
                performance. The judges will evaluate your coding solution,
                problem-solving approach, and teamwork skills.
              </div>
            </details>

            <details className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-teal-500/30 rounded-lg overflow-hidden transition-all duration-300 shadow-lg hover:shadow-teal-500/10">
              <summary className="flex justify-between items-center p-5 sm:p-6 cursor-pointer">
                <h3 className="text-base sm:text-lg md:text-xl font-medium pr-2 text-white">
                  Are there prizes for the winners?
                </h3>
                <span className="transition-transform duration-300 group-open:rotate-180 text-teal-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="flex-shrink-0"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </span>
              </summary>
              <div className="p-5 sm:p-6 pt-0 text-base sm:text-lg text-gray-300 border-t border-gray-700/50">
                Prizes for CodeWar 2.0 are TBD (To Be Determined) for now.
                Full details regarding rewards, certificates, and recognition will be announced soon!
              </div>
            </details>

            <details className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-teal-500/30 rounded-lg overflow-hidden transition-all duration-300 shadow-lg hover:shadow-teal-500/10">
              <summary className="flex justify-between items-center p-5 sm:p-6 cursor-pointer">
                <h3 className="text-base sm:text-lg md:text-xl font-medium pr-2 text-white">
                  When and where is CodeWar 2.0 happening?
                </h3>
                <span className="transition-transform duration-300 group-open:rotate-180 text-teal-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="flex-shrink-0"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </span>
              </summary>
              <div className="p-5 sm:p-6 pt-0 text-base sm:text-lg text-gray-300 border-t border-gray-700/50">
                CodeWar 2.0 will take place on September 15 and 16, 2026, starting at
                9:30 AM onwards. It will be hosted physically at the BCA
                Department of Mechi Multiple Campus, and participants will join
                through the event&apos;s designated platform.
              </div>
            </details>

            <details className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-teal-500/30 rounded-lg overflow-hidden transition-all duration-300 shadow-lg hover:shadow-teal-500/10">
              <summary className="flex justify-between items-center p-5 sm:p-6 cursor-pointer">
                <h3 className="text-base sm:text-lg md:text-xl font-medium pr-2 text-white">
                  Can I participate if I am not a BCA student at Mechi Multiple
                  Campus?
                </h3>
                <span className="transition-transform duration-300 group-open:rotate-180 text-teal-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="flex-shrink-0"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </span>
              </summary>
              <div className="p-5 sm:p-6 pt-0 text-base sm:text-lg text-gray-300 border-t border-gray-700/50">
                Yes, CodeWar 2.0 is for All the students at Mechi Multiple
                Campus. We encourage you to stay tuned for future events.
              </div>
            </details>

            <details className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-teal-500/30 rounded-lg overflow-hidden transition-all duration-300 shadow-lg hover:shadow-teal-500/10">
              <summary className="flex justify-between items-center p-5 sm:p-6 cursor-pointer">
                <h3 className="text-base sm:text-lg md:text-xl font-medium pr-2 text-white">
                  How can I prepare for CodeWar 2.0?
                </h3>
                <span className="transition-transform duration-300 group-open:rotate-180 text-teal-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="flex-shrink-0"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </span>
              </summary>
              <div className="p-5 sm:p-6 pt-0 text-base sm:text-lg text-gray-300 border-t border-gray-700/50">
                We recommend reviewing common coding problems, algorithms, and
                data structures. You can also practice coding on platforms like GeeksForGeeks,
                LeetCode, HackerRank, or Codeforces to improve your
                problem-solving skills. It&apos;s also important to collaborate
                with teammates and practice teamwork.
              </div>
            </details>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 sm:mt-16 text-center"
          >
            <p className="text-lg text-gray-300 mb-6">
              Have more questions?
            </p>
            <a
              href="mailto:mechimavericks@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-medium rounded-lg shadow-lg hover:shadow-teal-500/20 transition duration-300 transform hover:-translate-y-1"
            >
              Contact Us
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default FAQS;
