// src/components/ModalBox.js
import React, { useState } from "react";
import { Navigate } from "react-router";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function ModalBox({ isOpen, onClose, title, message, successImg, errorImg }) {
  if (!isOpen) return null;

  
  const [shouldNavigate, setShouldNavigate] = useState(false);

  const handleClick = () => {
    if (
      message === "Error during SignUp contact the site admin" ||
      message === "Incorrect email or password"
    ) {
      onClose();
    } else {
      setShouldNavigate(true);
    }
  };

  if (shouldNavigate) {
    return <Navigate to="/dashboard-panel" />;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-900 bg-opacity-50">
      <div className="relative w-full max-w-md p-4 max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={onClose}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>

          <div className="p-4 md:p-5 text-center">
            {successImg}
            {errorImg}

            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              {title}
            </h3>
            <p className="mb-5 text-sm font-normal text-gray-500 dark:text-gray-400">
              {message}
            </p>
            <button
              onClick={handleClick}
              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalBox;
