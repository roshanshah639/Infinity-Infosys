"use client";
import React, { useState } from "react";
import Link from "next/link";
import toast, { LoaderIcon } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);

      const response = await axios.post("/api/v1/auth/login", formData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      const data = response.data;

      if (data.success) {
        toast.success(data.message);
        router.replace("/admin");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center py-10 md:py-16 bg-gray-50"
      style={{
        backgroundImage: 'url("/loginbg1.svg")',
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className="w-[90%] sm:w-[80%] md:w-[30%] max-w-md bg-white rounded-lg shadow-sm p-6 md:p-8 border border-gray-100"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <h2 className="text-center text-2xl font-light text-gray-700 mb-6 tracking-tight">
          Login to Your Account
        </h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="name@domain.com"
              className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#FFBC13] focus:border-[#FFBC13] transition-all duration-200"
              required
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="password" className="text-sm text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="••••••••"
              className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#FFBC13] focus:border-[#FFBC13] transition-all duration-200"
              required
            />
          </div>

          <div className="flex justify-end mt-2">
            <Link
              href="/forgot-password"
              className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 bg-[#FFBC13] text-white font-medium rounded-md transition-all duration-200 ${
              isLoading
                ? "opacity-70 cursor-not-allowed"
                : "hover:bg-[#e0a712] hover:shadow-sm"
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <LoaderIcon className="animate-spin inline-block h-4 w-4 mr-2" />
                Logging in...
              </span>
            ) : (
              "Login"
            )}
          </button>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">
              Don't have an account?{" "}
              <Link
                href="/sign-up"
                className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
