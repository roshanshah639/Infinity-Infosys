"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import figmaImg from "@/public/figma.png";
import mongodbImg from "@/public/mongodb.png";
import mysqlImg from "@/public/mysql.png";
import phpImg from "@/public/php.png";
import laravelImg from "@/public/laravel.png";
import reactImg from "@/public/react.png";
import flutterImg from "@/public/flutter.png";
import wordpressImg from "@/public/wordpress.png";
import htmlImg from "@/public/html.png";
import cssImg from "@/public/css.png";
import bootstrapImg from "@/public/bootstrap.png";
import jqueryImg from "@/public/jquery.png";

const ToolsAndTechnologies = () => {
  const titleRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after first visibility
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-8 bg-[#FFF9F7] py-6 md:py-8 min-h-[400px]">
      <div className="w-full max-w-[90%] md:max-w-[1140px] px-4">
        <div className="text-center mb-6 md:mb-8">
          <h2
            ref={titleRef}
            className={`text-xl sm:text-2xl md:text-3xl font-semibold text-[#635551] transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Tools & Technologies
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 justify-center">
          <div className="border border-[#d6eaff] group py-6 md:py-12 px-4 md:px-16 bg-white flex justify-center">
            <Image
              src={figmaImg}
              alt="Figma"
              width={58}
              height={80}
              className="group-hover:scale-125 transition-all duration-500 object-contain"
            />
          </div>
          <div className="border border-[#d6eaff] group py-6 md:py-12 px-4 md:px-16 bg-white flex justify-center">
            <Image
              src={mongodbImg}
              alt="MongoDB"
              width={58}
              height={80}
              className="group-hover:scale-125 transition-all duration-500 object-contain"
            />
          </div>
          <div className="border border-[#d6eaff] group py-6 md:py-12 px-4 md:px-16 bg-white flex justify-center">
            <Image
              src={mysqlImg}
              alt="MySQL"
              width={58}
              height={80}
              className="group-hover:scale-125 transition-all duration-500 object-contain"
            />
          </div>
          <div className="border border-[#d6eaff] group py-6 md:py-12 px-4 md:px-16 bg-white flex justify-center">
            <Image
              src={phpImg}
              alt="PHP"
              width={58}
              height={80}
              className="group-hover:scale-125 transition-all duration-500 object-contain"
            />
          </div>
          <div className="border border-[#d6eaff] group py-6 md:py-12 px-4 md:px-16 bg-white flex justify-center">
            <Image
              src={laravelImg}
              alt="Laravel"
              width={58}
              height={80}
              className="group-hover:scale-125 transition-all duration-500 object-contain"
            />
          </div>
          <div className="border border-[#d6eaff] group py-6 md:py-12 px-4 md:px-16 bg-white flex justify-center">
            <Image
              src={reactImg}
              alt="React"
              width={58}
              height={80}
              className="group-hover:scale-125 transition-all duration-500 object-contain"
            />
          </div>
          <div className="border border-[#d6eaff] group py-6 md:py-12 px-4 md:px-16 bg-white flex justify-center">
            <Image
              src={flutterImg}
              alt="Flutter"
              width={58}
              height={80}
              className="group-hover:scale-125 transition-all duration-500 object-contain"
            />
          </div>
          <div className="border border-[#d6eaff] group py-6 md:py-12 px-4 md:px-16 bg-white flex justify-center">
            <Image
              src={wordpressImg}
              alt="Wordpress"
              width={58}
              height={80}
              className="group-hover:scale-125 transition-all duration-500 object-contain"
            />
          </div>
          <div className="border border-[#d6eaff] group py-6 md:py-12 px-4 md:px-16 bg-white flex justify-center">
            <Image
              src={htmlImg}
              alt="HTML"
              width={58}
              height={80}
              className="group-hover:scale-125 transition-all duration-500 object-contain"
            />
          </div>
          <div className="border border-[#d6eaff] group py-6 md:py-12 px-4 md:px-16 bg-white flex justify-center">
            <Image
              src={cssImg}
              alt="Css"
              width={58}
              height={80}
              className="group-hover:scale-125 transition-all duration-500 object-contain"
            />
          </div>
          <div className="border border-[#d6eaff] group py-6 md:py-12 px-4 md:px-16 bg-white flex justify-center">
            <Image
              src={bootstrapImg}
              alt="Bootstrap"
              width={58}
              height={80}
              className="group-hover:scale-125 transition-all duration-500 object-contain"
            />
          </div>
          <div className="border border-[#d6eaff] group py-6 md:py-12 px-4 md:px-16 bg-white flex justify-center">
            <Image
              src={jqueryImg}
              alt="Jquery"
              width={58}
              height={80}
              className="group-hover:scale-125 transition-all duration-500 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsAndTechnologies;
