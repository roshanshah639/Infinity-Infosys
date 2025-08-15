import React from "react";
import Hero from "./Hero";
import HeroCardSection from "./HeroCardSection";
import Glance from "./Glance";
import VisionContainer from "./VisionContainer";
import ToolsAndTechnologies from "./ToolsAndTech";
import Services from "./Services";
import Packages from "./Packages";
import Faqs from "./Faqs";
import Testimonials from "./Testimonials";
import HerocardSpace from "./HerocardSpace";
import Contact from "./Contact";

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <div className="relative mt-8 sm:mt-12 md:mt-[29px] mb-0 md:mb-8">
        <HeroCardSection />
      </div>
      {/* <HerocardSpace /> */}
      <Glance />
      <div className="min-h-screen bg-gray-50">
        <Services />
      </div>
      <VisionContainer />
      <ToolsAndTechnologies />
      <Packages />
      <Faqs />
      <Testimonials />
      <Contact />
      {/* <HerocardSpace /> */}

    </div>
  );
};

export default HomePage;
