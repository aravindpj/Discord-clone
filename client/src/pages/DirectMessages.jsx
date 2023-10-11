import { Outlet } from "react-router-dom";
import FriendSidebar from "../features/Friends/FriendSidebar";

const DirectMessages = () => {
  return (
    <div className="flex">
      <FriendSidebar />
      {/* <div className="text-black">Message</div> */}
      <Outlet />
    </div>
  );
};

export default DirectMessages;
