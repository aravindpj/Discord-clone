// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { motion } from "framer-motion";
import backgroundImage from "../assets/authBackground.png";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,12}$/;
  const usernameRegex = /^[a-zA-Z]{6}$/;

  const isEmailValid = emailRegex.test(email);
  const isPasswordValid = passwordRegex.test(password);
  const isUsernameValid = usernameRegex.test(username);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here if all inputs are valid
    console.log("Form submitted");
  };

  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="h-screen flex justify-center items-center font-['poppins'] text-white">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 p-8 rounded-lg flex flex-col items-center"
        >
          <h2 className="text-3xl font-semibold mb-8 text-white">
            Create an Account
          </h2>
          <form onSubmit={handleSubmit} className="mb-4 flex flex-col items-start w-full">
            <label htmlFor="email" className="text-sm mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              className={`p-2 rounded-md bg-gray-900 w-full mb-4 ${isEmailValid ? '' : 'border-red-500'}`}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="displayName" className="text-sm mb-1">
              Display Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="displayName"
              className="p-2 rounded-md bg-gray-900 w-full mb-4"
              placeholder="Enter your display name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />

            <label htmlFor="username" className="text-sm mb-1">
              Username (6 characters) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="username"
              className={`p-2 rounded-md bg-gray-900 w-full mb-4 ${isUsernameValid ? '' : 'border-red-500'}`}
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label htmlFor="password" className="text-sm mb-1">
              Password (8-12 Characters) <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              className={`p-2 rounded-md bg-gray-900 w-full mb-4 ${isPasswordValid ? '' : 'border-red-500'}`}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label htmlFor="dob" className="text-sm mb-1">
              Date of Birth (DD/MM/YYYY) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="dob"
              className="p-2 rounded-md bg-gray-900 w-full mb-4"
              placeholder="DD/MM/YYYY"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />

            <button className="bg-blue-800 text-white px-6 py-3 rounded-md hover:bg-purple-800 focus:outline-none focus:ring w-full mb-4" type="submit" disabled={!isEmailValid || !isUsernameValid || !isPasswordValid}>
              Signup
            </button>
          </form>
          <p className="text-white text-sm mb-4">
            By registering, you agree to Discord&rsquo;s{" "}
            <span className="underline">Terms and Conditions</span>.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;
