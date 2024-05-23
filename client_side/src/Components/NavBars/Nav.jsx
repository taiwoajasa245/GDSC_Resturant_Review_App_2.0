import React, { useState } from "react";
import { Link } from "react-router-dom";
import Yelp_Logo from "../../assets/images/yelp_logo.svg";

const Navbar = () => {
  return (
    <nav className="bg-whiteb border p-4 border-b-gray mb-6 ">
      <div className="w-full">
        {/* Logo */}
        <div className="">
          <Link to="/writeareview" className="text-gray-800 text-xl font-bold">
            <div>
              <img src={Yelp_Logo} className="w-16 " alt="yelp logo" />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
