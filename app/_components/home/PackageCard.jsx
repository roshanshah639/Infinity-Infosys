import Link from "next/link";
import React from "react";

const PackageCard = ({
  title,
  period,
  service1 = "",
  serice2,
  service3 = "",
  service4 = "",
  service5 = "",
  service6 = "",
  service7 = "",
  service8 = "",
  service9 = "",
  btnText,
  btnLink,
}) => {
  return (
    <div className="w-full max-w-[100%] sm:max-w-[466px] h-full min-h-[450px] sm:min-h-[516px] bg-white rounded-lg shadow-lg mx-auto">
      <div className="bg-[#FFBC13] flex items-center justify-center p-3 rounded-t-sm">
        <h2 className="text-lg sm:text-xl font-[500] text-white text-center">
          {title}
        </h2>
      </div>
      <div className="flex flex-col items-center justify-between py-4 sm:py-3 px-4">
        <h3 className="text-sm sm:text-md font-[400] text-[#cdada5] mb-4 text-center">
          {period}
        </h3>
        <ul className="list-none pl-4 sm:pl-6 flex flex-col items-start justify-center gap-3 sm:gap-4 w-full">
          <li className="text-xs sm:text-sm max-w-[90%] sm:max-w-[250px] leading-relaxed cursor-pointer">
            {service1}
          </li>
          <li className="text-xs sm:text-sm max-w-[90%] sm:max-w-[250px] leading-relaxed cursor-pointer">
            {serice2}
          </li>
          <li className="text-xs sm:text-sm max-w-[90%] sm:max-w-[250px] leading-relaxed cursor-pointer">
            {service3}
          </li>
          <li className="text-xs sm:text-sm max-w-[90%] sm:max-w-[250px] leading-relaxed cursor-pointer">
            {service4}
          </li>
          <li className="text-xs sm:text-sm max-w-[90%] sm:max-w-[250px] leading-relaxed cursor-pointer">
            {service5}
          </li>
          <li className="text-xs sm:text-sm max-w-[90%] sm:max-w-[250px] leading-relaxed cursor-pointer">
            {service6}
          </li>
          <li className="text-xs sm:text-sm max-w-[90%] sm:max-w-[250px] leading-relaxed cursor-pointer">
            {service7}
          </li>
          <li className="text-xs sm:text-sm max-w-[90%] sm:max-w-[250px] leading-relaxed cursor-pointer">
            {service8}
          </li>
          <li className="text-xs sm:text-sm max-w-[90%] sm:max-w-[250px] leading-relaxed cursor-pointer">
            {service9}
          </li>
          <div className="flex items-center justify-center w-full mt-4">
            <Link
              href={btnLink}
              className="text-sm sm:text-md font-[400] bg-[#FFBC13] px-6 sm:px-8 py-2 rounded text-white hover:text-[#584B48] transition-colors duration-300"
            >
              {btnText}
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default PackageCard;
