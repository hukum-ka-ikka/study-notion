import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Navigate, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();

  const [signUpMode, setSignUpMode] = useState("Student");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    signUpMode: "Student",
    createPassword: "",
    confirmPassword: "",
  });

  const [createPasswordVisible, setCreatePasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const signUpNotify = () => {
    toast.success("Sign Up Successful! Now log in to proceed...");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.createPassword === formData.confirmPassword) {
      signUpNotify();
      navigate("/login");
    } else {
      toast.error("Passwords do not match!");
    }
  };

  const handleStudentClick = () => {
    console.log(signUpMode);
    {
      signUpMode === "Student" ? () => {} : setSignUpMode("Student");
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      signUpMode: "Student",
    }));
  };

  const handleInstructorClick = () => {
    console.log(signUpMode);
    {
      signUpMode === "Instructor" ? () => {} : setSignUpMode("Instructor");
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      signUpMode: "Instructor",
    }));
  };

  const handleCreatePasswordEyeClick = () => {
    setCreatePasswordVisible(!createPasswordVisible);
  };

  const handleConfirmPasswordEyeClick = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="flex gap-72">
      <div className="flex flex-col flex-wrap gap-3 mt-10 ml-[11.5vw] w-96 min-h-[100vh]">
        <div>
          <h1 className="text-white font-bold text-2xl">
            Join the millions learning to code with StudyNotion for free
          </h1>
        </div>
        <div>
          <p className="text-white text-sm">
            Build skills for today, tomorrow, and beyond.
          </p>
          <p className="text-green-700 italic text-sm">
            Education to future-proof your career.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 ">
          <div className="flex gap-1 p-1 bg-[#151c29] w-fit h-auto rounded-3xl">
            <button
              type="button"
              onClick={handleStudentClick}
              className={`text-white ${
                signUpMode === "Student" ? "bg-[#00080F]" : ""
              } rounded-3xl p-1 px-3 text-sm`}
            >
              Student
            </button>
            <button
              type="button"
              onClick={handleInstructorClick}
              className={`text-white ${
                signUpMode === "Instructor" ? "bg-[#00080F]" : ""
              } rounded-3xl p-1 px-3 text-sm`}
            >
              Instructor
            </button>
          </div>
          <div className="flex gap-5">
            <div>
              <label className="text-white text-sm">
                First Name <span className="text-red-700">*</span>
                <br />
                <input
                  name="firstName"
                  type="text"
                  required
                  placeholder="Enter First Name"
                  className="mt-1 bg-[#151c29] h-8 w-[100%] rounded-lg p-3"
                  onChange={handleChange}
                  value={formData.firstName}
                />
              </label>
            </div>

            <div>
              <label className="text-white text-sm">
                Last Name <span className="text-red-700">*</span>
                <br />
                <input
                  name="lastName"
                  type="text"
                  required
                  placeholder="Enter Last Name"
                  className="mt-1 bg-[#151c29] h-8 w-[100%] rounded-lg p-3 "
                  onChange={handleChange}
                  value={formData.lastName}
                />
              </label>
            </div>
          </div>
          <label className="text-white text-sm">
            Email Address <span className="text-red-700">*</span>
            <br />
            <input
              name="email"
              type="text"
              required
              placeholder="Enter Email Adress"
              className="mt-1 bg-[#151c29] h-8 w-[100%] rounded-lg p-3"
              onChange={handleChange}
              value={formData.email}
            />
          </label>
          <div className="flex gap-5">
            <div className="relative">
              <button
                type="button"
                onClick={handleCreatePasswordEyeClick}
                className="absolute z-10 size-4 text-white right-3 top-9"
              >
                {createPasswordVisible ? <FaEye /> : <FaEyeSlash />}
              </button>
              <label className="text-white text-sm">
                Create Password <span className="text-red-700">*</span>
                <br />
                <input
                  name="createPassword"
                  type={createPasswordVisible ? "text" : "password"}
                  required
                  onChange={handleChange}
                  placeholder="Enter Password"
                  className="mt-1 bg-[#151c29] h-8 w-[100%] rounded-lg p-3"
                  value={formData.createPassword}
                />
              </label>
            </div>

            <div className="relative">
              <button
                type="button"
                onClick={handleConfirmPasswordEyeClick}
                className="absolute z-10 size-4 text-white right-3 top-9"
              >
                {confirmPasswordVisible ? <FaEye /> : <FaEyeSlash />}
              </button>
              <label className="text-white text-sm">
                Confirm Password <span className="text-red-700">*</span>
                <br />
                <input
                  name="confirmPassword"
                  type={confirmPasswordVisible ? "text" : "password"}
                  required
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  className="mt-1 bg-[#151c29] h-8 w-[100%] rounded-lg p-3"
                  value={formData.confirmPassword}
                />
              </label>
            </div>
          </div>
          <div className="flex justify-end -mt-2">
            <p className="text-blue-500 text-xxs">Forgot Password?</p>
          </div>

          <button className="mt-4 bg-[#CBA608] rounded-md flex justify-center items-center pb-1 active:bg-[#9d7e30]">
            Create Account
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
          src="src/assets/signup.png"
          loading="lazy"
          className="h-[95%] w-[95%] absolute z-10 top-0 left-0"
        />
        <img
          src="src/assets/frame.png"
          loading="lazy"
          className="h-[95%] w-[95%] absolute z-0 bottom-0 right-0"
        />
      </div>
    </div>
  );
};

export default Signup;
