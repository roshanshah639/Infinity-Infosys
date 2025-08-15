"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiPlayCircle, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";
import Link from "next/link";

const AboutUs = () => {
  const pathname = usePathname();

  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const toggleVideo = () => {
    setIsVideoOpen(!isVideoOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-3 w-full mx-auto px-4">
      <div className="max-w-[1140px] mx-auto">
        <h2
          className="text-sm font-[400] text-slate-600 mb-8"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {pathname === "/about-us" ? (
            <>
              <Link href="/" className="text-[#FFBC13] pr-2">
                Home
              </Link>
              / 
              <span className="text-slate-600 pl-2"> About Us</span>
            </>
          ) : (
            "Why Choose Us"
          )}
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Left Side - Video Section */}
          <div
            className="w-full md:w-[40%] relative"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="relative w-full h-0 pb-[56.25%] md:pb-[75%] rounded-lg overflow-hidden shadow-lg ">
              <Image
                src="/thumbnail1.jpeg"
                alt="Video Thumbnail"
                fill
                className="object-cover"
                priority
              />
              <button
                onClick={toggleVideo}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
              text-white bg-[#FFBC13]/80 group hover:bg-[#FFBC13] p-4 rounded-full transition-all duration-300"
                aria-label="Play video"
              >
                <FiPlayCircle className="text-3xl group-hover:animate-ping transition-all duration-300" />
              </button>
            </div>
            {isVideoOpen && (
              <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
                <button
                  onClick={toggleVideo}
                  className="absolute top-4 right-4 text-white hover:text-[#FFBC13] transition-colors duration-300"
                  aria-label="Close video"
                >
                  <FiX className="text-3xl md:text-4xl" />
                </button>
                <div className="w-full h-full max-w-[90%] max-h-[90%]">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="About Us Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </div>

          {/* Right Side - Content Section */}
          <div
            className="w-full md:w-[60%] flex flex-col gap-6 md:gap-8"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <h2
              className="text-md font-[400] text-slate-600"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              About Us
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              Infinity Infosys is a dynamic IT solutions provider dedicated to
              empowering businesses with innovative technology. Founded with a
              vision to bridge the gap between creativity and functionality, we
              specialize in delivering cutting-edge services tailored to meet
              the unique needs of our clients.
            </p>
            <p className="text-base text-slate-700 leading-relaxed">
              Our team of skilled professionals brings expertise in web
              development, mobile optimization, and digital marketing, ensuring
              seamless integration of technology into your business strategy. We
              pride ourselves on our commitment to quality, transparency, and
              client satisfaction, fostering long-term partnerships built on
              trust.
            </p>
            <p className="text-base text-slate-700 leading-relaxed">
              Headquartered in Kalimati, Kathmandu, Nepal, Infinity Infosys is
              driven by a passion for innovation and excellence. Whether you're
              a startup or an established enterprise, we are here to help you
              navigate the digital landscape and achieve your goals with
              state-of-the-art solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
