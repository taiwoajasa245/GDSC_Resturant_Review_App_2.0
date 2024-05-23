import React from "react";
import { useState } from "react";
import NavBar from "../NavBars/NavBar";
import HeaderImg from "../../assets/images/headerimg.svg";
import RecentlyVisited from "../RecentlyVisited";
import Footer from "../Footer";


function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");

  

  return (
    <>
      <NavBar />

      <div className="w-full p-8 lg:p-0 md:flex md:w-full  md:flex-row-reverse md:items-center lg:justify-around ">
        <div className="w-full md:w-auto p-2 ">
          <img src={HeaderImg} alt="Your Image" />
        </div>

        <div className="mt-4">
          <div>
            <h1 className="font-bold text-2xl text-gray-900  lg:text-3xl  mb-5">
              Find a business to review
            </h1>
          </div>

          <div className="mb-2 ">
            <p className="text-base">
              Review anything from your favorite patio spot to your local flower
              shop.
            </p>
          </div>

          <div>
            <form className="p-1 md:flex lg:bg-white  rounded shadow-lg " action="#">
              <div className="flex items-center justify-center ">
                <div className="bg-white p-3 mt-2  rounded shadow-lg  lg:hidden">
                  <svg width="18" height="18" className="icon_svg">
                    <path d="M15.913 14.224a1.324 1.324 0 0 0-.3-.466h.009l-3.377-3.376a5.492 5.492 0 0 0 .802-2.857 5.523 5.523 0 1 0-5.522 5.52 5.491 5.491 0 0 0 2.856-.801l3.369 3.369.004.003c.132.131.293.231.471.298.143.053.296.086.458.086.727 0 1.317-.589 1.317-1.316 0-.163-.033-.317-.087-.46zM7.525 10.94a3.422 3.422 0 0 1-3.418-3.416 3.422 3.422 0 0 1 3.418-3.417 3.422 3.422 0 0 1 3.416 3.417 3.421 3.421 0 0 1-3.416 3.416z"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Try lunch, yoga studio, plumk"
                  className="p-2 placeholder:text-lg placeholder:text-gray-500 outline-none lg:py-4 lg:pr-24 after:content-[''] after:flex after:top-[12px] after:bottom-[12px] after:right-0 after:w-[2px] after:bg-red-500  bg-white w-full"
                />

                
              </div>

            

              <div className="flex items-center justify-center ">
                <div className="bg-white p-4 mt-4 rounded shadow-lg  lg:hidden">
                  <svg width="18" height="14" className="icon_svg">
                    <path d="M8 14.786a.748.748 0 0 1-.53-.22L3.934 11.03a5.75 5.75 0 1 1 8.132 0L8.53 14.566a.747.747 0 0 1-.53.22ZM8 2.714A4.25 4.25 0 0 0 4.995 9.97L8 12.975l3.005-3.005A4.251 4.251 0 0 0 8 2.714Z"></path>
                    <path d="M8 8.94a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="San Francisco, CA"
                  className="p-2 lg:py-4 lg:pr-20 placeholder:text-black outline-none bg-white w-full  mt-4   md:mt-0"
                /> 
           
                <div className="hidden lg:block bg-[#d21313] p-4 rounded ">
                  <svg
                    width="24"
                    height="24"
                    className="icon_svg cursor-pointer"
                  >
                    <path d="m21.853 20.355-3.444-3.443a9.428 9.428 0 1 0-16.761-6.171 9.428 9.428 0 0 0 15.348 7.586l3.443 3.442a1 1 0 1 0 1.414-1.414ZM5.82 16.245a7.429 7.429 0 1 1 5.253 2.175 7.38 7.38 0 0 1-5.253-2.176Z" fill="white"></path>
                  </svg>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <RecentlyVisited />
      <Footer />
    </>
  );
}

export default Home;
