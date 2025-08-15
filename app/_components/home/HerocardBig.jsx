"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const HerocardBig = ({ title, description, btnText, btnLink }) => {
  return (
    <motion.div
      className="bg-[#FFBC13] w-full md:w-[90%] lg:w-[355px] h-[350px] sm:h-[240px] lg:h-[370px] py-0 sm:py-6 px-4 flex flex-col items-center justify-center text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      role="article"
      aria-labelledby={`herocard-title-${title}`}
    >
      {/* The title now scales from 2xl to 4xl on different screen sizes */}
      <h2
        id={`herocard-title-${title}`}
        className="w-[92%] text-3xl lg:text-4xl font-semibold text-left md:ps-4 mb-6 sm:mb-4"
      >
        {title}
      </h2>
      {/* The description text also scales responsively */}
      <p className="w-[92%] text-base sm:text-lg font-[400] text-left mb-8 sm:mb-6 leading-snug">
        {description}
      </p>
      {/* Button padding and text size are responsive for better touch targets */}
      <Link
        href={btnLink}
        className="inline-block bg-[#FFFFFF33] text-sm md:text-base font-[400] px-6 py-2 rounded-full hover:text-[#FFBC13] hover:bg-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#584B48] focus:ring-offset-2"
        aria-label={`Navigate to ${btnText}`}
      >
        {btnText}
      </Link>
    </motion.div>
  );
};

export default HerocardBig;
