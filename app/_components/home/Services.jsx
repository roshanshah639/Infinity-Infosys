"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaGlobeAfrica,
  FaShieldAlt,
  FaDesktop,
  FaCode,
  FaMobileAlt,
  FaCloud,
} from "react-icons/fa";
import ServiceCard from "./ServiceCard";

// Data for the service cards to make the component dynamic and clean
const servicesData = [
  {
    icon: <FaDesktop />,
    title: "Website Development",
    description:
      "We build modern, responsive, and high-performance websites tailored to your business needs.",
    link: "https://infinityinfosys.com/services/website-development",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    description:
      "Our team crafts native and cross-platform mobile applications for iOS and Android.",
    link: "https://infinityinfosys.com/services/mobile-app-development",
  },
  {
    icon: <FaShieldAlt />,
    title: "Security Solutions",
    description:
      "We provide comprehensive security audits and solutions to protect your digital assets.",
    link: "https://infinityinfosys.com/services/security-solutions",
  },
  {
    icon: <FaCode />,
    title: "Software Optimization",
    description:
      "We can provide optimization services for both websites and mobile applications.",
    link: "https://infinityinfosys.com/services/website-and-mobile-optimization",
  },
  {
    icon: <FaCloud />,
    title: "Cloud & Hosting",
    description:
      "Reliable and scalable cloud hosting services to ensure your applications are always available.",
    link: "https://infinityinfosys.com/services/cloud-and-hosting",
  },
  {
    icon: <FaGlobeAfrica />,
    title: "SEO & Digital Marketing",
    description:
      "Improve your online visibility and reach your target audience with our digital marketing strategies.",
    link: "https://infinityinfosys.com/services/seo-and-digital-marketing",
  },
];

// Main Services Component
const Services = () => {
  // Staggered animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Individual item animation
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="-mt-[220px] md:-mt-[500px] lg:mt-0 bg-[#FFF9F7] py-16 md:py-24 font-sans">
      <div className="container mx-auto px-4 md:px-6  max-w-[1140px]">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#635551]">
            Our Services
          </h2>
        </div>

        {/* Responsive Grid with Staggered Animations */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {servicesData.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// Main App component for demonstration
// export default function App() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Services />
//     </div>
//   );
// }

export default Services;
