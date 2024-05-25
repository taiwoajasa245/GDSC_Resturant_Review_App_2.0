import React, { useEffect } from "react";
import { useState } from "react";
import NavBar from "../NavBars/NavBar";
import HeaderImg from "../../assets/images/headerimg.svg";
import RecentlyVisited from "../Layout/RecentlyVisited";
import Footer from "../Layout/Footer";
import SearchForm from "../Layout/SearchForm";



function Home() {


  return (
    <>
      <NavBar />



      <div className="w-full p-8  md:mt-2  lg:p-0 md:flex  md:w-full  md:flex-col md:items-center lg:flex-row-reverse lg:justify-around ">
        <div className="w-full md:w-auto  p-2 ">
          <img src={HeaderImg} alt="Your Image" />
        </div>

        <div className="mt-4 md:mt-0 md:w-full  lg:w-full lg:ml-10 lg:max-w-[50rem] ">
          <div>
            <h1 className="font-bold text-2xl text-gray-900  md:text-3xl  mb-5">
              Find a business to review
            </h1>
          </div>

          <div className="mb-2 ">
            <p className="text-base">
              Review anything from your favorite patio spot to your local flower
              shop.
            </p>
          </div>

          <SearchForm />
        </div>
      </div>
      <RecentlyVisited />
      <Footer />
    </>
  );
}

export default Home;
