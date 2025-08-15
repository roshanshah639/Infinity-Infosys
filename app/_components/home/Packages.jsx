"use client";
import React, { useEffect, useRef, useState } from "react";
import PackageCard from "./PackageCard";

const Packages = () => {
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
    <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 bg-white py-6 md:py-8 min-h-[400px]">
      <div className="w-full max-w-[90%] md:max-w-[1140px] px-4">
        <div className="text-center mb-6 md:mb-8">
          <h2
            ref={titleRef}
            className={`text-xl sm:text-2xl md:text-3xl font-semibold text-[#635551] transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-16"
            }`}
          >
            Packages
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 justify-center">
          <PackageCard
            title="Startup SME Package"
            period="Monthly"
            service1="Domain + SSL Certificate"
            service2="DDoS Attack Protection"
            service3="Web Hosting & Biz Mail"
            service4="Website Design & Development (Mobile, Tablet & PC Responsive)"
            service5="Social Media Management (Facebook & Instagram)"
            service6="On-Page SEO Optimization - Google Business Listing"
            btnText="Get Quote"
            btnLink="/contact"
          />
          <PackageCard
            title="News Portal"
            period="Monthly"
            service1="Domain + SSL Certificate"
            service2="DDoS Attack Protection"
            service3="Web Hosting & Biz Mail"
            service4="Website Design & Development (Mobile, Tablet & PC Responsive)"
            service5="Ads Booking Management"
            service6="Social Media Integration (Facebook, Instagram & Blog etc..)"
            service7="On-Page SEO Optimization - Google Business Listing"
            service8="On-Page SEO Optimization - Google Business Listing"
            service9="On-Page SEO Optimization - Google Business Listing"
            btnText="Get Quote"
            btnLink="/contact"
          />
          <PackageCard
            title="Startup SME Package"
            period="Monthly"
            service1="Domain + SSL Certificate"
            service2="DDoS Attack Protection"
            service3="Web Hosting & Biz Mail"
            service4="Website Design & Development (Mobile, Tablet & PC Responsive)"
            service5="Social Media Management (Facebook & Instagram)"
            service6="On-Page SEO Optimization - Google Business Listing"
            btnText="Get Quote"
            btnLink="/contact"
          />
          <PackageCard
            title="Startup SME Package"
            period="Monthly"
            service1="Domain + SSL Certificate"
            service2="DDoS Attack Protection"
            service3="Web Hosting & Biz Mail"
            service4="Website Design & Development (Mobile, Tablet & PC Responsive)"
            service5="Social Media Management (Facebook & Instagram)"
            service6="On-Page SEO Optimization - Google Business Listing"
            btnText="Get Quote"
            btnLink="/contact"
          />
        </div>
      </div>
    </div>
  );
};

export default Packages;
