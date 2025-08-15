"use client";

import React from "react";
import { motion } from "framer-motion";

const VisionCard = ({ title, description, bgImage }) => {
  return (
    <div
      className="relative w-full lg:min-w-[546px] min-h-[350px] shadow-lg rounded-md overflow-hidden group"
      style={{
        backgroundImage: `${bgImage}`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        className="absolute top-[75%] left-1/2 -translate-x-1/2 -translate-y-1/2 
                   bg-white/90 p-6 sm:p-8 flex flex-col justify-center text-center 
                   w-[95%] h-[45%] rounded-sm shadow-xl hover:shadow-2xl group-hover:bg-[#FFBC13] transition-all duration-300"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2
          className="text-lg sm:text-xl font-semibold text-[#635551] mb-2 sm:mb-3 md:mb-4
                     group-hover:text-white transition-colors duration-300"
        >
          {title}
        </h2>
        <p className="text-sm sm:text-md text-gray-600 leading-relaxed">
          {description}
        </p>
      </motion.div>
    </div>
  );
};

export default VisionCard;
