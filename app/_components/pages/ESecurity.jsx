"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const ESecurityPage = () => {
  const pathname = usePathname();

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div
        className="pl-4 md:pl-8 lg:pl-16 text-sm md:text-base font-normal text-slate-600 my-4"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <Link
          href="/"
          className="text-[#FFBC13] pr-2 hover:text-[#e0a712] transition-colors duration-300"
        >
          Home
        </Link>
        /<span className="text-slate-600 pl-2"> eSecurityCart</span>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-[1140px] mx-auto px-4 flex flex-col gap-8 md:gap-12">
        <div className="text-left pt-8">
          <h2
            className="text-xl sm:text-2xl md:text-3xl font-normal text-[#635551] transition-all duration-1000 ease-out"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            eSecurityCart
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
          {/* Main Image */}
          <div
            className="w-full md:w-[60%] flex items-center justify-center"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <Image
              src="/esecuritycart1.jpg"
              alt="eSecurityCart Main"
              width={820}
              height={360}
              className="w-full h-auto rounded object-contain shadow-md"
              priority
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-[40%] flex flex-col items-start justify-center px-4 gap-4">
            <Image
              src="/esecuritycart2.jpg"
              alt="eSecurityCart Logo"
              width={324}
              height={122}
              className="w-full h-auto rounded object-contain"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="100"
            />
            <div
              className="flex flex-col gap-3"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <p className="text-sm md:text-base text-slate-600">
                <span className="font-semibold">Category</span>: Electronic
                Security Product
              </p>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed text-justify">
                eSecurityCart is Nepal's top multi-brand electronic security
                product e-commerce platform. Browse{" "}
                <Link
                  href="https://www.esecuritycart.com"
                  className="text-[#FFBC13] hover:text-[#e0a712] transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.esecuritycart.com
                </Link>{" "}
                to explore our wide range of products. We ensure high customer
                loyalty and timely delivery to your doorstep.
              </p>
              <Link
                href="https://www.esecuritycart.com"
                className="text-center bg-[#FFBC13] text-md text-white font-[400] hover:text-slate-900 px-4 py-2 rounded-md hover:bg-[#e0a712] transition-all duration-300 mt-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ESecurityPage;
