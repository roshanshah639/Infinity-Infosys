"use client";
import React from "react";
import { motion } from "framer-motion";

const HerocardSmall = ({ title, description, icon }) => {
  return (
    <motion.div
      className="w-full md:[w-80%] lg:w-[230px] h-auto max-h-[312px] px-4 sm:px-8 py-4 sm:py-6  flex flex-col items-center justify-center text-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      role="article"
      aria-labelledby={`herocard-small-title-${title}`}
    >
      <p
        size={60}
        className="text-2xl md:text-3xl text-[#FFBC13] mb-4 hover:border hover:border-[#FFBC13] rounded-full p-3"
      >
        {icon}
      </p>
      <h4
        id={`herocard-small-title-${title}`}
        className="text-md md:text-[22px] font-[500] text-gray-800 mb-4"
      >
        {title}
      </h4>
      <p className="text-sm md:text-base font-[400] text-gray-600 mb-6 leading-snug">
        {description}
      </p>
    </motion.div>
  );
};

export default HerocardSmall;
