import React from "react";
import { Link } from "react-router-dom";
import Flower from "../../assets/images/flower.png";
import D_Logo from "../../assets/images/logo_desktop.png";

import FooterLinks from "./FooterLink";

const Footer = () => {
  const classN = "text-gray-500   hover:underline hover:text-blue-600 ";

  return (
    <>
      <footer className=" text-black bg-[#F7F7F7] ">
        <div className=" px-6 py-12 mx-auto text-black lg:pl-20">
          <div className=" hidden md:flex md:items-center md:justify-between  mt-12 ">
            <div>
              <h3 className="font-bold">Product</h3>

              <div className="flex flex-col items-start mt-2 space-y-4">
                <a href="#" className={classN}>
                  Overview
                </a>
                <a href="#" className={classN}>
                  Features
                </a>
                <a href="#" className={classN}>
                  Solutions
                </a>
                <a href="#" className={classN}>
                  Tutorials
                </a>
                <a href="#" className={classN}>
                  Pricing
                </a>
                <a href="#" className={classN}>
                  Releases
                </a>
              </div>
            </div>

            <div>
              <h2 className="font-bold ">Company</h2>

              <div className="flex flex-col items-start mt-4 space-y-4">
                <a href="#" className={classN}>
                  About us
                </a>
                <a href="#" className={classN}>
                  Careers
                </a>
                <a href="#" className={classN}>
                  Press
                </a>
                <a href="#" className={classN}>
                  News
                </a>
                <a href="#" className={classN}>
                  Media kit
                </a>
                <a href="#" className={classN}>
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold">Resources</h3>

              <div className="flex flex-col items-start mt-4 space-y-4">
                <a href="#" className={classN}>
                  Blog
                </a>
                <a href="#" className={classN}>
                  Newsletter
                </a>
                <a href="#" className={classN}>
                  Events
                </a>
                <a href="#" className={classN}>
                  Help center
                </a>
                <a href="#" className={classN}>
                  Tutorials
                </a>
                <a href="#" className={classN}>
                  Supports
                </a>
              </div>
            </div>

            <div>
              <div>
                <h2 className="font-bold ">Language</h2>

                <div className="flex flex-col items-start mt-4 space-y-4">
                  <a href="#" className={classN}>
                    About us
                  </a>
                </div>
              </div>

              <div>
                <h2 className="font-bold ">Country</h2>

                <div className="flex flex-col items-start mt-4 space-y-4">
                  <a href="#" className={classN}>
                    About us
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <div>
              <h2 className="font-bold">Language</h2>

              <div className="flex flex-col items-start mt-4 space-y-4">
                <a
                  href="#"
                  className=" text-gray-500 flex items-center cursor-pointer mb-3  hover:underline hover:text-blue-600"
                >
                  English
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 -960 960 960"
                    width="20"
                  >
                    <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h2 className="font-bold ">Country</h2>

              <div className="flex flex-col items-start mt-4 space-y-4">
                <a href="#" className={classN}>
                  About us
                </a>
              </div>
            </div>
          </div>

          <FooterLinks />

          <div className=" mt-5 mb-10 ">
            <p className=" md:flex text-sm text-gray-500 md:mt-0 ">
              Copyright © 2004–2024 Yelp Inc. Yelp,
              <div className="flex">
                <img src={D_Logo} className="w-10" alt="Your Image" />,
                <img src={Flower} alt="Your Image" />
              </div>
              and related marks are registered trademarks of Yelp.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
