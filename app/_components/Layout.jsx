"use client";
import React from "react";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { usePathname } from "next/navigation";

const Layout = ({ children }) => {
  const pathname = usePathname();

  const blacklists = ["/login", "/sign-up"];

  if (blacklists.includes(pathname)) {
    return <>{children}</>;
  }

  return (
    <>
      <Topbar />
      <Navbar />
      {children}

      <Footer />
    </>
  );
};

export default Layout;
