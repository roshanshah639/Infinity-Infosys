"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { BiSolidRightArrowAlt } from "react-icons/bi";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col justify-center items-center min-h-screen relative"
      style={{
        backgroundImage:
          'url("./hero.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#584B48]/30 via-[#FFBC13]/30 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      ></motion.div>

      {/* content */}
      <motion.div
        className="container mx-auto absolute flex flex-col justify-center items-center lg:items-start pb-24 sm:pb-0 px-4 max-w-[1140px] text-white z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-left mb-4 drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Welcome to Infinity Infosys
        </motion.h1>
        <motion.h2
          className="text-xl md:text-2xl text-left mb-6 drop-shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          We are a team of professional developers for your service
        </motion.h2>
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <div className="bg-[#FFBC13] rounded-full absolute mr-34 px-3 py-3 shadow-lg">
            <BiSolidRightArrowAlt className="text-white text-3xl " />
          </div>

          <Link
            href="https://infinityinfosys.com#pricing"
            className="inline-block bg-[#584B48] text-white text-lg font-[450] pt-1.5 pb-2 pr-8 pl-16 rounded-full hover:bg-[#FFBC13] transition-all duration-300 shadow-md hover:shadow-xl"
          >
            Get Started
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

// "use client";
// import Link from "next/link";
// import React from "react";
// import { motion } from "framer-motion";
// import { BiSolidRightArrowAlt } from "react-icons/bi";

// const Hero = () => {
//   return (
//     <section
//       id="hero"
//       className="flex flex-col justify-center items-center min-h-screen relative bg-[url('https://myndroot.com/wp-content/uploads/2023/09/New-Project-10.webp')] bg-cover bg-center bg-no-repeat bg-scroll lg:bg-fixed"
//     >
//       <motion.div
//         className="absolute inset-0 bg-gradient-to-r from-[#584B48]/30 via-[#FFBC13]/30 to-transparent"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.5, ease: "easeInOut" }}
//       ></motion.div>

//       {/* content */}
//       <motion.div
//         className="container mx-auto flex flex-col justify-center items-center lg:items-start px-4 max-w-[1140px] text-white z-10"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
//       >
//         <motion.h1
//           className="text-4xl md:text-5xl font-bold text-left mb-4 drop-shadow-lg"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
//         >
//           Welcome to Infinity Infosys
//         </motion.h1>
//         <motion.h2
//           className="text-xl md:text-2xl text-left mb-6 drop-shadow-md"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
//         >
//           We are a team of professional developers for your service
//         </motion.h2>
//         <motion.div
//           className="flex justify-center items-center"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
//         >
//           <div className="bg-[#FFBC13] rounded-full absolute mr-34 px-3 py-3 shadow-lg">
//             <BiSolidRightArrowAlt className="text-white text-3xl " />
//           </div>

//           <Link
//             href="https://infinityinfosys.com#pricing"
//             className="inline-block bg-[#584B48] text-white text-lg font-[450] pt-1.5 pb-2 pr-8 pl-16 rounded-full hover:bg-[#FFBC13] transition-all duration-300 shadow-md hover:shadow-xl"
//           >
//             Get Started
//           </Link>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;
