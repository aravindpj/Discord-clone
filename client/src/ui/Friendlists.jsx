import { HiPlus } from "react-icons/hi";
import sergio from "../assets/sergio.jpg";
import online from "../assets/online-icon.png";
import offline from "../assets/offline-icon.png";
const Friendlists = ({ data, render }) => {
  return (
    <div className="flex flex-col gap-2 mt-4">
      <div className="flex gap-2 px-2 items-center justify-between text-xs text-gray-400">
        <p className="uppercase">Direct Messages</p>
        <HiPlus className="text-base cursor-pointer" />
      </div>

      <button className="flex gap-2 items-center py-1 pl-2 rounded-sm hover:bg-discordDark-200">
        <div className="relative">
          <img
            src={sergio}
            alt=""
            className="w-8 h-8 rounded-full object-cover"
          />
          <img
            src={online}
            alt=""
            className="w-[10px] absolute right-0 bottom-0"
          />
        </div>
        <span>sergio</span>
      </button>
    </div>
  );
};

export default Friendlists;
