"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Glance = () => {
  return (
    <section
      id="about"
      className="bg-[#FFF9F7] py-6 mt-0 md:mt-[280px] relative -top-[220px] md:-top-[400px] lg:top-0 overflow-hidden"
    >
      <motion.div
        className="absolute top-4 md:top-6 -right-4 lg:-right-6 z-10"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Image
            src="/glanceR.png"
            alt="Glance Right Image"
            width={100}
            height={100}
            className="w-[60px] sm:w-[80px] md:w-[100px] h-auto object-contain"
          />
        </motion.div>
      </motion.div>
      <div className="container mx-auto px-4 max-w-[1140px]">
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          <motion.div
            className="w-full lg:w-[35%] flex justify-center items-center relative order-1 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/glanceL.png"
              alt="Glance Left Image"
              width={601}
              height={601}
              className="w-[558px] lg:w-[601px] h-[400px] object-contain rotate-[-45deg]"
            />
          </motion.div>

          <motion.div
            className="w-full lg:w-[60%] flex flex-col justify-center py-5 px-4 lg:px-5 order-2 lg:order-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h4
              className="text-lg sm:text-xl font-[400] text-[#7f6d68] mb-4 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              A Glance at Infinity
            </motion.h4>
            <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
              Infinity Infosys stands as a leading provider of IT and electronic
              solutions, specializing in web development, IT support, and a
              range of services from social media management to advanced web
              design. With a strong presence in Nepal and India, our dedicated
              team is committed to delivering tailored solutions for your
              digital needs, ensuring optimal customer satisfaction.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              For those in search of a comprehensive digital partner, Infinity
              Infosys offers expertise in digital marketing, website design, and
              development. Our skilled specialists focus on creating impactful
              online strategies, aligning services with your business
              objectives. Contact us today to embark on a journey of digital
              success.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Glance;
