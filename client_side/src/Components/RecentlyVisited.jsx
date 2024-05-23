import React, { useState } from "react";

const RecentlyVisited = () => {
  return (
    <div className="w-full p-5 lg:pl-20 lg:mt-12">
      <h1 className=" text-xl text-gray-800 font-bold pb-20">
        Visited one of these places recently?
      </h1>
      <div className="pb-6 flex item-center justify-center ">
        <img
          src="https://s3-media0.fl.yelpcdn.com/assets/public/nice_review_200x180_v2.yji-6bdb62fffc79b6626155.svg"
          alt="thumbs up image"
          width="133"
          height="120"
        />
      </div>
      <div className="pb-20">
        <p className="text-center text-sm">
          We’re out of suggestions for you right now. Keep on using Yelp and
          we’ll have some more for you soon.
        </p>
      </div>
    </div>
  );
};

export default RecentlyVisited;
