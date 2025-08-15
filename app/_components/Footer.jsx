import React from "react";
import FooterContactCard from "./FooterContactCard";
import Link from "next/link";
import { RiArrowDropRightLine } from "react-icons/ri";
import { FiArrowRight } from "react-icons/fi";
import {
  BiLogoBaidu,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoPinterest,
  BiLogoTelegram,
  BiLogoTiktok,
  BiLogoVk,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaViber } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { SiRumble } from "react-icons/si";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#212529] w-full relative pt-10 lg:pt-0">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Card - Positioned properly for desktop */}
        <div className="hidden lg:block absolute left-8 -top-10 w-[300px] z-10">
          <FooterContactCard />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10 lg:ml-[350px]">
          {/* Useful Links - Hidden on mobile, shown in accordion */}
          <div className="hidden lg:block">
            <div className="flex flex-col gap-6">
              <h2 className="text-lg font-[500] text-[#FFBC13]">
                Useful Links
              </h2>
              <div className="flex flex-col gap-5">
                {[
                  { name: "Blogs", href: "#" },
                  { name: "Career", href: "/careers" },
                  { name: "About Us", href: "/about-us" },
                  { name: "Our Associate", href: "#" },
                  { name: "Privacy Policy", href: "#" },
                  { name: "Digital Content", href: "#" },
                  { name: "Terms of Service", href: "#" },
                ].map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-1 text-sm text-white hover:text-[#FFBC13] transition-all duration-300 group"
                  >
                    <RiArrowDropRightLine className="text-lg transform group-hover:translate-x-1 transition-transform duration-300" />
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Our Services - Hidden on mobile, shown in accordion */}
          <div className="hidden lg:block">
            <div className="flex flex-col gap-6">
              <h2 className="text-lg font-[500] text-[#FFBC13]">
                Our Services
              </h2>
              <div className="flex flex-col gap-5">
                {[
                  {
                    name: "Website and Mobile Optimization",
                    href: "/services/website-and-mobile-optimization",
                  },
                  {
                    name: "Social Media Optimization",
                    href: "/services/social-media-optimization",
                  },
                  {
                    name: "Graphic Designing",
                    href: "/services/graphic-designing",
                  },
                  {
                    name: "Web Development",
                    href: "/services/web-development",
                  },
                  {
                    name: "E-Commerce Management",
                    href: "/services/e-commerce-management",
                  },
                  {
                    name: "Social Media Management",
                    href: "/services/social-media-management",
                  },
                  {
                    name: "Search Engine Optimization",
                    href: "/services/search-engine-optimization",
                  },
                ].map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-1 text-sm text-white hover:text-[#FFBC13] transition-all duration-300 group"
                  >
                    <RiArrowDropRightLine className="text-lg transform group-hover:translate-x-1 transition-transform duration-300" />
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter & Social Media */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex flex-col gap-6">
              {/* Mobile Logo - Only on mobile */}
              <div className="lg:hidden bg-white p-6 rounded-lg">
                <div className="flex flex-col items-center gap-4">
                  <Link href="/" className="flex items-center">
                    <Image
                      src="/logo.png"
                      alt="Company Logo"
                      width={160}
                      height={40}
                      className="h-10 w-auto object-contain"
                    />
                  </Link>
                  <p className="text-sm text-slate-700 text-center">
                    Infinity Infosys is a forward-thinking company that is
                    committed to providing cutting-edge IT solutions to its
                    clients.
                  </p>
                </div>
              </div>

              {/* Newsletter - Hidden on mobile */}
              <div className="hidden lg:block">
                <h2 className="text-lg font-[500] text-[#FFBC13]">
                  Subscribe for Latest Newsletter
                </h2>
                <p className="text-sm text-white leading-relaxed mt-2">
                  Stay in touch with us to be the first to know about latest
                  offers
                </p>
                <div className="mt-4 space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full p-3 bg-white text-slate-900 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFBC13] text-sm transition-all duration-300"
                  />
                  <Link
                    href="#"
                    className="w-full p-3 flex items-center justify-center gap-2 text-base text-white font-semibold bg-[#FFBC13] rounded-md hover:bg-[#e0a712] transition-all duration-300"
                  >
                    SUBSCRIBE NOW <FiArrowRight className="text-lg" />
                  </Link>
                </div>
              </div>

              {/* Social Media - Always visible */}
              <div>
                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  {[
                    { icon: BiLogoFacebook, href: "#" },
                    { icon: BiLogoInstagram, href: "#" },
                    { icon: BiLogoLinkedin, href: "#" },
                    { icon: BiLogoPinterest, href: "#" },
                    { icon: BiLogoTelegram, href: "#" },
                    { icon: FaViber, href: "#" },
                    { icon: BsTwitterX, href: "#" },
                    { icon: BiLogoVk, href: "#" },
                    { icon: BiLogoBaidu, href: "#" },
                    { icon: BiLogoTiktok, href: "#" },
                    { icon: BiLogoYoutube, href: "#" },
                    { icon: SiRumble, href: "#" },
                  ].map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      className={`p-2 rounded-full transition-all duration-300 ${
                        social.href === "#"
                          ? "cursor-pointer"
                          : "cursor-pointer"
                      } bg-white text-[#FFBC13] hover:bg-[#FFBC13] hover:text-white`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="text-xl" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Accordion Menu */}
      <div className="lg:hidden bg-[#2c3034]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-700 py-6">
            <div className="grid grid-cols-1 gap-6">
              {/* Useful Links Accordion */}
              <div>
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-lg font-semibold text-[#FFBC13]">
                      Useful Links
                    </h3>
                    <svg
                      className="w-5 h-5 text-white group-open:rotate-90 transform transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </summary>
                  <div className="mt-4 pl-4">
                    <div className="flex flex-col gap-3">
                      {[
                        { name: "Blogs", href: "#" },
                        { name: "Career", href: "/careers" },
                        { name: "About Us", href: "/about" },
                        { name: "Our Associate", href: "#" },
                        { name: "Privacy Policy", href: "#" },
                        { name: "Digital Content", href: "#" },
                        { name: "Terms of Service", href: "#" },
                      ].map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="flex items-center gap-1 text-sm text-white hover:text-[#FFBC13] transition-all duration-300 group"
                        >
                          <RiArrowDropRightLine className="text-lg transform group-hover:translate-x-1 transition-transform duration-300" />
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </details>
              </div>

              {/* Our Services Accordion */}
              <div>
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-lg font-semibold text-[#FFBC13]">
                      Our Services
                    </h3>
                    <svg
                      className="w-5 h-5 text-white group-open:rotate-90 transform transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </summary>
                  <div className="mt-4 pl-4">
                    <div className="flex flex-col gap-3">
                      {[
                        {
                          name: "Website and Mobile Optimization",
                          href: "/services/website-and-mobile-optimization",
                        },
                        {
                          name: "Social Media Optimization",
                          href: "/services/social-media-optimization",
                        },
                        {
                          name: "Graphic Designing",
                          href: "/services/graphic-designing",
                        },
                        {
                          name: "Web Development",
                          href: "/services/web-development",
                        },
                        {
                          name: "E-Commerce Management",
                          href: "/services/e-commerce-management",
                        },
                        {
                          name: "Social Media Management",
                          href: "/services/social-media-management",
                        },
                        {
                          name: "Search Engine Optimization",
                          href: "/services/search-engine-optimization",
                        },
                      ].map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="flex items-center gap-1 text-sm text-white hover:text-[#FFBC13] transition-all duration-300 group"
                        >
                          <RiArrowDropRightLine className="text-lg transform group-hover:translate-x-1 transition-transform duration-300" />
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#1a1e21] py-4 flex lg:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Infinity Infosys. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
