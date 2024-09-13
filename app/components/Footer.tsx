
import Image from "next/image";
import React from "react";
import photo from "../assets/logo-trax.png";
import Link from "next/link";
import {
  FaFacebook,
  FaYoutube,
  FaLinkedin, 
  FaTwitter,
  FaInstagram,
} from "../assets/icons/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap md:justify-between">
          <div className="w-full md:w-1/5 mb-6 flex flex-col items-center md:items-start">
            <div className="mb-4">
              <Image src={photo} alt="logo" width={80} height={80} />
            </div>
            <p className="text-center md:text-left text-sm">
              Webx Ecommerce is the most popular ecommerce software in Pakistan.
              Powerful tools, industry integrations, and amazing customer
              support make it the most trusted ecommerce solution in the region.
            </p>
            <div className="flex space-x-3 mt-4">
              <FaFacebook size={20} />
              <FaYoutube size={20} />
              <FaLinkedin size={20} /> 
              <FaTwitter size={20} />
              <FaInstagram size={20} />
            </div>
          </div>

          <div className="w-full md:w-1/5 mb-6">
            <p className="font-bold mb-2">Product</p>
            <ul className="list-none pl-0 space-y-1 text-sm">
              {" "}
              {/* Fixed typo here */}
              <li className="hover:text-[green]">
                <Link href="/">Features</Link>
              </li>
              <li className="hover:text-[green]">
                <Link href="/">Pricing</Link>
              </li>
              <li className="hover:text-[green]">
                <Link href="/">Showcase</Link>
              </li>
              <li className="hover:text-[green]">
                <Link href="/">FAQs</Link>
              </li>
              <li className="hover:text-[green]">
                <Link href="/">Testimonials</Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/5 mb-6">
            <p className="font-bold mb-2">Company</p>
            <ul className="list-none pl-0 space-y-1 text-sm">
              {" "}
              {/* Fixed typo here */}
              <li className="hover:text-[green]">
                <Link href="/">About us</Link>
              </li>
              <li className="hover:text-[green]">
                <Link href="/">Contact us</Link>
              </li>
              <li className="hover:text-[green]">
                <Link href="/">Careers</Link>
              </li>
              <li className="hover:text-[green]">
                <Link href="/">Terms of Services</Link>
              </li>
              <li className="hover:text-[green]">
                <Link href="/">Privacy Policy</Link>
              </li>{" "}
         
            </ul>
          </div>

          <div className="w-full md:w-1/5 mb-6  ">
            <p className="font-bold mb-2">Support</p>
            <ul className="list-none  pl-0 space-y-1 text-sm">
              {" "}
        
              <li className="hover:text-[green]">
                <Link href="/">Support Portal</Link>
              </li>
              <li className="hover:text-[green]">
                <Link href="/">Help Center</Link>
              </li>
              <li className="hover:text-[green]">
                <Link href="/">Ecommerce Blog</Link>
              </li>
              <li className="hover:text-[green]">
                <Link href="/">Become a Partner</Link>
              </li>
              <li className="hover:text-[green]">
                <Link href="/">Become an Affiliate</Link>
              </li>{" "}

            </ul>
          </div>

          <div className="w-full md:w-1/5 mb-6">
            <p className="font-bold mb-2">Contact us</p>
            <p className="text-sm">
              Office # 203, 2nd Floor, Business Center, Block-6, P.E.C.H.S.,
              Shahrah-e-Faisal, Karachi
            </p>
            <p className="text-sm">Phone: (92) 213 8892228</p>
            <p className="text-sm">Mobile: (92) 333 3798885</p>
            <p className="text-sm">Email: info@webx.pk</p>
          </div>
        </div>
      </div>
      <div className="text-center py-4">
        <hr />
        <p className="text-sm">
          © Copyright 2023 Webx Ecommerce. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
