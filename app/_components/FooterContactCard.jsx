import React from "react";
import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import nepalFlag from "@/public/nepal_flag.png";
import Image from "next/image";
import Link from "next/link";

const FooterContactCard = () => {
  return (
    <div
      className="bg-[#FBB404] text-slate-900 w-full min-h-[250px] flex flex-col items-start justify-start gap-4 md:gap-6 py-4 md:py-8 px-[30px] absolute -bottom-70 left-0 z-10 rounded transition-all duration-300 ease-in-out"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div className="text-left">
        <h2 className="text-lg md:text-xl font-[400] text-slate-900">
          Contact Us:
        </h2>
        <div className="flex flex-col items-center gap-3 mt-3 ml-3">
          <div className="flex flex-col items-center gap-1">
            <div className="rounded-full transform transition-transform duration-200 flex items-center justify-center gap-1">
              <FiPhone className="text-sm text-slate-700" />
              <Link
                href="tel:+97715314222"
                className="text-sm text-slate-700 transition-colors duration-200"
              >
                +977-1-5314222
              </Link>
            </div>

            <div className="rounded-full text-slate-700 transform transition-transform duration-200 flex items-center justify-center gap-1">
              <TfiEmail className="text-sm text-slate-700" />
              <Link
                href="mailto:info@infinityinfosys.com"
                className="text-sm text-slate-700 transition-colors duration-200"
              >
                info@infinityinfosys.com
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="text-left">
        <h2 className="text-lg font-[400] text-slate-800">Our Presence:</h2>
        <div className="flex flex-col items-center gap-3 ml-4">
          <div className="flex items-center gap-1 group">
            <div className="rounded-full transform group-hover:scale-110 transition-transform duration-200">
              <Image
                src={nepalFlag}
                alt="Nepal Flag"
                width={16}
                height={16}
                className="w-5 h-5 object-cover"
              />
            </div>
            <Link
              href="https://goo.gl/maps/VBQ4Uyj4FTb13ERr9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-700 transition-colors duration-200"
            >
              Kalimati, Kathmandu, Nepal
            </Link>
          </div>
        </div>
      </div>

      <div className="text-left">
        <p className="text-xs md:text-sm text-slate-800">
          © Copyright{" "}
          <span className="text-slate-900 font-semibold">Infinity Infosys</span>{" "}
          <br /> All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default FooterContactCard;
