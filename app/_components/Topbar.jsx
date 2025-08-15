"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BsEnvelope, BsPhone, BsPerson, BsBuilding } from "react-icons/bs";
import { FiX } from "react-icons/fi";
import { BiSolidPhone } from "react-icons/bi";

const Topbar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    services: {
      localSEO: false,
      onPageSEO: false,
      offPageSEO: false,
      technicalSEO: false,
      appDevelopment: false,
      apiIntegration: false,
      websiteSEOAudit: false,
      digitalMarketing: false,
      socialMediaMarketing: false,
    },
  });

  // Toggle body scroll and handle animations
  useEffect(() => {
    if (isPopupOpen) {
      document.body.classList.add("overflow-hidden");
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => {
        document.body.classList.remove("overflow-hidden");
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isPopupOpen]);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      services: {
        ...formData.services,
        [e.target.name]: e.target.checked,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    togglePopup();
  };

  return (
    <>
      <div className="w-full h-10 flex items-center bg-[#39312F] text-white">
        <div className="px-3 max-w-[1140px] w-full mx-auto flex items-center justify-start sm:justify-center lg:justify-between">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center justify-center gap-1">
              <BsEnvelope className="text-[#ffbc13] text-sm" />
              <Link
                href="mailto:info@infinityinfosys.com"
                className="text-sm hidden sm:block hover:text-[#ffbc13] transition-colors duration-200"
              >
                info@infinityinfosys.com
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <Link
                href="tel:+977-1-444-4444"
                className="hover:text-[#ffbc13] transition-colors duration-200"
              >
                <BsPhone className="text-[#ffbc13] text-sm" />
              </Link>
            </div>
          </div>

          <button
            onClick={togglePopup}
            className="hidden lg:block text-sm font-semibold bg-[#ffbc13] h-auto py-2.5 px-5 hover:bg-[#FF6B3B] transition-all duration-300"
          >
            Get Quote
          </button>
        </div>
      </div>

      {/* Popup Overlay */}
      <div
        className={`fixed min-h-[450px] inset-0 bg-black/85 bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${
          isPopupOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Popup Content */}
        <div
          className={`bg-white rounded-lg p-4 sm:p-6 w-[calc(100%-2rem)] max-w-[600px] 
            relative transition-all duration-300 transform ${
              isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0"
            } max-h-[calc(100vh-4rem)] overflow-y-auto`}
        >
          {/* Close Icon */}
          <button
            onClick={togglePopup}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-600 hover:text-gray-800 transition-colors duration-200 cursor-pointer"
            aria-label="Close popup"
          >
            <FiX className="text-xl sm:text-2xl" />
          </button>

          {/* Title */}
          <h2 className="text-xl font-semibold text-center mb-4 sm:mb-6 text-gray-600">
            Tell Us About Your Project
          </h2>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 sm:gap-6"
          >
            {/* Input Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex items-center gap-2 border border-slate-300 rounded p-2">
                <BsPerson className="text-[#ffbc13] text-lg" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full outline-none text-gray-700 text-sm sm:text-base pb-0.5"
                  required
                />
              </div>
              <div className="flex items-center gap-2 border border-slate-300 rounded p-2">
                <BsBuilding className="text-[#ffbc13] text-lg" />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Company"
                  className="w-full outline-none text-gray-700 text-sm sm:text-base pb-0.5"
                />
              </div>
              <div className="flex items-center gap-2 border border-slate-300 rounded p-2">
                <BsEnvelope className="text-[#ffbc13] text-lg" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="w-full outline-none text-gray-700 text-sm sm:text-base pb-0.5"
                  required
                />
              </div>
              <div className="flex items-center gap-2 border border-slate-300 rounded p-2">
                <BiSolidPhone className="text-[#ffbc13] text-xl" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone"
                  className="w-full outline-none text-gray-700 text-sm sm:text-base pb-0.5"
                />
              </div>
              <div className="md:col-span-2">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message"
                  className="w-full border border-slate-300 rounded p-2 sm:p-3 text-sm sm:text-base text-gray-700 outline-none"
                  rows={4}
                />
              </div>
            </div>

            {/* Services Checkboxes */}
            <div
              className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 
            max-h-[400px] sm:max-h-[400px] overflow-y-auto p-1"
            >
              {[
                { label: "Local SEO", name: "localSEO" },
                { label: "On-Page SEO", name: "onPageSEO" },
                { label: "Off-Page SEO", name: "offPageSEO" },
                { label: "Technical SEO", name: "technicalSEO" },
                { label: "App Development", name: "appDevelopment" },
                { label: "API Integration", name: "apiIntegration" },
                { label: "Website SEO Audit", name: "websiteSEOAudit" },
                { label: "Digital Marketing", name: "digitalMarketing" },
                {
                  label: "Social Media Marketing",
                  name: "socialMediaMarketing",
                },
              ].map((service) => (
                <label
                  key={service.name}
                  className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-50 rounded"
                >
                  <input
                    type="checkbox"
                    name={service.name}
                    checked={formData.services[service.name]}
                    onChange={handleCheckboxChange}
                    className="h-3 w-3 sm:h-4 sm:w-4 text-[#ffbc13] border-gray-300 rounded focus:ring-[#ffbc13]"
                  />
                  {service.label}
                </label>
              ))}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-2 sm:mt-4">
              <button
                type="submit"
                className="bg-[#ffbc13] text-white font-semibold py-2 px-8 rounded-full hover:bg-[#FF6B3B] transition-all duration-300 text-sm sm:text-base"
              >
                Get a Quote
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Topbar;
