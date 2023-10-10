import Chat from "../features/Friends/Chat";
import FriendSidebar from "../features/Friends/FriendSidebar";

const Friends = () => {
  return (
    <div className="flex">
      <FriendSidebar />
      {/* <div className="text-black">Message</div> */}
      <Chat/>
    </div>
  );
};

export default Friends;
