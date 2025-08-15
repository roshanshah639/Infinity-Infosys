// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { IoIosHelpCircleOutline } from "react-icons/io";
// import { FiChevronDown } from "react-icons/fi";
// import { FiChevronUp } from "react-icons/fi";

// const Faqs = () => {
//   const titleRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.disconnect(); // Stop observing after first visibility
//         }
//       },
//       {
//         threshold: 0.1, // Trigger when 10% of the element is visible
//       }
//     );

//     if (titleRef.current) {
//       observer.observe(titleRef.current);
//     }

//     return () => {
//       if (titleRef.current) {
//         observer.unobserve(titleRef.current);
//       }
//     };
//   }, []);
//   return (
//     <div className="bg-[#FFF9F7] py-6 md:py-8">
//       <div className="w-full max-w-[90%] md:max-w-[1140px] px-4">
//         <div className="text-center mb-6 md:mb-8">
//           <h2
//             ref={titleRef}
//             className={`text-xl sm:text-2xl md:text-3xl font-semibold text-[#635551] transition-all duration-1000 ease-out ${
//               isVisible
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-16"
//             }`}
//           >
//             F.A.Qs
//           </h2>
//         </div>

//         <div className="faq-list">
//           <ul className="flex flex-col items-center justify-center">
//             <li
//               data-aos="fade-up"
//               data-aos-delay=""
//               className="aos-init aos-animate"
//             >
//               <IoIosHelpCircleOutline />
//               <a
//                 data-bs-toggle="collapse"
//                 data-bs-target="#faq-list-0"
//                 className="collapse collapsed"
//                 aria-expanded="false"
//               >
//                 What are the current management tools of your company?
//                 <FiChevronDown />
//                 <FiChevronUp />
//               </a>
//               <div
//                 id="faq-list-0"
//                 className="collapse"
//                 data-bs-parent=".faq-list"
//               >
//                 <p>
//                   We have over Own Management Tool: goWork by Infinity Infosys
//                   Task management: goWork Time tracking: goWork Communication:
//                   goWork, Skype, Telegram, Viber, WhatsApp Source code: Gitlab,
//                   Firebase. Documentation: Microsoft Team &amp; Onedrive
//                 </p>
//               </div>
//             </li>
//             <li
//               data-aos="fade-up"
//               data-aos-delay="200"
//               className="aos-init aos-animate"
//             >
//               <IoIosHelpCircleOutline />
//               <a
//                 data-bs-toggle="collapse"
//                 data-bs-target="#faq-list-2"
//                 className="collapsed"
//                 aria-expanded="false"
//               >
//                 What are the levels of software engineers in your company?
//                 <FiChevronDown />
//                 <FiChevronUp />
//               </a>
//               <div
//                 id="faq-list-2"
//                 className="collapse"
//                 data-bs-parent=".faq-list"
//               >
//                 <p>
//                   We have senior (5-7 years exp), intermediate &amp; junior
//                   developers and we apply a flat rate for our developers in our
//                   projects.
//                 </p>
//               </div>
//             </li>
//             <li
//               data-aos="fade-up"
//               data-aos-delay="300"
//               className="aos-init aos-animate"
//             >
//               <IoIosHelpCircleOutline />
//               <a
//                 data-bs-toggle="collapse"
//                 data-bs-target="#faq-list-3"
//                 className="collapsed"
//                 aria-expanded="false"
//               >
//                 After the project is finished, how will the maintenance look?
//                 <FiChevronDown />
//                 <FiChevronUp />
//               </a>
//               <div
//                 id="faq-list-3"
//                 className="collapse"
//                 data-bs-parent=".faq-list"
//               >
//                 <p>
//                   There are 3 types of maintenance : • If there's a bug or any
//                   issue within the project scope in the contract, then we'll
//                   support to fix free within 3 months from the date of delivery.
//                   • If you change a request or extra feature outside the project
//                   scope, we'll estimate and make a new contract, charging an
//                   additional amount. • Timeline and project scope won't matter
//                   if you want to start a new hourly contract to maintain the
//                   product.
//                 </p>
//               </div>
//             </li>
//             <li
//               data-aos="fade-up"
//               data-aos-delay="400"
//               className="aos-init aos-animate"
//             >
//               <IoIosHelpCircleOutline />
//               <a
//                 data-bs-toggle="collapse"
//                 data-bs-target="#faq-list-4"
//                 className="collapsed"
//                 aria-expanded="false"
//               >
//                 I want to build a new website, what documents should I send you?
//                 <FiChevronDown />
//                 <FiChevronUp />
//               </a>
//               <div
//                 id="faq-list-4"
//                 className="collapse"
//                 data-bs-parent=".faq-list"
//               >
//                 <p>
//                   You can answer our questionnaire as well as send us related
//                   documents about the product (requirements, timeline, mockups,
//                   designs, etc.)
//                 </p>
//               </div>
//             </li>
//             <li
//               data-aos="fade-up"
//               data-aos-delay="500"
//               className="aos-init aos-animate"
//             >
//               <IoIosHelpCircleOutline />
//               <a
//                 data-bs-toggle="collapse"
//                 data-bs-target="#faq-list-5"
//                 className=""
//                 aria-expanded="true"
//               >
//                 What are your working methods?
//                 <FiChevronDown />
//                 <FiChevronUp />
//               </a>
//               <div
//                 id="faq-list-5"
//                 className="collapse show"
//                 data-bs-parent=".faq-list"
//               >
//                 <p>
//                   We apply Agile methodology to most of the projects. There'll
//                   be sprint meetings and reviews so that everything is
//                   transparent. Besides, we also code in pairs to improve
//                   productivity and reduce errors.
//                 </p>
//               </div>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Faqs;

"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Faqs = () => {
  const titleRef = useRef(null);
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(4); // Default to last FAQ open

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTitleVisible(true);
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

  const faqs = [
    {
      question: "What are the current management tools of your company?",
      answer:
        "We have over Own Management Tool: goWork by Infinity Infosys Task management: goWork Time tracking: goWork Communication: goWork, Skype, Telegram, Viber, WhatsApp Source code: Gitlab, Firebase. Documentation: Microsoft Team & Onedrive",
    },
    {
      question: "What are the levels of software engineers in your company?",
      answer:
        "We have senior (5-7 years exp), intermediate & junior developers and we apply a flat rate for our developers in our projects.",
    },
    {
      question: "After the project is finished, how will the maintenance look?",
      answer:
        "There are 3 types of maintenance: • If there's a bug or any issue within the project scope in the contract, then we'll support to fix free within 3 months from the date of delivery. • If you change a request or extra feature outside the project scope, we'll estimate and make a new contract, charging an additional amount. • Timeline and project scope won't matter if you want to start a new hourly contract to maintain the product.",
    },
    {
      question:
        "I want to build a new website, what documents should I send you?",
      answer:
        "You can answer our questionnaire as well as send us related documents about the product (requirements, timeline, mockups, designs, etc.)",
    },
    {
      question: "What are your working methods?",
      answer:
        "We apply Agile methodology to most of the projects. There'll be sprint meetings and reviews so that everything is transparent. Besides, we also code in pairs to improve productivity and reduce errors.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 bg-[#FFF9F7] py-6 md:py-8 min-h-[400px]">
      <div className="w-full max-w-[90%] md:max-w-[1140px] px-4">
        <div className="text-center mb-6 md:mb-8">
          <h2
            ref={titleRef}
            className={`text-xl sm:text-2xl md:text-3xl font-semibold text-[#635551] transition-all duration-1000 ease-out ${
              isTitleVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-16"
            }`}
          >
            F.A.Qs
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center">
          <ul className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <li
                key={index}
                className="bg-white rounded-lg shadow-md transition-all duration-300 ease-out list-none"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <IoIosHelpCircleOutline className="text-xl sm:text-2xl text-[#635551] flex-shrink-0" />
                    <span className="text-sm md:text-lg font-[400] text-[#635551] max-w-[100%]">
                      {faq.question}
                    </span>
                  </div>
                  {openIndex === index ? (
                    <FiChevronUp className="text-xl sm:text-2xl text-[#635551] flex-shrink-0" />
                  ) : (
                    <FiChevronDown className="text-xl sm:text-2xl text-[#635551] flex-shrink-0" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-justify text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
