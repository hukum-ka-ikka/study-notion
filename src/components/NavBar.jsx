import React, { useState } from "react";
import { TbCircleLetterS } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NavBar = ({ user, toggleUser }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const logOutNotify = () => {
    toast.warning("Logged Out Succesfully");
  };

  const handleLogInOut = () => {
    if (!user) {
      navigate("/login");
    } else {
      logOutNotify();
      toggleUser(user);
      navigate("/");
    }
  };

  const handleSignUp = () => {
    if (!user) {
      navigate("/signup");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex justify-around p-2">
      <div>
        <button className="flex gap-1" onClick={handleLogoClick}>
          <TbCircleLetterS className="text-white size-7" />
          <h3 className="text-white text-lg">StudyNotion</h3>
        </button>
      </div>
      <div className="flex gap-2">
        <p className="text-white">Home</p>
        <p className="text-white">About</p>
        <p className="text-white">Contact</p>
      </div>
      <div className="flex gap-2">
        <button
          className="text-white bg-[#151c29] p-1 px-2 rounded-lg"
          onClick={handleLogInOut}
        >
          {user ? "Log Out" : "Log In"}
        </button>
        <button
          className="text-white bg-[#151c29] p-1 px-2 rounded-lg"
          onClick={handleSignUp}
        >
          {user ? "Dashboard" : "Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
