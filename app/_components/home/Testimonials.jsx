"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const titleRef = useRef(null);
  const [isTitleVisible, setIsTitleVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTitleVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
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

  const testimonials = [
    {
      customerImage: "/customer1.jpg",
      name: "John Doe",
      position: "CEO, TechCorp",
      review:
        "The team delivered an outstanding website that perfectly aligns with our brand. Their professionalism and attention to detail were exceptional!",
    },
    {
      customerImage: "/customer2.png",
      name: "Jane Smith",
      position: "Marketing Director, InnovateCo",
      review:
        "Working with this team was a breeze. They understood our needs and provided a responsive, user-friendly solution on time.",
    },
    {
      customerImage: "/customer3.png",
      name: "Michael Brown",
      position: "Founder, StartUpX",
      review:
        "Their expertise in web development and SEO optimization significantly boosted our online presence. Highly recommended!",
    },
  ];

  return (
    <div
      className="flex flex-col items-center justify-center gap-6 sm:gap-8 mt-8 pt-8 bg-[#FFF9F7] pb-8 md:pb-24 max-h-[410px] w-full relative overflow-hidden"
      style={{
        backgroundImage: `url(/testimonial1.jpeg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative w-full max-w-[90%] md:max-w-[1140px] px-4 z-10 flex flex-col items-center justify-center min-h-[441px]">
        <Swiper
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            bulletClass: "swiper-pagination-bullet bg-white opacity-70",
            bulletActiveClass:
              "swiper-pagination-bullet-active bg-[#FFBC13] opacity-100",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={900} // Increased transition speed
          modules={[Autoplay, Pagination]}
          className="w-full h-[300px] sm:h-[350px] md:h-[400px]"
          spaceBetween={20}
          slidesPerView={1}
          loop={true} // Enable infinite loop
          grabCursor={true} // Show grab cursor when hovering
          effect="fade" // Use fade effect for smoother transition
          fadeEffect={{
            crossFade: true, // Enable cross-fade between slides
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <div className="flex flex-col items-center justify-center text-center text-white bg-opacity-85 p-6 sm:p-8 md:p-20 rounded-lg max-w-[90%] sm:max-w-[80%] md:max-w-[800px] mx-auto shadow-lg transition-all duration-500 ease-in-out">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-4 border-2 border-[#FFBC13] rounded-full overflow-hidden">
                  <Image
                    src={testimonial.customerImage}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover shadow-sm p-2 bg-white"
                  />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">
                  {testimonial.name}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-[#fcdad1] mb-4">
                  {testimonial.position}
                </p>
                <div className="flex items-start ">
                  <RiDoubleQuotesL className="text-slate-100/65 inline-block text-4xl font-extrabold pr-1" />
                  <p
                    className="text-sm md:text-md lg:text-lg font-[500] text-white leading-relaxed
                   max-w-[100%]"
                  >
                    {testimonial.review}
                    <RiDoubleQuotesR className="pl-2 text-slate-100/65 inline-block text-4xl font-extrabold" />
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination mt-4 flex justify-center gap-2"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
