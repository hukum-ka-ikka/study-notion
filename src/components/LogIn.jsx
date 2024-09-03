import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loginImage from "../assets/login.png";
import frameImage from "../assets/frame.png";

const LogIn = ({ user, toggleUser }) => {
  const navigate = useNavigate();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const loginNotify = () => {
    toast.success("Logged In Succesfully");
  };

  const handleSubmit = () => {
    loginNotify();
    navigate("/dashboard");
    toggleUser(user);
  };

  const handlePasswordEyeClick = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex gap-72">
      <div className="flex flex-col gap-3 mt-10 ml-[11.5vw] w-96">
        <div>
          <h1 className="text-white font-bold text-2xl">Welcome Back</h1>
        </div>
        <div>
          <p className="text-white text-sm">
            Build skills for today, tomorrow, and beyond.
          </p>
          <p className="text-green-700 italic text-sm">
            Education to future-proof your career.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <label className="text-white text-sm">
            Email Address <span className="text-red-700">*</span>
            <br />
            <input
              id="email"
              type="text"
              required
              placeholder="Enter Email Adress"
              className="mt-1 bg-[rgb(21,28,41)] h-8 w-[100%] rounded-lg p-3"
            />
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={handlePasswordEyeClick}
              className="absolute z-10 size-4 text-white right-3 top-9"
            >
              {passwordVisible ? <FaEye /> : <FaEyeSlash />}
            </button>
            <label className="text-white text-sm relative">
              Password <span className="text-red-700">*</span>
              <br />
              <input
                id="password"
                type={passwordVisible ? "text" : "password"}
                required
                placeholder="Enter Password"
                className="mt-1 bg-[#151c29] h-8 w-[100%] rounded-lg p-3"
              />
            </label>
          </div>

          <div className="flex justify-end -mt-2">
            <p className="text-blue-500 text-xxs">Forgot Password?</p>
          </div>

          <button className="mt-4 bg-[#CBA608] rounded-md flex justify-center items-center pb-1 active:bg-[#9d7e30]">
            Log In
          </button>

          <div className="flex justify-center items-center gap-1">
            <div className="w-44 border border-[#111e2a] h-0"></div>
            <p className="text-[#111e2a]">OR</p>
            <div className="w-44 border border-[#111e2a] h-0"></div>
          </div>

          <div className="flex justify-center items-center gap-2 border border-[#111e2a] p-2 rounded-lg">
            <FcGoogle className="size-5" />
            <p className="text-white text-sm">Sign in with Google</p>
          </div>
        </form>
      </div>

      <div className="mt-14 h-64 w-64 relative">
        <img
          src={loginImage}
          loading="lazy"
          className="h-[95%] w-[95%] absolute z-10 top-0 left-0"
        />
        <img
          src={frameImage}
          loading="lazy"
          className="h-[95%] w-[95%] absolute z-0 bottom-0 right-0"
        />
      </div>
    </div>
  );
};

export default LogIn;
