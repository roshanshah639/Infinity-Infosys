"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import Image from "next/image";
import { LuLogIn } from "react-icons/lu";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef(null);
  const desktopDropdownRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !document.querySelector(".menu-button")?.contains(event.target)
      ) {
        closeMobileMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (pathname === "/") {
      router.refresh();
    } else {
      router.push("/");
    }
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-us" },
    {
      name: "Services",
      path: "#",
      dropdown: [
        "Website and Mobile optimization",
        "Social Media Optimization",
        "Graphic Designing",
        "Web Development",
        "E-Commerce Management",
        "Social Media Management",
        "Search Engine Optimization",
      ],
    },
    {
      name: "Showcase",
      path: "#",
      dropdown: ["eSecurityCart"],
    },
    { name: "Package", path: "/packages" },
    { name: "Career", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  const getSubItemPath = (subItem, parentMenu) => {
    const slug = subItem.toLowerCase().replace(/\s+/g, "-");
    if (parentMenu === "Services") {
      return `/services/${slug}`;
    } else if (parentMenu === "Showcase") {
      return `/showcases/${slug}`;
    }
    return `/${slug}`;
  };

  return (
    <>
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/70 bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out"
          onClick={closeMobileMenu}
        ></div>
      )}

      <nav
        className={`sticky top-0 w-full z-50 transition-all duration-300 border-b border-gray-100 ${
          isScrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
        }`}
      >
        <div className="container mx-auto px-4 max-w-[1140px] flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center"
              onClick={handleLogoClick}
            >
              <Image
                src="/logo.png"
                alt="Company Logo"
                width={160}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div
            className="hidden lg:flex items-center space-x-8"
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                ref={item.dropdown ? desktopDropdownRef : null}
                onMouseEnter={() =>
                  setActiveDropdown(item.dropdown ? item.name : null)
                }
              >
                {item.dropdown ? (
                  <>
                    <button
                      className={`flex items-center space-x-1 transition-colors duration-200 ${
                        activeDropdown === item.name ||
                        item.dropdown.some(
                          (sub) => getSubItemPath(sub, item.name) === pathname
                        )
                          ? "text-[#ffbc13]"
                          : "text-gray-800"
                      }`}
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.name ? null : item.name
                        )
                      }
                    >
                      <span>{item.name}</span>
                      {activeDropdown === item.name ? (
                        <FiChevronUp className="text-sm" />
                      ) : (
                        <FiChevronDown className="text-sm" />
                      )}
                    </button>
                    <div
                      className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50 transition-all duration-300 ease-in-out ${
                        activeDropdown === item.name
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }`}
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem}
                          href={getSubItemPath(subItem, item.name)}
                          className={`block px-4 py-2 text-gray-700 hover:text-[#ffbc13] transition-all duration-200 ${
                            pathname === getSubItemPath(subItem, item.name)
                              ? "text-[#ffbc13]"
                              : ""
                          }`}
                          onClick={() => setActiveDropdown(null)}
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.path}
                    className={`transition-all duration-200 ${
                      pathname === item.path
                        ? "text-[#ffbc13]"
                        : "text-gray-800 hover:text-[#ffbc13]"
                    }`}
                    onMouseEnter={() => setActiveDropdown(null)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/login"
              className="flex items-center text-gray-800 hover:text-[#ffbc13] transition-all duration-200"
              onMouseEnter={() => setActiveDropdown(null)}
            >
              <LuLogIn className="text-xl" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center pe-8">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 focus:outline-none menu-button"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? "" : <FiMenu className="text-2xl" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-0 h-full w-96 px-3 bg-white z-50 transition-transform duration-300 ease-in-out overflow-y-auto ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-100 sticky top-0 bg-white">
          <Link href="/" onClick={handleLogoClick}>
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={120}
              height={30}
              className="h-8 w-auto"
              priority
            />
          </Link>
          <button
            onClick={closeMobileMenu}
            className="text-gray-800 focus:outline-none"
            aria-label="Close menu"
          >
            <FiX className="text-2xl" />
          </button>
        </div>
        <div className="p-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.name} className="border-b border-gray-100 pb-3">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`flex justify-between items-center w-full py-2 ${
                        item.dropdown.some(
                          (sub) => getSubItemPath(sub, item.name) === pathname
                        )
                          ? "text-[#ffbc13]"
                          : "text-gray-800"
                      }`}
                    >
                      <span className="text-md">{item.name}</span>
                      {activeDropdown === item.name ? (
                        <FiChevronUp className="text-lg" />
                      ) : (
                        <FiChevronDown className="text-lg" />
                      )}
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        activeDropdown === item.name ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      <ul className="pl-4 py-4 mt-2 space-y-3 rounded-xl bg-gray-50">
                        {item.dropdown.map((subItem) => (
                          <li key={subItem}>
                            <Link
                              href={getSubItemPath(subItem, item.name)}
                              className={`block px-2 py-2 text-gray-600 hover:text-[#ffbc13] transition-all duration-300 text-md ${
                                pathname === getSubItemPath(subItem, item.name)
                                  ? "text-[#ffbc13]"
                                  : ""
                              }`}
                              onClick={closeMobileMenu}
                            >
                              {subItem}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.path}
                    className={`block py-2 transition-all duration-300 text-md ${
                      pathname === item.path
                        ? "text-[#ffbc13]"
                        : "text-gray-800 hover:text-[#ffbc13]"
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
            <li className="pt-6">
              <Link
                href="/login"
                className="flex items-center text-gray-800 hover:text-[#ffbc13] transition-all duration-300 text-md"
                onClick={closeMobileMenu}
              >
                <LuLogIn className="mr-3 text-xl" /> Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
