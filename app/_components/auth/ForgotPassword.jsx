"use client";
import React, { useState } from "react";
import axios from "axios";
import toast, { LoaderIcon } from "react-hot-toast";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isTokenSent, setIsTokenSent] = useState(false);
  const [loading, setLoading] = useState(false);

  // Handle sending reset token
  const handleSendToken = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Please enter your email");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        `/api/v1/auth/forgot-password`,
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setIsTokenSent(true);
      toast.success(response.data.message);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to send reset token"
      );
    } finally {
      setLoading(false);
    }
  };

  // Handle password reset
  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!token.trim() || !newPassword.trim() || !confirmPassword.trim()) {
      toast.error("Please fill all fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        `/api/v1/auth/reset-password`,
        {
          email,
          forgotPasswordToken: token,
          newPassword,
          confirmPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        router.replace("/login");
        resetForm();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to reset password");
    } finally {
      setLoading(false);
    }
  };

  // Reset form fields
  const resetForm = () => {
    setEmail("");
    setToken("");
    setNewPassword("");
    setConfirmPassword("");
    setIsTokenSent(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 md:py-16">
      <div
        className="w-[90%] sm:w-[50%] md:w-[30%] bg-white rounded-md shadow-xl shadow-slate-300 p-6 md:p-8"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <h2 className="text-center text-xl font-[400] text-[#635551] mb-6">
          {isTokenSent ? "Reset Password" : "Forgot Password"}
        </h2>

        {!isTokenSent ? (
          <form onSubmit={handleSendToken} className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-sm md:text-base font-medium text-slate-600 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@domain.com"
                disabled={loading}
                className={`w-full p-3 border border-slate-300 rounded-md text-sm md:text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#FFBC13] hover:border-[#FFBC13] transition-all duration-300 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className={`px-8 py-2 bg-[#FFBC13] text-white font-semibold rounded-full transition-all duration-300 ${
                  loading
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-[#e0a712]"
                }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <LoaderIcon className="animate-spin inline-block h-4 w-4 mr-2" />
                    Sending Token...
                  </span>
                ) : (
                  "Send Reset Token"
                )}
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleResetPassword} className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label
                htmlFor="token"
                className="text-sm md:text-base font-medium text-slate-600 mb-1"
              >
                Reset Token
              </label>
              <input
                type="text"
                id="token"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder="Enter reset token"
                disabled={loading}
                className={`w-full p-3 border border-slate-300 rounded-md text-sm md:text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#FFBC13] hover:border-[#FFBC13] transition-all duration-300 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="newPassword"
                className="text-sm md:text-base font-medium text-slate-600 mb-1"
              >
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="New password"
                disabled={loading}
                className={`w-full p-3 border border-slate-300 rounded-md text-sm md:text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#FFBC13] hover:border-[#FFBC13] transition-all duration-300 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="confirmPassword"
                className="text-sm md:text-base font-medium text-slate-600 mb-1"
              >
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
                disabled={loading}
                className={`w-full p-3 border border-slate-300 rounded-md text-sm md:text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#FFBC13] hover:border-[#FFBC13] transition-all duration-300 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className={`w-[163px] px-8 py-2 bg-[#FFBC13] text-slate-900 font-semibold rounded-full transition-all duration-300 ${
                  loading
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-[#e0a712]"
                }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <LoaderIcon className="animate-spin inline-block h-4 w-4 mr-2" />
                    Resetting Password...
                  </span>
                ) : (
                  "Reset Password"
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
