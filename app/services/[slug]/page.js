import ServiceDetails from "@/app/_components/pages/ServiceDetails";
import React from "react";

const ServiceDetailsRoute = async ({ params }) => {
  const { slug } = await params;

  const serviceContent = {
    "website-and-mobile-optimization": {
      caption:
        "We provide comprehensive optimization services for websites and mobile applications to enhance performance and user experience.",
      title1: "Website Optimization",
      description1:
        "For WordPress sites, we optimize caching plugins, compress images, and refine code to boost page load times. For Laravel, we implement caching mechanisms, optimize database queries, and reduce server load. For React, Node.js, or Angular, we focus on code minification, lazy loading, and server-side rendering (SSR) or static site generation (SSG) to improve speed and SEO.",
      title2: "Mobile Application Optimization",
      description2:
        "For Android apps, we optimize code, manage memory efficiently, and streamline network requests. For Flutter apps, we reduce widget rebuilds, minimize app size with obfuscation, and optimize image loading and caching. Our approach ensures faster load times, better performance, and an enhanced user experience across platforms.",
    },
    "social-media-optimization": {
      caption:
        "Our social media optimization services boost your brand’s online presence and engagement across platforms.",
      title1: "Content Strategy",
      description1:
        "We create tailored content plans to engage your target audience, including eye-catching visuals, compelling captions, and strategic posting schedules. Our team analyzes platform algorithms to maximize reach and uses data-driven insights to refine content for better engagement.",
      title2: "Analytics and Reporting",
      description2:
        "We track key performance metrics such as engagement rates, follower growth, and click-throughs. Using advanced analytics tools, we provide detailed reports to measure campaign success and optimize future strategies, ensuring your brand achieves maximum impact.",
    },
    "graphic-designing": {
      caption:
        "Our graphic design services deliver visually stunning assets that align with your brand identity.",
      title1: "Branding and Visual Identity",
      description1:
        "We design logos, business cards, and brand guidelines to create a cohesive visual identity. Our team uses modern design tools to craft high-quality graphics that resonate with your audience and strengthen brand recognition.",
      title2: "Digital and Print Media",
      description2:
        "From social media graphics to brochures and banners, we create versatile designs optimized for both digital and print platforms. Our designs are responsive, ensuring they look great on any device or medium, while maintaining brand consistency.",
    },
    "web-development": {
      caption:
        "We build robust, scalable websites tailored to your business needs using modern technologies.",
      title1: "Frontend Development",
      description1:
        "Using frameworks like React, Next.js, and Angular, we create responsive, user-friendly interfaces. We focus on clean code, accessibility, and performance optimization to ensure seamless user experiences across devices.",
      title2: "Backend Development",
      description2:
        "Our backend solutions, built with Node.js, Laravel, or Django, ensure secure, scalable server-side functionality. We optimize APIs, manage databases, and implement authentication systems to support robust web applications.",
    },
    "e-commerce-management": {
      caption:
        "Our e-commerce management services streamline your online store for maximum efficiency and sales.",
      title1: "Store Setup and Optimization",
      description1:
        "We set up and optimize e-commerce platforms like Shopify, WooCommerce, or Magento, ensuring user-friendly navigation, fast load times, and secure payment gateways. We also enhance product listings with SEO-friendly descriptions.",
      title2: "Inventory and Analytics",
      description2:
        "We manage inventory, track sales, and analyze customer behavior to optimize your store’s performance. Our team integrates analytics tools to provide insights into purchasing trends, helping you make data-driven decisions.",
    },
    "social-media-management": {
      caption:
        "Our social media management services drive engagement and growth across your social channels.",
      title1: "Content Creation and Scheduling",
      description1:
        "We craft engaging posts, including graphics, videos, and stories, tailored to each platform. Our team schedules content strategically to maximize audience reach and interaction, ensuring consistent brand messaging.",
      title2: "Community Engagement",
      description2:
        "We monitor comments, messages, and mentions to build strong relationships with your audience. Our team responds promptly to inquiries, manages feedback, and fosters community engagement to enhance brand loyalty.",
    },
    "search-engine-optimization": {
      caption:
        "Our SEO services boost your website’s visibility and drive organic traffic through proven strategies.",
      title1: "On-Page SEO",
      description1:
        "We optimize meta tags, headings, and content with relevant keywords to improve search engine rankings. Our team enhances site structure, internal linking, and mobile responsiveness to ensure a seamless user experience.",
      title2: "Off-Page SEO and Analytics",
      description2:
        "We build high-quality backlinks and manage online reputation to boost domain authority. Using tools like Google Analytics, we track performance, refine strategies, and provide detailed reports to maximize ROI.",
    },
  };

  const content = serviceContent[slug] || {
    caption: "Service Not Found",
    title1: "Service Unavailable",
    description1:
      "The requested service could not be found. Please check the URL or explore our other services.",
    title2: "",
    description2: "",
  };

  return (
    <ServiceDetails
      slug={slug}
      caption={content.caption}
      title1={content.title1}
      description1={content.description1}
      title2={content.title2}
      description2={content.description2}
    />
  );
};

export default ServiceDetailsRoute;
