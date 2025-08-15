// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React from "react";

// const Career = () => {
//   const pathname = usePathname();
//   return (
//     <div className="min-h-screen">
//       <h2
//         className="pl-11 lg:pl-16 text-sm font-[400] text-slate-600 my-4"
//         data-aos="fade-up"
//         data-aos-duration="800"
//       >
//         {pathname === "/careers" ? (
//           <>
//             <Link href="/" className="text-[#FFBC13] pr-2">
//               Home
//             </Link>
//             /<span className="text-slate-600 pl-2"> Careers</span>
//           </>
//         ) : (
//           "Why Choose Us"
//         )}
//       </h2>
//       <div className="w-full max-w-[90%] md:max-w-[1140px] mx-auto px-4">
//         <div className="text-left mb-6 md:mb-8">
//           <h2 className="text-xl sm:text-2xl md:text-3xl font-[400] text-[#635551] transition-all duration-1000 ease-out">
//             Careers
//           </h2>
//         </div>
//         <div className="flex flex-col items-center justify-center gap-4">
//           <Image
//             src="/career1.jpg"
//             alt="Career"
//             width={100}
//             height={100}
//             className="w-full h-auto object-contain"
//           />
//           <p className="text-md font-[400] text-slate-600">
//             Join Infinity Infosys Pvt Ltd to advance your career. Let us know
//             your area of expertise by filling out the form below. We'll connect
//             with you to explore career opportunities together. Contact us
//             anytime to learn more! If you're interested in advancing your career
//             with us, simply fill out the form below to get started.
//           </p>
//         </div>

//         <div className="flex items-center justify-between my-8">
//           <div className="w-[50%]">
//             <h2>Different Job Positions</h2>
//           </div>
//           <div className="w-[50%]">
//             <h2>Apply for job</h2>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Career;

"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Career = () => {
  const pathname = usePathname();
  const [activeJob, setActiveJob] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    address: "",
    email: "",
    phone: "",
    qualification: "",
    position: "",
    about: "",
    cv: null,
  });

  const jobPositions = [
    {
      title: "Web Developer",
      description:
        "Develop and maintain responsive websites using modern frameworks like React and Next.js.",
    },
    {
      title: "Mobile App Developer",
      description:
        "Build cross-platform mobile applications with a focus on performance and user experience.",
    },
    {
      title: "Graphic Designer",
      description:
        "Create visually stunning designs for digital and print media, aligning with brand guidelines.",
    },
    {
      title: "SEO Specialist",
      description:
        "Optimize websites to improve search engine rankings and drive organic traffic.",
    },
    {
      title: "Social Media Manager",
      description:
        "Manage social media accounts, create engaging content, and analyze performance metrics.",
    },
    {
      title: "E-Commerce Specialist",
      description:
        "Oversee online store operations, including product listings and customer experience.",
    },
    {
      title: "UI/UX Designer",
      description:
        "Design intuitive and user-friendly interfaces for web and mobile applications.",
    },
    {
      title: "Digital Marketing Manager",
      description:
        "Develop and execute digital marketing strategies to enhance brand visibility.",
    },
    {
      title: "Backend Developer",
      description:
        "Build and maintain server-side applications and APIs for seamless functionality.",
    },
    {
      title: "Project Manager",
      description:
        "Lead IT projects, ensuring timely delivery and alignment with client requirements.",
    },
  ];

  const toggleJobDescription = (index) => {
    setActiveJob(activeJob === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here (e.g., API call)
  };

  return (
    <div className="min-h-screen bg-white pb-10">
      <h2
        className="pl-4 md:pl-8 lg:pl-16 text-sm md:text-base font-normal text-slate-600 my-4"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        {pathname === "/careers" ? (
          <>
            <Link
              href="/"
              className="text-[#FFBC13] pr-2 hover:text-[#e0a712] transition-colors duration-300"
            >
              Home
            </Link>
            /<span className="text-slate-600 pl-2"> Careers</span>
          </>
        ) : (
          "Why Choose Us"
        )}
      </h2>
      <div className="flex flex-col items-center gap-8 md:gap-12 w-full max-w-[1140px] mx-auto px-4">
        <div className="text-left w-full">
          <h2
            className="text-xl sm:text-2xl md:text-3xl font-normal text-[#635551] transition-all duration-1000 ease-out"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Careers
          </h2>
        </div>
        <div className="w-full">
          <Image
            src="/career1.jpg"
            alt="Career"
            width={1200}
            height={400}
            className="w-full h-auto object-contain rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-duration="800"
          />
          <p
            className="text-sm md:text-base font-normal text-slate-600 mt-4 leading-relaxed text-center md:text-left"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Join Infinity Infosys Pvt Ltd to advance your career. Let us know
            your area of expertise by filling out the form below. We'll connect
            with you to explore career opportunities together. Contact us
            anytime to learn more! If you're interested in advancing your career
            with us, simply fill out the form below to get started.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 w-full">
          {/* Different Job Positions */}
          <div className="w-full lg:w-[50%]">
            <h2
              className="text-lg md:text-xl font-semibold text-[#635551] mb-4"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              Different Job Positions
            </h2>
            <div className="flex flex-col gap-3">
              {jobPositions.map((job, index) => (
                <div
                  key={job.title}
                  className="bg-white rounded-lg shadow-sm p-4 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={index * 100}
                >
                  <button
                    onClick={() => toggleJobDescription(index)}
                    className="flex items-center justify-between w-full text-left text-sm md:text-base font-[400] text-slate-700 hover:text-[#FFBC13] transition-colors duration-300"
                  >
                    {job.title}
                    {activeJob === index ? (
                      <FiChevronUp className="text-lg" />
                    ) : (
                      <FiChevronDown className="text-lg" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      activeJob === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <p className="text-sm md:text-base text-slate-600 mt-2 leading-relaxed">
                      {job.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Apply for Job Form */}
          <div className="w-full lg:w-[50%]">
            <h2
              className="text-lg md:text-xl font-semibold text-[#635551] mb-4"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              Apply for Job
            </h2>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-4"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full sm:w-1/2">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full p-2 border-[1.3px] border-gray-300 rounded-md focus:outline-none hover:border-[#FFBC13] text-sm transition-all duration-300"
                    required
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full p-2 border-[1.3px] border-gray-300 rounded-md focus:outline-none hover:border-[#FFBC13] text-sm transition-all duration-300"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="dob"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  className="w-full p-2 border-[1.3px] border-gray-300 rounded-md focus:outline-none hover:border-[#FFBC13] text-sm transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full p-2 border-[1.3px] border-gray-300 rounded-md focus:outline-none hover:border-[#FFBC13] text-sm transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border-[1.3px] border-gray-300 rounded-md focus:outline-none hover:border-[#FFBC13] text-sm transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Phone No.
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-2 border-[1.3px] border-gray-300 rounded-md focus:outline-none hover:border-[#FFBC13] text-sm transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="qualification"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Qualification
                </label>
                <input
                  type="text"
                  id="qualification"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleInputChange}
                  className="w-full p-2 border-[1.3px] border-gray-300 rounded-md focus:outline-none hover:border-[#FFBC13] text-sm transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="position"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Apply for Position
                </label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  className="w-full p-2 border-[1.3px] border-gray-300 rounded-md focus:outline-none hover:border-[#FFBC13] text-sm transition-all duration-300"
                  required
                >
                  <option value="" disabled>
                    Select a position
                  </option>
                  {jobPositions.map((job) => (
                    <option key={job.title} value={job.title}>
                      {job.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="about"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Tell Us About Yourself
                </label>
                <textarea
                  id="about"
                  name="about"
                  value={formData.about}
                  onChange={handleInputChange}
                  className="w-full p-2 border-[1.3px] border-gray-300 rounded-md focus:outline-none hover:border-[#FFBC13] text-sm transition-all duration-300 resize-none h-24"
                  required
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="cv"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  CV (DOC file)
                </label>
                <input
                  type="file"
                  id="cv"
                  name="cv"
                  accept=".doc,.docx"
                  onChange={handleInputChange}
                  className="w-full p-2 border-[1.3px] border-gray-300 rounded-md focus:outline-none hover:border-[#FFBC13] text-sm transition-all duration-300"
                  required
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#FFBC13] text-white font-semibold rounded hover:bg-[#e0a712] transition-all duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
