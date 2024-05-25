import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Yelp_Logo from "../../assets/images/yelp_logo.svg"; 
import { validateLoginToken, validateSignupToken } from "../utils/validateToken";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const NavBar = () => {
    const history = useHistory(); 

    const handleLogin = () => {
        validateLoginToken(history);
    };  
    
    const handleSignup = () => {
        validateSignupToken(history);
    };  

    return (
        <nav className="bg-whiteb border  p-4 lg:p-6 lg:pr-10 lg:pl-10  border-b-gray mb-6 ">
            <div className="w-full flex justify-between items-center ">

                {/* Logo */}
                <div className="">
                    <Link to="/writeareview" className="text-gray-800 text-xl font-bold">
                        <div >
                            <img src={Yelp_Logo} className="lg:w-20 w-16 " alt="Your Image" />
                        </div>
                    </Link>
                </div>

                <div className='flex'>
                    <div className='mr-4'>
                        <Link to='/login'>
                            <button onClick={handleLogin} className="bg-white border-gray-300 border text-black font-semibold  py-3 px-5 rounded">
                                Log In
                            </button>
                        </Link>
                    </div>

                    <div className='mr-4 hidden md:flex'>
                        <Link to="/signup">
                            <button  className="bg-[#d21313] text-white border-gray-300 border  font-semibold  py-3 px-5 rounded">
                                Sign Up
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default NavBar;

