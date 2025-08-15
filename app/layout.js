import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "./_components/Layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default:
      " Best SEO & Digital Marketing Experts in Kathmandu, Nepal | Infinity Infosys",
    template: "%s | Infinity Infosys",
  },
  description:
    "Affordable SEO services and effective digital marketing strategies at Infinity Infosys. Boost your online presence with expert solutions and creative designs",
  keywords: [
    "Infinity Infosys",
    "top digital marketing agency",
    "top digital marketing company",
    "SEO service",
    "SEO expert",
    "budget digital marketing",
    "budget SEO service",
    "boost online presence",
    "best SEO service",
    "social media marketing",
    "lead generation",
    "social media creative graphics design",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
