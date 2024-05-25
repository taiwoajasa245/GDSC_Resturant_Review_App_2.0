import React, { useState } from "react";

const SearchForm = () => {
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("San Francisco, CA");

  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleLocationChange = (e) => setLocation(e.target.value);

  return (
    <form
      className=" md:flex md:rounded-lg md:shadow-lg p-2 md:p-0 md:bg-white  lg:w-full lg:max-w-[50rem] "
      action="/search"
      id="header_find_form"
      role="search"
      data-testid="searchSuggest"
      method="get"
    >
      <div className="flex-1 flex items-center mb-3 md:mb-0 shadow-lg md:shadow-transparent  border md:border-0  bg-white p-1 md:p-0 md:bg-transparent ">
        <label htmlFor="search_description" className="p-3 bg-white  md:hidden ">
          <span
            aria-label="Find"
            alt="Find"
            aria-hidden="false"
            role="img"
           
          >
            <svg width="18" height="18" className="icon_svg">
              <path d="M15.913 14.224a1.324 1.324 0 0 0-.3-.466h.009l-3.377-3.376a5.492 5.492 0 0 0 .802-2.857 5.523 5.523 0 1 0-5.522 5.52 5.491 5.491 0 0 0 2.856-.801l3.369 3.369.004.003c.132.131.293.231.471.298.143.053.296.086.458.086.727 0 1.317-.589 1.317-1.316 0-.163-.033-.317-.087-.46zM7.525 10.94a3.422 3.422 0 0 1-3.418-3.416 3.422 3.422 0 0 1 3.418-3.417 3.422 3.422 0 0 1 3.416 3.417 3.421 3.421 0 0 1-3.416 3.416z"></path>
            </svg>
          </span>
        </label>

        <div className="relative flex-1">
          <input
            name="find_desc"
            id="search_description"
            autoComplete="off"
            aria-autocomplete="list"
            className="w-full  md:p-2  md:pl-4 outline-none placeholder:text-lg placeholder:text-gray-500"
            type="search"
            placeholder="Try lunch, yoga studio, plumber"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
      </div>

      <div className="flex-1 flex items-center shadow-lg md:shadow-transparent  border md:border-0 md:mb-0  bg-white  p-1 md:p-0 md:bg-transparent ">
        <label htmlFor="search_location" className=" p-3  md:hidden">
          <span
            aria-label="Near"
            alt="Near"
            aria-hidden="false"
            role="img"
            
          >
            <svg width="16" height="16" className="icon_svg">
              <path d="M8 14.786a.748.748 0 0 1-.53-.22L3.934 11.03a5.75 5.75 0 1 1 8.132 0L8.53 14.566a.747.747 0 0 1-.53.22ZM8 2.714A4.25 4.25 0 0 0 4.995 9.97L8 12.975l3.005-3.005A4.251 4.251 0 0 0 8 2.714Z"></path>
              <path d="M8 8.94a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
            </svg>
          </span>
        </label>

        <div className="relative flex-1">
          <input
            id="search_location"
            name="find_loc"
            autoComplete="off"
            aria-autocomplete="list"
            className="w-full  md:p-2  md:border-l-2 md:borde-gray-300  md:pl-4 outline-none placeholder:text-lg placeholder:text-gray-500"
            type="search"
            placeholder="address, neighborhood, city, state or zip"
            value={location}
            onChange={handleLocationChange}
          />
        </div>
      </div>

      <div className="ml-4  items-center hidden md:flex cursor-pointer">
        <button
          aria-label="Search"
          type="submit"
          className="p-4  bg-[#d21313] rounded-r text-white hover:bg-[#d21313dc]"
          value="submit"
        >
          <span className="icon--24-search-v2">
            <svg width="24" height="24" className="icon_svg">
              <path d="m21.853 20.355-3.444-3.443a9.428 9.428 0 1 0-16.761-6.171 9.428 9.428 0 0 0 15.348 7.586l3.443 3.442a1 1 0 1 0 1.414-1.414ZM5.82 16.245a7.429 7.429 0 1 1 5.253 2.175 7.38 7.38 0 0 1-5.253-2.176Z" fill="white" ></path>
            </svg>
          </span>
        </button>
      </div>

    </form>
  );
};

export default SearchForm;
