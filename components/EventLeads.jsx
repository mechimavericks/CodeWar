"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

function EventLeads() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (leadName) => {
    setImageErrors((prev) => ({ ...prev, [leadName]: true }));
  };

  const eventLeads = [
    {
      name: "Samir Kharel",
      role: "Event Lead",
      description:
        "Leading the overall coordination and management of CodeWar 2.0, ensuring a seamless experience for all participants.",
      gradient: "from-teal-500 to-cyan-500",
      textColor: "text-teal-400",
      email: "shameerkharel2@gmail.com",
      linkedin: "https://www.linkedin.com/in/shameer-kharel/",
      image: "/samir.jpeg", 
    },
    {
      name: "Santosh Bhandari",
      role: "Event Co-Lead",
      description:
        "Supporting event coordination and working closely with the lead to deliver an exceptional competitive programming experience.",
      gradient: "from-cyan-500 to-blue-500",
      textColor: "text-cyan-400",
      email: "santoshvandari100@gmail.com",
      linkedin: "https://www.linkedin.com/in/santosh-bhan   dari/",
      image: "/santosh.jpg",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 md:py-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-teal-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600 rounded-full filter blur-3xl"></div>
      </div>

      <div ref={ref} className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-teal-900/40 text-teal-400 text-sm font-medium border border-teal-700/30 mb-4">
            Event Leadership
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-teal-300 via-cyan-200 to-blue-300 bg-clip-text text-transparent">
              Meet Our Event Leaders
            </span>
          </h1>

          <div className="h-1.5 w-24 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto rounded-full mb-6"></div>

          <p className="text-gray-300 text-center max-w-2xl mx-auto">
            The dedicated team leading CodeWar 2.0 to success
          </p>
        </motion.div>

        {/* Event Leads Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {eventLeads.map((lead, index) => (
            <motion.div
              key={lead.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-800/50 rounded-xl p-6 sm:p-8 backdrop-blur-sm border border-gray-700/50 hover:border-teal-500/30 transition-all duration-300 shadow-xl hover:shadow-teal-500/10"
            >
              {/* Profile Image */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${lead.gradient} rounded-full p-1`}
                >
                  <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                    {!imageErrors[lead.name] && lead.image ? (
                      <Image
                        src={lead.image}
                        alt={`${lead.name} - ${lead.role}`}
                        width={120}
                        height={120}
                        className="w-full h-full object-cover rounded-full"
                        onError={() => handleImageError(lead.name)}
                        priority={index < 2}
                      />
                    ) : (
                      <svg
                        className="w-16 h-16 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </div>

              {/* Name and Role */}
              <div className="text-center mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {lead.name}
                </h3>
                <p
                  className={`${lead.textColor} font-medium text-lg mb-3`}
                >{lead.role}</p>
                <div
                  className={`h-1 w-16 bg-gradient-to-r ${lead.gradient} mx-auto rounded-full`}
                ></div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-center leading-relaxed mb-6">
                {lead.description}
              </p>

              {/* Contact Links */}
              <div className="flex justify-center space-x-4">
                <a
                  href={`mailto:${lead.email}`}
                  className="flex items-center justify-center w-12 h-12 bg-gray-700/50 hover:bg-teal-600/20 rounded-full border border-gray-600/50 hover:border-teal-500/30 transition-all duration-300"
                  aria-label={`Email ${lead.name}`}
                >
                  <svg
                    className="w-5 h-5 text-gray-400 hover:text-teal-400 transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>

                <a
                  href={lead.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-gray-700/50 hover:bg-blue-600/20 rounded-full border border-gray-600/50 hover:border-blue-500/30 transition-all duration-300"
                  aria-label={`${lead.name}'s LinkedIn`}
                >
                  <svg
                    className="w-5 h-5 text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventLeads;