"use client";

import React from "react";
import { motion } from "framer-motion";
import VisionCard from "./VisionCard";

const VisionContainer = () => {
  const visionData = [
    {
      title: "Our Mission",
      description:
        "Our team supports you no matter where you are on your Sustainability Journey. We believe in sustainability.",
      bgImage: "url('./mission1.jpeg')",
    },
    {
      title: "Our Plan",
      description:
        "Community service is one of our core values at Infinity Infosys. As an emerging IT Company you will be challenged to deliver solutions that meet clients’ needs, expectations, and budgets.",
      bgImage: "url('plan1.jpeg')",
    },
    {
      title: "Our Vision",
      description:
        "We inspire iconic brands, creative minds and innovative technologies.",
      bgImage: "url('./vision1.jpeg')",
    },
    {
      title: "Our Care",
      description:
        "We organize seminars, and small training sessions for members of your company or maybe hire a coach to guide your team and help them have a knack for professional tools.",
      bgImage: "url('./care1.jpeg')",
    },
  ];

  // Staggered animation settings
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-white py-12 sm:py-16 font-sans">
      <div className="container mx-auto max-w-[1140px] px-4 text-center">
        {/* Responsive Grid of Vision Cards with Staggered Animation */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {visionData.map((item, index) => (
            <motion.div key={index} variants={itemVariants} className="w-full">
              <VisionCard
                title={item.title}
                description={item.description}
                bgImage={item.bgImage}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFF9F7]">
      <VisionContainer />
    </div>
  );
}
