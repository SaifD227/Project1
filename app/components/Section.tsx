"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../assets/download__1_-removebg-preview.png";
import photo from "../assets/images.jpeg";
import image1 from "../assets/home-banner-01.png";
import image2 from "../assets/l6-download-gplay.png";
import image3 from "../assets/l6-download-appstore.png";
import { HiChevronDown, HiMenu, HiX } from "react-icons/hi";
import image4 from "../assets/home-02.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import image6 from "../assets/home-03.png";
import { FaArrowRight } from "react-icons/fa";
import imag6 from "../assets/home-04.png";
import image5 from "../assets/images.png";
import Image1 from "../assets/logo-alfa.png";
import Image2 from "../assets/logo-blueex-courier.png";
import Image3 from "../assets/logo-callcourier.png";
import Image4 from "../assets/logo-easypay.png";
import Image5 from "../assets/logo-jazzcash.png";
import Image6 from "../assets/logo-keenu.png";
import Image7 from "../assets/logo-qisstpay.png";
import Image8 from "../assets/logo-alfa.png";
import Image9 from "../assets/logo-blueex-courier.png";
import Image10 from "../assets/logo-callcourier.png";
import Image11 from "../assets/logo-easypay.png";
import Image12 from "../assets/logo-jazzcash.png";
import Image13 from "../assets/logo-keenu.png";
import Image14 from "../assets/logo-qisstpay.png";
import Image15 from "../assets/logo-qisstpay.png";

import photo1 from "../assets/download (1).jpeg";
import photo2 from "../assets/download.jpeg";
import photo3 from "../assets/download.jpeg";
import { FaPlay } from "react-icons/fa";

import { FaEarthEurope } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { SiGooglemarketingplatform } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

import image0 from "../assets/home-06.png";
import { FaCheck } from "react-icons/fa6";

import { IoIosStar } from "react-icons/io";

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
  Image12,
  Image13,
  Image14,
  Image15,
];

const Section = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    setIsSticky(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-full bg-[#513991] ${
          isSticky ? "bg-yellow-500" : ""
        } transition-colors duration-300 z-50`}
      >
        <div className="navbar flex justify-between items-center py-7 text-white font-bold px-4 md:px-20">
          <div>
            <Image src={logo} alt="logo" height={100} width={100} />
          </div>
          <div className="hidden md:flex">
            <ul className="flex gap-10">
              <li className="relative group flex items-center">
                Online Store
                <HiChevronDown className="ml-2 transition-transform duration-300 group-hover:rotate-180" />
                <div className="absolute left-0 top-full mt-2 w-48 p-5 py-4 bg-white  text-black shadow-lg rounded transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <p className=" p-2 hover:bg-[#eae3e3]">Features</p>
                  <p className="p-2  hover:bg-[#eae3e3]">Pricing</p>
                  <p className="p-2  hover:bg-[#eae3e3]">Themes</p>
                  <p className="p-2  hover:bg-[#eae3e3]">FAQs</p>
                </div>
              </li>
              <li className="relative group flex items-center">Pricing</li>

              <li className="relative group flex items-center">
                Company
                <HiChevronDown className="ml-2 transition-transform duration-300 group-hover:rotate-180" />
                <div className="absolute left-0 top-full mt-2 w-48 p-5 py-4 bg-white  text-black shadow-lg rounded transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <p className="p-2  hover:bg-[#eae3e3]">About us</p>
                  <p className="p-2  hover:bg-[#eae3e3]">Contact us</p>
                  <p className="p-2  hover:bg-[#eae3e3]">Careers</p>
                </div>
              </li>
              <li className="relative group flex items-center">
                Partners
                <HiChevronDown className="ml-2 transition-transform duration-300 group-hover:rotate-180" />
                <div className="absolute left-0 top-full mt-2 w-48 p-5 py-4 bg-white  text-black shadow-lg rounded transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <p className="p-2  hover:bg-[#eae3e3]">Partner program</p>
                  <p className="p-2  hover:bg-[#eae3e3]">Affiliate program</p>
                </div>
              </li>
              <li className="relative group flex items-center">
                Resources
                <HiChevronDown className="ml-2 transition-transform duration-300 group-hover:rotate-180" />
                <div className="absolute left-0 top-full mt-2 w-48 p-5 py-4 bg-white  text-black shadow-lg rounded transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <p className="p-2  hover:bg-[#eae3e3]">Help Center</p>
                  <p className="p-2  hover:bg-[#eae3e3]">Support </p>
                  <p className="p-2  hover:bg-[#eae3e3]">FAQs </p>
                  <p className="p-2  hover:bg-[#eae3e3]">Blog</p>
                  <hr />
                  <p className="p-2  hover:bg-[#eae3e3]">Themes</p>
                  <p className="p-2  hover:bg-[#eae3e3]">Clients</p>
                  <p className="p-2  hover:bg-[#eae3e3]">Testimonial</p>
                </div>
              </li>
              <li className="mt-2">Login</li>
              <button className="bg-[#04e804] p-2 rounded">
                Start For Free
              </button>
            </ul>
          </div>
          {/* Hamburger menu */}
          <div className="md:hidden flex items-center">
            <button onClick={handleMenuToggle} className="text-white">
              {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
        <div
          className={`md:hidden ${
            isMenuOpen ? "block" : "hidden"
          } bg-[#513991] text-white`}
        >
          <ul className="flex flex-col gap-4 py-4 px-6">
            <li className="relative group flex items-center">
              Online Store
              <HiChevronDown className="ml-2 transition-transform duration-300 group-hover:rotate-180" />
              <div className="absolute hidden group-hover:block bg-white shadow-md rounded-lg w-48 top-full mt-2 border border-gray-200 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <a
                  href="/features"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Features
                </a>
                <a
                  href="/pricing"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Pricing
                </a>
                <a
                  href="/themes"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Themes
                </a>
                <a
                  href="/faqs"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  FAQs
                </a>
              </div>
            </li>
            <li className="relative group flex items-center">Pricing</li>
            <li className="relative group flex items-center">
              Company
              <HiChevronDown className="ml-2 transition-transform duration-300 group-hover:rotate-180" />
              <div className="absolute text-black hidden group-hover:block bg-white shadow-lg rounded mt-2 w-48 top-full">
                <p>About us</p>
                <p>Contact us</p>
                <p>Careers</p>
              </div>
            </li>
            <li className="relative group flex items-center">
              Partners
              <HiChevronDown className="ml-2 transition-transform duration-300 group-hover:rotate-180" />
              <div className="absolute text-black hidden group-hover:block bg-white shadow-lg rounded mt-2 w-48 top-full">
                <p>Partner Program</p>
                <p>Affiliate Program</p>
              </div>
            </li>
            <li className="relative group flex items-center">
              Resources
              <HiChevronDown className="ml-2 transition-transform duration-300 group-hover:rotate-180" />
              <div className="absolute text-black hidden group-hover:block bg-white shadow-lg rounded mt-2 w-48 top-full">
                <p>Help Center</p>
                <p>Support</p>
                <p>FAQs</p>
                <p>Blog</p>
                <br />
                <p>Themes</p>
                <p>Clients</p>
                <p>Testimonial</p>
              </div>
            </li>
            <li className="mt-2">Login</li>
            <button className="bg-[#04e804] p-2 rounded w-full text-center">
              Start For Free
            </button>
          </ul>
        </div>
      </div>

      <div className="relative flex flex-col sm:flex-row items-center justify-between p-4 scroll-smooth focus:scroll-auto pt-28">
        <Image
          alt="photos"
          src={photo}
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 z-[-1] w-full h-full"
        />

        <div className="relative z-10 text-white flex flex-col justify-center items-start text-left sm:w-1/2 p-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Start your online store today!
          </h1>
          <p className="text-lg md:text-xl mb-2">
            Sell your products from one simple and powerful platform.
          </p>
          <p className="text-lg md:text-xl mb-6">
            Trusted by thousands of online businesses in Pakistan.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Create Your Online Store
          </button>

          <div className="mt-4 text-sm">Download App</div>
          <div className="flex gap-10 mt-5">
            <div>
              <Image src={image2} alt="image2" width={150} height={150} />
            </div>
            <div>
              <Image src={image3} alt="image3" width={150} height={150} />
            </div>
          </div>
        </div>

        <div className="relative z-10 sm:w-1/2 p-6">
          <Image src={image1} alt="image1" width={600} height={400} />
        </div>
      </div>

      {/* hhbfdf */}

      <div className="flex flex-col md:flex-row p-10 md:p-20 justify-center items-center">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={image4}
            alt="image"
            width={500}
            height={450}
            className="max-w-full h-auto"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center  md:mt-0">
          <h1 className=" md:p-10 text-2xl md:text-4xl font-bold leading-tight">
            Build a professional store in minutes
          </h1>
          <p className=" md:p-10 text-lg md:text-xl text-gray-700 leading-relaxed">
            With our professional ecommerce themes and design customization
            tools, you can easily build a beautiful online store in minutes – no
            coding required.
          </p>
          <div className="flex ">
            <p className="text-blue-500 cursor-pointer  md:pl-10">Learn more</p>
            <p className="ml-10 text-blue-500 hover:ml-20 transition-all">
              <FaLongArrowAltRight />
            </p>
          </div>
        </div>
      </div>

      {/* container2 */}

      <div className="container overflow-hidden mx-auto px-4 bg-slate-200 w-full h-screen">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="text-center mt-5">
            <h1 className="text-4xl sm:text-5xl font-bold">
              Be inspired. Start today!
            </h1>
            <p className="text-gray-600 mt-2">
              Check out the top performing stores built with Webx Ecommerce
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-10 w-full max-w-screen-lg">
            <div className="border p-2 rounded-lg bg-[#ffa600] flex flex-col items-center">
              <Image src={image5} alt="image" width={150} height={150} />
              <p className="mt-2 text-center text-sm">Electronics</p>
              <h6 className="mt-1 font-semibold text-center text-xs">
                Computer zone
              </h6>
            </div>
            <div className="border p-2 rounded-lg bg-[#ffa600] flex flex-col items-center">
              <Image src={image5} alt="image" width={150} height={150} />
              <p className="mt-2 text-center text-sm">Industrial</p>
              <h6 className="mt-1 font-semibold text-center text-xs">Kamadi</h6>
            </div>
            <div className="border p-2 rounded-lg bg-[#ffa600] flex flex-col items-center">
              <Image src={image5} alt="image" width={150} height={150} />
              <p className="mt-2 text-center text-sm">Food & Restaurants</p>
              <h6 className="mt-1 font-semibold text-center text-xs">
                Meat Bay
              </h6>
            </div>
            <div className="border p-2 rounded-lg bg-[#ffa600] flex flex-col items-center">
              <Image src={image5} alt="image" width={150} height={150} />
              <p className="mt-2 text-center text-sm">Software & Digital</p>
              <h6 className="mt-1 font-semibold text-center text-xs">
                Codes Dukaan
              </h6>
            </div>
          </div>
        </div>
      </div>

      {/* container3 */}

      <div className="flex flex-col md:flex-row justify-center items-center p-4 mx-auto mt-20">
        <div className="flex flex-col text-center md:text-left w-full md:w-1/2 max-w-md mb-4 md:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Market your business. Grow faster
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-4">
            Use Webx built-in marketing tools to promote your business, increase
            your sales, and grow faster within budget.
          </p>
          <div className="flex ">
            <p className="text-blue-500 ">Learn more</p>
            <p className="ml-10 text-[blue] hover:ml-20 transition-transform">
              <FaArrowRight />
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center w-full md:w-1/2">
          <Image
            src={image6}
            alt="Marketing Image"
            height={500}
            width={500}
            className="object-cover max-w-full h-auto"
          />
        </div>
      </div>

      {/* container4 */}

      <div className="bg-[#808080a2] flex flex-col md:flex-row justify-center items-center p-4">
        <div className="flex justify-center md:w-1/2">
          <Image
            src={imag6}
            alt="image"
            width={500}
            height={500}
            className="object-cover max-w-full h-auto"
          />
        </div>
        <div className="flex flex-col md:w-1/2 text-center md:text-left p-4 md:p-8">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
            Accept payments through multiple channels
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-[#808080] mb-4">
            Choose from a number of payment options and integrated payment
            solutions. Whether its COD, bank deposit, or credit card payment,
            you have it.
          </p>
          <div className="flex items-center justify-center md:justify-start text-blue-500">
            <p className="mr-2">Learn more</p>
            <p className="hover:ml-2">
              <FaArrowRight />
            </p>
          </div>
        </div>
      </div>

      {/* container5 */}

      <div className="flex flex-col items-center">
        <div className="text-center mt-20 mb-6">
          <h1 className="text-2xl font-bold">
            Integrated with industry-leading tools
          </h1>
          <p className="mt-2 text-2xl text-gray-600 p-4">
            Webx Ecommerce is integrated with all the top payment solutions,
            courier services, and marketing tools.
          </p>
        </div>
        <div className="grid grid-cols-5 mb-20 gap-10">
          {images.map((img, index) => (
            <div key={index} className="flex justify-center items-center">
              <Image
                src={img}
                alt={`Image ${index + 1}`}
                height={100}
                width={100}
              />
            </div>
          ))}
        </div>
      </div>

      {/* container6 */}

      <div className="bg-[#eae5e5df] py-10">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">SUCCESS STORIES</h1>
          <h3 className="text-lg">
            Hear what our customers have to say about Webx Ecommerce Experience
          </h3>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="relative w-80 group">
            <Image
              src={photo1}
              alt="Customer photo 1"
              layout="responsive"
              width={300}
              height={300}
              className="transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <p className="mt-2 text-2xl">Senior software developer </p>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <FaPlay className="text-white text-4xl" />
            </div>
          </div>
          <div className="relative w-80 group">
            <Image
              src={photo2}
              alt="Customer photo 2"
              layout="responsive"
              width={300}
              height={300}
              className="transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <p className="mt-2 text-2xl">Senior software developer </p>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <FaPlay className="text-white text-4xl" />
            </div>
          </div>
          <div className="relative w-80 group">
            <Image
              src={photo3}
              alt="Customer photo 3"
              layout="responsive"
              width={300}
              height={300}
              className="transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <p className="mt-2 text-2xl">Senior software developer </p>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <FaPlay className="text-white text-4xl" />
            </div>
          </div>
        </div>
      </div>
      {/* container7 */}

      <div className="flex flex-col items-center px-4 py-8 mt-10">
        <div className="text-center mb-8">
          <h1 className="text-md  mb-2 sm:text-3xl text-[red] ">
            CREATE YOUR OWN BRAND
          </h1>
          <p className="text-base sm:text-lg md:text-xl">
            Start ecommerce with your own brand. Your own online shop!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 p-4 md:p-8 lg:p-12 w-full max-w-6xl text-gray-600">
          {/* First Row */}
          <div className="flex flex-col sm:flex-row items-center w-full">
            <FaEarthEurope className="text-6xl sm:text-7xl lg:text-8xl mb-4 sm:mb-0 sm:mr-4 p-4 bg-green-100" />
            <div>
              <h1 className="text-lg font-semibold sm:text-xl lg:text-2xl mb-2 text-center sm:text-left">
                Custom Domain
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-center sm:text-left">
                Use your own custom domain (e.g. mystore.com) with your Webx
                store that uniquely represents your brand.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center w-full">
            <GiHamburgerMenu className="text-6xl sm:text-7xl lg:text-8xl mb-4 sm:mb-0 sm:mr-4 p-4 bg-yellow-100" />
            <div>
              <h1 className="text-lg font-semibold sm:text-xl lg:text-2xl mb-2 text-center sm:text-left">
                Secure Web Hosting
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-center sm:text-left">
                Use your own custom domain (e.g. mystore.com) with your Webx
                store that uniquely represents your brand.
              </p>
            </div>
          </div>
          {/* Second Row */}
          <div className="flex flex-col sm:flex-row items-center w-full">
            <FaDatabase className="text-6xl sm:text-7xl lg:text-8xl mb-4 sm:mb-0 sm:mr-4 p-4 bg-red-200" />
            <div>
              <h1 className="text-lg font-semibold sm:text-xl lg:text-2xl mb-2 text-center sm:text-left">
                Data Backup
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-center sm:text-left">
                Use your own custom domain (e.g. mystore.com) with your Webx
                store that uniquely represents your brand.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center w-full">
            <SiGooglemarketingplatform className="text-6xl sm:text-7xl lg:text-8xl mb-4 sm:mb-0 sm:mr-4 bg-slate-100 rounded-md p-4" />
            <div>
              <h1 className="text-lg font-semibold sm:text-xl lg:text-2xl mb-2 text-center sm:text-left">
                Marketing Platform
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-center sm:text-left">
                Use your own custom domain (e.g. mystore.com) with your Webx
                store that uniquely represents your brand.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* container8 */}
      <div className="bg-[#f2f3f2] flex flex-col md:flex-row justify-center items-center mt-20 p-6 md:p-10">
        <div className="flex justify-center md:justify-end w-full md:w-1/2">
          <Image
            src={image0}
            alt="image"
            width={600}
            height={600}
            className="max-w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left p-6 md:p-10">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Get the support you need at any step
          </h1>
          <p className="text-gray-600 mb-6">
            Your success is our success. Get live support from our experts for
            your ecommerce challenges at every step of the way.
          </p>
          <div className="space-y-4">
            <p className="flex items-center">
              <FaCheck className="text-blue-500 mr-2" /> Live Expert Support
            </p>
            <p className="flex items-center">
              <FaCheck className="text-blue-500 mr-2" /> Help Center & Tutorials
            </p>
            <p className="flex items-center">
              <FaCheck className="text-blue-500 mr-2" /> Webx Startup Program
            </p>
          </div>
          <div className="flex mt-10 items-center">
            <p className="text-[blue]"> Explore Support Options</p>
            <p className="text-[blue] text-2xl ml-5 hover:ml-10 translate-x-0">
              {" "}
              <FaLongArrowAltRight />
            </p>
          </div>
        </div>
      </div>

      {/*  container9 */}
      <div className="flex flex-col md:flex-row items-center mt-10 md:mt-20 justify-between max-w-7xl mx-auto px-4 md:px-8 space-y-6 md:space-y-0">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-2xl md:text-5xl lg:text-6xl xl:text-4xl font-semibold leading-snug p-6 md:p-10">
            Trusted by thousands of happy customers who are using Webx to sell
            online.
          </h1>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold">1000+</h1>
          <p className="text-2xl  p-5">Successful online stores in Pakistan</p>
        </div>
        <div className="text-center text-4xl">
          <h1 className="text-4xl font-bold">5.0</h1>
          <p className="flex justify-center gap-1 text-yellow-500">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
          </p>
          <p className="text-lg">Google Rating</p>
        </div>
      </div>

      {/* container10 */}
      <div className="bg-[#f8f8f8] py-10 px-4 mt-20">
        <div className="text-center mb-8">
          <h1 className="text-4xl px-4 md:px-10 font-bold mb-2 p-5">
            Join our community of entrepreneurs and professionals
          </h1>
          <p className="text-lg text-gray-600">
            We are making ecommerce easy for everyone.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <p className="mb-4">
              “Webx in a true sense is an ideal platform for startups. With a
              low investment, you own a high-tech online store, and ready to
              grab great sales opportunities.”
            </p>
            <p className="font-bold text-gray-800">
              <span className="text-black">Kamran Adil</span> - Kamadi Pakistan
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <p className="mb-4">
              “Webx.pk is one of its kind in Pakistan. They have an exceptional
              ability to transform your online business plan into reality.”
            </p>
            <p className="font-bold text-gray-800">
              <span className="text-black">Sheikh Imran</span> - The Leather
              Factory
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <p className="mb-4">
              “There aren’t many companies in Pakistan that can pull off such a
              solution, so keep it up guys, and keep the updates coming along.”
            </p>
            <p className="font-bold text-gray-800">
              <span className="text-black">Ammad Qaiser</span> - Tiara Elements
            </p>
          </div>
        </div>
      </div>
      {/* container11 */}

      bnuhjmik,njmk
      <div className="flex flex-col items-center justify-center mt-20 px-4 md:px-8 lg:px-16">
        <h1 className="text-black text-2xl md:text-4xl font-bold text-center mb-4">
          Start your online business with Webx
        </h1>
        <p className="text-lg md:text-md text-center mb-6">
          Start your online store on Webx for free, and explore all the features
          and services you need to start selling online.
        </p>
        <button className="bg-green-500 text-white font-bold py-2 px-6 rounded hover:bg-green-600 transition">
          Start your Free Store
        </button>
      </div>
    </div>
  );
};

export default Section;
