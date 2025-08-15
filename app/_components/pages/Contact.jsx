"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useRef, useState, useEffect } from "react";

// Inline SVG components to replace react-icons for a self-contained component
const SlLocationPin = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="text-xl font-extrabold text-[#FFBC13] w-6 h-6"
    fill="currentColor"
  >
    <path d="M12 2C8.686 2 6 4.686 6 8s6 14 6 14s6-10.686 6-14s-2.686-6-6-6zm0 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
  </svg>
);
const GoClock = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="text-xl font-extrabold text-[#FFBC13] w-6 h-6"
    fill="currentColor"
  >
    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
    <path d="M13 11h3.5v2H11V7h2z" />
  </svg>
);
const HiOutlineMail = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="text-xl font-extrabold text-[#FFBC13] w-6 h-6"
    fill="currentColor"
  >
    <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
  </svg>
);

// Main Contact component
const Contact = () => {
  const pathname = usePathname();

  // Ref for the title element to observe its visibility
  const titleRef = useRef(null);
  // State to manage the title's visibility for animation
  const [isTitleVisible, setIsTitleVisible] = useState(false);

  // Effect to set up the Intersection Observer
  useEffect(() => {
    // Create a new Intersection Observer instance
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the element is intersecting the viewport, set state to visible and disconnect the observer
        if (entry.isIntersecting) {
          setIsTitleVisible(true);
          observer.disconnect();
        }
      },
      {
        // The threshold is the percentage of the target's visibility required to trigger the callback
        threshold: 0.1,
      }
    );

    // If the title element exists, start observing it
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    // Cleanup function to unobserve the element when the component unmounts
    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <section id="contact" className="bg-white py-6 md:py-8 mb-16">
      <h2
        className="pl-11 lg:pl-16 text-sm font-[400] text-slate-600 my-4"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        {pathname === "/contact" ? (
          <>
            <Link href="/" className="text-[#FFBC13] pr-2">
              Home
            </Link>
            /<span className="text-slate-600 pl-2">Contact Us</span>
          </>
        ) : (
          "Why Choose Us"
        )}
      </h2>
      <div className="w-full max-w-[90%] md:max-w-[1140px] mx-auto px-4">
        <div className="text-left mb-6 md:mb-8">
          <h2
            ref={titleRef}
            className={`text-xl sm:text-2xl md:text-3xl font-[400] text-[#635551] transition-all duration-1000 ease-out ${
              isTitleVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-16"
            }`}
          >
            Contact Us
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-8">
          {/* Contact Info - Visible only on small devices (below md) */}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Our Address Card (already perfect) */}
              <div className="bg-white p-5 rounded-lg shadow-lg transition-all duration-500 ease-out">
                <div className="flex items-center text-center gap-2">
                  <div className="rounded-full border-[1.2px] border-dashed border-[#FFBC13] p-2 mb-2">
                    <SlLocationPin />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <h3 className="text-base font-semibold text-[#635551] pl-3 mb-1.5">
                      Our Address
                    </h3>
                    <p className="text-sm text-gray-600">
                      <a
                        href="https://goo.gl/maps/VBQ4Uyj4FTb13ERr9"
                        className="text-gray-600 hover:text-[#FFBC13] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        📍Kalimati, Kathmandu, Nepal
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              {/* Working Hours Card (now matching location) */}
              <div className="bg-white p-5 rounded-lg shadow-lg transition-all duration-500 ease-out">
                <div className="flex items-center text-center gap-2">
                  <div className="rounded-full border-[1.2px] border-dashed border-[#FFBC13] p-2 mb-2">
                    <GoClock />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <h3 className="text-base font-semibold text-[#635551] pl-3 mb-1.5">
                      Working Hours
                    </h3>
                    <p className="text-sm text-gray-600 inline-block pl-2.5">
                      10:45 AM - 5:45 PM
                    </p>
                  </div>
                </div>
              </div>
              {/* Email Us Card (now matching location) */}
              <div className="bg-white p-5 rounded-lg shadow-lg transition-all duration-500 ease-out">
                <div className="flex items-center text-center gap-2">
                  <div className="rounded-full border-[1.2px] border-dashed border-[#FFBC13] p-2 mb-2">
                    <HiOutlineMail />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <h3 className="text-base font-semibold text-[#635551] pl-3 mb-1.5">
                      Email Us
                    </h3>
                    <p className="text-sm text-gray-600">
                      <a
                        href="mailto:info@infinityinfosys.com"
                        className="text-gray-600 hover:text-[#FFBC13] transition-colors pl-2.5"
                      >
                        info@infinityinfosys.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full">
            {/* Map - Visible only on md screens */}
            <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14130.534486723096!2d85.2965079!3d27.6977165!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x744e833f0a741101!2sInfinity%20Infosys%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1669453576228!5m2!1sen!2snp"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-lg shadow-lg shadow-slate-400 w-full">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="flex flex-col gap-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFBC13] text-sm text-gray-600"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFBC13] text-sm text-gray-600"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFBC13] text-sm text-gray-600"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFBC13] text-sm text-gray-600"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="my-3 hidden">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-[#FFBC13] text-white font-semibold py-2 px-6 rounded-md hover:bg-[#584B48] transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
