import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="w-full">
      <motion.div
        whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)" }}
        transition={{ duration: 0.3 }}
        className="relative bg-white shadow-lg rounded-sm p-6 pt-10 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl group min-h-[180px]"
      >
        <div className="absolute -top-8 w-16 h-16 bg-[#FFBC13] rounded-full shadow-lg flex items-center justify-center transition-colors duration-300 group-hover:bg-white group-hover:ring-2 group-hover:ring-[#FFBC13]">
          <motion.span
            whileHover={{ scale: 1.1 }}
            className="text-3xl text-white transition-colors duration-300 group-hover:text-[#FFBC13]"
          >
            {icon}
          </motion.span>
        </div>
        <div className="text-xl font-semibold text-gray-800 mb-3">
          <h5 className="hover:text-[#FFBC13] transition-colors duration-200 no-underline">
            {title}
          </h5>
        </div>
        <p className="text-base text-gray-600">{description}</p>
      </motion.div>
    </div>
  );
};

export default ServiceCard;
