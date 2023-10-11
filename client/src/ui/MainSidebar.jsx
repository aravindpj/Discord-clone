import logo from "../assets/logo.png";
import card from "../assets/ServerCardIcon.png";
import { HiPlus } from "react-icons/hi";
import { FaCompass } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  
  return (
    <div className=" bg-discordDark-400 flex flex-col items-center w-16 px-2 py-2 fixed top-0 bottom-0">
      <NavLink to="channel"  className="bg-discordDark-200 transform cursor-pointer transition-transform hover:scale-110 rounded-full hover:rounded-2xl hover:bg-discordBlue w-12">
        <img src={logo} alt="discord logo" />
      </NavLink>

      <div className="bg-discordDark-100 h-[2px] w-[32px] rounded-xl mt-[8px]"></div>

      <div className="flex flex-col gap-2 mt-2">
        <NavLink to="server" className="cursor-pointer transform transition-transform hover:scale-110 rounded-full hover:rounded-2xl hover:bg-discordDark-200 w-12">
          <img
            className="rounded-full hover:rounded-2xl"
            src={card}
            alt="server-icon"
          />
        </NavLink>
        <>
          <button className="bg-discordDark-100 text-green-500 transform transition-transform hover:scale-110 cursor-pointer rounded-full hover:rounded-2xl hover:text-white hover:bg-green-500 h-12 w-12 flex items-center justify-center">
            <HiPlus className="text-xl" />
          </button>
          <button className="bg-discordDark-100 text-green-500 transform transition-transform hover:scale-110 cursor-pointer rounded-full hover:rounded-2xl hover:text-white hover:bg-green-500 h-12 w-12 flex items-center justify-center">
            <FaCompass className="text-xl" />
          </button>
        </>
      </div>
    </div>
  );
};

export default Sidebar;
