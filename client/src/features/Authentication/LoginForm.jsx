import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/authBackground.png";
const LoginForm = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-800 p-10 rounded-xl flex justify-center items-center space-x-12 shadow-lg font-['Poppins']"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-white text-center flex flex-col items-start"
        >
          <h2 className="text-3xl font-semibold mb-2">WELCOME BACK!</h2>
          <p className="text-base text-gray-400 mb-6">
            we are excited to see you again...
          </p>
          <div className="mb-4 flex flex-col items-start w-72">
            <label htmlFor="email" className="block text-sm font-medium">
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 rounded-md bg-gray-900 w-full"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6 flex flex-col items-start w-72">
            <label htmlFor="password" className="block text-sm font-medium">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 rounded-md bg-gray-900 w-full"
              placeholder="Enter your password"
            />
          </div>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-blue-800 text-white px-6 py-3 rounded-md hover:bg-purple-800 focus:outline-none focus:ring w-72"
          >
            Login
          </motion.button>
          <p className="text-gray-400 text-base mt-4">
            Need an account?{" "}
            <Link to="/signup" className="text-blue-400 hover:underline">
              Register
            </Link>
          </p>
        </motion.div>

        <div className="text-white text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <img
              src="https://support.discord.com/hc/user_images/BE8K-8GQx85mQTcloqaqrw.png"
              alt="QR Code"
              className="w-40 h-40 object-cover mb-12"
            />
          </motion.div>
          <h2 className="text-xl font-semibold mb-2">
            Login with this QR code
          </h2>
          <p className="text-center text-base text-gray-400 mt-2">
            Scan this with {""}
            <span className="font-bold">Discord mobile app</span> {""}
            to login instantly.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginForm;
