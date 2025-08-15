"use client";
import React from "react";
import { motion } from "framer-motion";
import HerocardBig from "./HerocardBig";
import HerocardSmall from "./HerocardSmall";
import { BiReceipt } from "react-icons/bi";
import { PiGlobeSimple } from "react-icons/pi";
import { PiCubeLight } from "react-icons/pi";

const HeroCardSection = () => {
  return (
    <div className="relative lg:absolute -top-[290px] sm:-top-[180px] -bottom-0 lg:-bottom-[65px] lg:left-0 lg:right-0 flex justify-center lg:translate-y-1/2 z-10 lg:z-20 mb-0 sm:mb-6 md:mb-8 lg:mb-8">
      <motion.div
        className="container mx-auto px-2 sm:px-4 lg:px-4 max-w-[95%] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1140px] flex flex-col lg:flex-row justify-center items-center gap-2 sm:gap-4 md:gap-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="w-full lg:w-[80%]">
          <HerocardBig
            title="Why Choose Infinity Infosys for your company website?"
            description="We are one-stop for complete IT and Security Solutions Located in Kalimati, Kathmandu."
            btnText="Learn More"
            btnLink="/about"
          />
        </div>
        <div className="flex flex-col lg:flex-row items-start justify-center gap-2 sm:gap-4 md:gap-6">
          <div className="w-full md:w-[90%] lg:w-[80%]">
            <HerocardSmall
              title="Discuss on requirement"
              description="Our initial step involves in-depth discussions to grasp your specific needs."
              icon={<BiReceipt />}
            />
          </div>
          <div className="w-full md:w-[90%] lg:w-[80%]">
            <HerocardSmall
              title="Research on solution"
              description="Being a hub for IT and Security Solutions, our next phase is rigorous research."
              icon={<PiGlobeSimple />}
            />
          </div>
          <div className="w-full md:w-[90%] lg:w-[80%]">
            <HerocardSmall
              title="Plan of projection"
              description="We craft a detailed plan, understanding your needs, and researching suitable solutions for success."
              icon={<PiCubeLight />}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroCardSection;
