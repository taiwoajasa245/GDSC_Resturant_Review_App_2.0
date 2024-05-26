import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Nav from "../NavBars/Nav";
import Footer from "../Layout/Footer";
import Google from "../../assets/images/google.svg";
import Apple from "../../assets/images/apple.svg";
import { useValidateSignupToken } from "../utils/validateToken";
import ModalBox from "../Layout/modalBox";
import BirthdateSelector from "../Layout/BirthdateSelector";

function SignUp() {
  const history = useHistory();

  useValidateSignupToken();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    zipcode: "",
    month: "",
    day: "",
    year: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [successImg, setSuccessImg] = useState("");
  const [errorImg, setErrorImg] = useState("");

  const classX =
    "mt-2  px-3 py-2 bg-white border shadow-sm border-slate-700 placeholder-slate-400 focus:outline-none focus:border-sky-300  block w-full rounded-md sm:text-sm focus:ring-1";
  const URL = import.meta.env.VITE_SERVER_URL;

  // listen for input values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log(formData);
      const response = await axios.post(`${URL}/api/auth/signup`, formData);
      const data = response.data.data;
      const token = data.token;
      localStorage.setItem("token", token);

      setMessage("Signup Successful");
      setShowModal(true);
      setSuccessImg(
        <svg
          fill="gray"
          height="80px"
          width="80px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
          className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-300"
        >
          <g>
            <path
              d="M474.045,173.813c-4.201,1.371-6.494,5.888-5.123,10.088c7.571,23.199,11.411,47.457,11.411,72.1
      c0,62.014-24.149,120.315-68,164.166s-102.153,68-164.167,68s-120.316-24.149-164.167-68S16,318.014,16,256
      S40.149,135.684,84,91.833s102.153-68,164.167-68c32.889,0,64.668,6.734,94.455,20.017c28.781,12.834,54.287,31.108,75.81,54.315
      c3.004,3.239,8.066,3.431,11.306,0.425c3.24-3.004,3.43-8.065,0.426-11.306c-23-24.799-50.26-44.328-81.024-58.047
      C317.287,15.035,283.316,7.833,248.167,7.833c-66.288,0-128.608,25.813-175.48,72.687C25.814,127.392,0,189.712,0,256
      c0,66.287,25.814,128.607,72.687,175.479c46.872,46.873,109.192,72.687,175.48,72.687s128.608-25.813,175.48-72.687
      c46.873-46.872,72.687-109.192,72.687-175.479c0-26.332-4.105-52.26-12.201-77.064
      C482.762,174.736,478.245,172.445,474.045,173.813z"
            ></path>
            <path
              d="M504.969,83.262c-4.532-4.538-10.563-7.037-16.98-7.037s-12.448,2.499-16.978,7.034l-7.161,7.161
      c-3.124,3.124-3.124,8.189,0,11.313c3.124,3.123,8.19,3.124,11.314-0.001l7.164-7.164c1.51-1.512,3.52-2.344,5.66-2.344
      s4.15,0.832,5.664,2.348c1.514,1.514,2.348,3.524,2.348,5.663s-0.834,4.149-2.348,5.663L217.802,381.75
      c-1.51,1.512-3.52,2.344-5.66,2.344s-4.15-0.832-5.664-2.348L98.747,274.015c-1.514-1.514-2.348-3.524-2.348-5.663
      c0-2.138,0.834-4.149,2.351-5.667c1.51-1.512,3.52-2.344,5.66-2.344s4.15,0.832,5.664,2.348l96.411,96.411
      c1.5,1.5,3.535,2.343,5.657,2.343s4.157-0.843,5.657-2.343l234.849-234.849c3.125-3.125,3.125-8.189,0-11.314
      c-3.124-3.123-8.189-3.123-11.313,0L212.142,342.129l-90.75-90.751c-4.533-4.538-10.563-7.037-16.98-7.037
      s-12.448,2.499-16.978,7.034c-4.536,4.536-7.034,10.565-7.034,16.977c0,6.412,2.498,12.441,7.034,16.978l107.728,107.728
      c4.532,4.538,10.563,7.037,16.98,7.037c6.417,0,12.448-2.499,16.977-7.033l275.847-275.848c4.536-4.536,7.034-10.565,7.034-16.978
      S509.502,87.794,504.969,83.262z"
            ></path>
          </g>
        </svg>
      );
    } catch (error) {
      if (error) {
        setMessage("Error during SignUp contact the site admin");
        setShowModal(true);

        setErrorImg(
          <svg
            className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        );

        history.push("/signup");
      }
    }
  };

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <Nav />

      <div className="w-full flex flex-col justify-center items-center">
        <section className=" max-w-md border-spacing-4 ">
          <div className="max-w-4xl mx-auto p-5 md:flex md:items-center md:justify-between md:flex-col">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-center mb-2 text-[#d21313] ">
                Sign Up for Yelp
              </h1>
              <p className="text-[#333] font-bold text-lg mb-2 ">
                connect with great local businesses.
              </p>
              <p>
                By continuing, you agree to Yelp’s{" "}
                <a
                  className="text-[rgba(2,122,151,1)]"
                  href="https://www.yelp.com/static?p=tos"
                >
                  Terms of Service
                </a>{" "}
                and acknowledge Yelp’s{" "}
                <a
                  className="text-[rgba(2,122,151,1)]"
                  href="https://www.yelp.com/tos/privacy_policy"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </div>

            <div className="mt-5 w-full flex flex-col items-center justify-center">
              <button className="flex justify-center items-center w-full my-2  bg-white border border-gray-300 rounded shadow-md max-w-xs px-6 py-3 text-sm  text-gray-800 ">
                <img src={Google} className="w-5 mr-4 " alt="Google" />
                <span>Continue with Google</span>
              </button>
              <button className="flex w-full justify-center items-center text-white bg-black border border-gray-300 rounded-lg shadow-md max-w-xs px-8 py-3 text-sm font-medium">
                <img src={Apple} className="w-5 mr-4" alt="Apple Logo" />
                <span>Continue with Apple</span>
              </button>
              <p className="text-gray-900 text-center mt-3">
                Don't worry, we never post without your permission.
              </p>
            </div>

            <fieldset className="relative flex items-center justify-center my-5 w-full max-w-xs border-t border-gray-300 mt-10">
              <legend className="absolute px-2 bg-white text-gray-500 text-xl">
                OR
              </legend>
            </fieldset>

            <div className="mt-5 ">
              <form onSubmit={handleSubmit} className="max-w-xs">
                <div className="flex ">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="mt-2 mr-2 px-3 py-2 bg-white border shadow-sm border-slate-700 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className={classX}
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={classX}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className={classX}
                />
                <input
                  type="number"
                  name="zipcode"
                  placeholder="ZIP Code"
                  value={formData.zipcode}
                  onChange={handleChange}
                  required
                  className={classX}
                />
                <div>
                  <p className="my-2 text">
                    Birthday{" "}
                    <span className="text-gray-400 text-xs">Optional</span>
                  </p>

                  <BirthdateSelector
                    month={formData.month}
                    day={formData.day}
                    year={formData.year}
                    onMonthChange={(value) => handleInputChange("month", value)}
                    onDayChange={(value) => handleInputChange("day", value)}
                    onYearChange={(value) => handleInputChange("year", value)}
                  />
                </div>
                <button
                  type="submit"
                  className="flex w-full justify-center mt-3 rounded-md bg-[#d21313] px-3 py-1.5  font-semibold leading-6 text-white shadow-sm hover:bg-[#d21313e5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d21313]"
                >
                  Sign Up
                </button>
              </form>

              <div className="my-5 text-center">
                <small className="text-sm ">
                  <span className="text-gray-400"> Already on Yelp? </span>
                  <Link to="/login" className="text-[#0070E0] ">
                    Log in
                  </Link>
                </small>
              </div>
            </div>
          </div>
        </section>
        <div></div>
      </div>
      <ModalBox
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="SignUp"
        message={message}
        successImg={successImg}
        errorImg={errorImg}
      />
      <Footer />
    </>
  );
}

export default SignUp;
