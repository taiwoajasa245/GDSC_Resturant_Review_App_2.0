import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Google_Logo from "../../assets/images/google.svg";
import Apple_Logo from "../../assets/images/apple.svg";
import Nav from "../NavBars/Nav";
import { validateLoginToken } from "../utils/validateToken";
import ModalBox from '../modalBox'

function Login() {
  const URL = import.meta.env.VITE_SERVER_URL;
  let history = useHistory();
  const classX =
    "mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");

  validateLoginToken(history);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${URL}/api/login`, {
        email,
        password,
      });

      const data = response.data;
      const token = data.token;
      localStorage.setItem("token", token); // Store the token in localStorage
      
      setMessage("LogIn Successful");
      setShowModal(true);
      // history.push("/dashboard-panel");

    } catch (error) {
      // console.log(error);
      history.push("/login");
      setMessage(error.message);
      setShowModal(true);
    }
  };

  return (
    <>
      <Nav />
      <div>
        <div className="max-w-4xl mx-auto p-5 md:flex md:items-center md:justify-between">
          {/* Your existing login form JSX */}
          <div>
            <h1 className=" text-2xl text-center mb-2 text-[#d21313] font-bold">
              Log In to Yelp
            </h1>

            <p className="text-center text-sm">
              By continuing, you agree to Yelp’s{" "}
              <a
                href="https://www.yelp.com/static?p=tos"
                className="text-[#0070E0]"
              >
                Terms of Service
              </a>{" "}
              and acknowledge Yelp’s{" "}
              <a
                href="https://www.yelp.com/tos/privacy_policy"
                className="text-[#0070E0] "
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>

          <div className="mt-5">
            <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              <img src={Google_Logo} className="w-5" alt="Google" />
              <span>Continue with Google</span>
            </button>
            <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              <img src={Apple_Logo} className="w-5" alt="Apple" />
              <span>Continue with Apple</span>
            </button>
            <p className="text-gray-400">
              Don't worry, we never post without your permission.
            </p>
          </div>

          <fieldset className="my-5 w-full text-center">
            <legend>OR</legend>
          </fieldset>

          <div className="mt-5">
            <div className="max-w-xs">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className={classX}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                className={classX}
              />
              <button
                onClick={handleSubmit}
                className="flex w-full justify-center rounded-md bg-[#d21313] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#d21313e5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d21313]"
              >
                Log In
              </button>
            </div>
            <small>
              New to Yelp?{" "}
              <Link to="/signup">
                {" "}
                <a className="text-blue-900"> Sign up </a>
              </Link>
            </small>
          </div>
        </div>
      </div>
      <ModalBox
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Login Error"
        message={message}
      />
    </>
  );
}

export default Login;
