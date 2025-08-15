"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ServiceDetails = ({
  slug,
  caption,
  title1,
  description1,
  title2,
  description2,
}) => {
  const pathname = usePathname();

  // Capitalize slug for display
  const formattedSlug = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="min-h-screen bg-gray-100 pb-10 md:pb-16">
      {/* Breadcrumb */}
      <div
        className="pl-4 md:pl-8 lg:pl-16 text-sm md:text-base font-normal text-slate-600 my-4 pt-6"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <Link
          href="/"
          className="text-[#FFBC13] pr-2 hover:text-[#e0a712] transition-colors duration-300"
        >
          Home
        </Link>
        /<span className="text-slate-600 pl-2"> {formattedSlug}</span>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-[1140px] mx-auto px-4 flex flex-col gap-8 md:gap-12 mt-16">
        <div className="text-left">
          <h2
            className="mb-4 text-xl sm:text-2xl md:text-3xl font-normal text-[#635551] transition-all duration-1000 ease-out"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            {formattedSlug}
          </h2>
          <p
            className="text-sm md:text-base text-slate-600 mt-2 leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            {caption}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* First Section */}
          <div className="w-full md:w-1/2">
            <h4
              className="text-lg md:text-xl font-semibold text-[#635551] mb-2"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              {title1}
            </h4>
            <p
              className="text-sm md:text-base text-slate-600 leading-relaxed"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              {description1}
            </p>
          </div>

          {/* Second Section */}
          {title2 && description2 && (
            <div className="w-full md:w-1/2">
              <h4
                className="text-lg md:text-xl font-semibold text-[#635551] mb-2"
                data-aos="fade-left"
                data-aos-duration="800"
              >
                {title2}
              </h4>
              <p
                className="text-sm md:text-base text-slate-600 leading-relaxed"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                {description2}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
