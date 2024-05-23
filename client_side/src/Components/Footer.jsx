import React from "react";
import { Link } from "react-router-dom";
import Flower from "../assets/images/flower.png";
import D_Logo from "../assets/images/logo_desktop.png";

const Footer = () => {
  const classN = "text-gray-500  hover:underline hover:text-blue-600 ";

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

          <div className=" pt-5 text-blue-500 cursor-pointer lg:hidden ">
            <div>
              <ul className="">
                <li className=" mobile-list-item__09f24__YxnZJ">
                  <span className=" yelp-emotion-ex7geu">
                    <div className=" yelp-emotion-y28ot8">
                      <a href="/about" className="yelp-emotion-1jiih4y">
                        About
                      </a>
                      .
                    </div>
                  </span>
                </li>
                <li className=" mobile-list-item__09f24__YxnZJ">
                  <span className=" yelp-emotion-ex7geu">
                    <div className=" yelp-emotion-y28ot8">
                      <a
                        href="https://blog.yelp.com/"
                        className="yelp-emotion-1jiih4y"
                      >
                        Blog
                      </a>
                      .
                    </div>
                  </span>
                </li>
                <li className=" mobile-list-item__09f24__YxnZJ">
                  <span className=" yelp-emotion-ex7geu">
                    <div className=" yelp-emotion-y28ot8">
                      <a
                        href="https://www.yelp-support.com/"
                        className="yelp-emotion-1jiih4y"
                      >
                        Support
                      </a>
                      .
                    </div>
                  </span>
                </li>
                <li className=" mobile-list-item__09f24__YxnZJ">
                  <span className=" yelp-emotion-ex7geu">
                    <div className=" yelp-emotion-y28ot8">
                      <a href="/static?p=tos" className="yelp-emotion-1jiih4y">
                        Terms
                      </a>
                    </div>
                  </span>
                </li>
                <li className=" mobile-list-item__09f24__YxnZJ">
                  <span className=" yelp-emotion-ex7geu">
                    <div className=" yelp-emotion-y28ot8">
                      <a
                        href="/tos/privacy_policy"
                        className="yelp-emotion-1jiih4y"
                      >
                        Privacy Policy
                      </a>
                      .
                    </div>
                  </span>
                </li>
                <li className=" mobile-list-item__09f24__YxnZJ">
                  <span className=" yelp-emotion-h9c2fl">
                    <div className=" yelp-emotion-ohs7lg">
                      <a
                        href="https://www.yelp-support.com/article/Your-Privacy-Choices?l=en_US"
                        className="yelp-emotion-1jiih4y"
                      >
                        Your Privacy Choices
                      </a>
                      .
                    </div>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className=" mt-24 mb-10 ">
            <p className=" lg:flex text-sm text-gray-500 sm:mt-0 ">
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
