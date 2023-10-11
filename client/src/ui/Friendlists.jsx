import { HiPlus } from "react-icons/hi";

import Friend from "./Friend";
import { Link } from "react-router-dom";

const Friendlists = ({ data, render }) => {
  return (
    <div className="flex flex-col gap-2 mt-4">
      <div className="flex gap-2 px-2 items-center justify-between text-xs text-gray-400">
        <p className="uppercase">Direct Messages</p>
        <HiPlus className="text-base cursor-pointer" />
      </div>
      <Link to={`@me/${1}`}>
        <Friend imgSize={30} />
      </Link>
    </div>
  );
};

export default Friendlists;
