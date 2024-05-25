import React from 'react';

const FooterLinks = () => {
  return (
    <div className="pt-8 cursor-pointer md:hidden ">
      <ul className="list-none p-0 m-0 flex flex-wrap space-x-1">
        <li className="flex items-center mb-2">
          <a href="https://www.yelp.com/about" className="text-[rgba(2,122,151,1)] hover:text-gray-600">About</a>
          <span className="text-black ml-2">•</span>
        </li>
        <li className="flex items-center mb-2">
          <a href="https://blog.yelp.com/" className="text-[rgba(2,122,151,1)] hover:text-gray-600">Blog</a>
          <span className="text-black ml-2">•</span>
        </li>
        <li className="flex items-center mb-2">
          <a href="https://www.yelp-support.com/" className="text-[rgba(2,122,151,1)] hover:text-gray-600">Support</a>
          <span className="text-black ml-2">•</span>
        </li>
        <li className="flex items-center mb-2">
          <a href="https://www.yelp.com/static?p=tos" className="text-[rgba(2,122,151,1)] hover:text-gray-600">Terms</a>
          <span className="text-black ml-2">•</span>
        </li>
        <li className="flex items-center mb-2">
          <a href="https://www.yelp.com/tos/privacy_policy" className="text-[rgba(2,122,151,1)] hover:text-gray-600">Privacy Policy</a>
          <span className="text-black ml-2">•</span>
        </li>
        <li className="flex items-center mb-2">
          <a href="https://www.yelp-support.com/article/Your-Privacy-Choices?l=en_US" className="text-[rgba(2,122,151,1)] hover:text-gray-600">Your Privacy Choices</a>
        </li>
      </ul>
    </div>
  );
}

export default FooterLinks;
