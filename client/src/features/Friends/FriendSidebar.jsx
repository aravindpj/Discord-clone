import FriendsIcon from "../../assets/icons/friends.svg";
import FindConversation from "../../ui/FindConversation";
import Friendlists from "../../ui/Friendlists";
import SidebarButton from "../../ui/SidebarButton";
const FriendSidebar = () => {
  return (
    <div className="relative bg-discordDark-300 h-screen flex-col items-center w-60 px-3 py-2 overflow-hidden">
      <FindConversation />
      <div className="bg-discordDark-400 left-0 right-0 absolute h-[2px] rounded-xl my-[9.6px]"></div>
      <div className="flex-1 h-full py-3 mt-1">
        <SidebarButton src={FriendsIcon} text="Friends" to={"@me"}/>
        <Friendlists />
      </div>
    </div>
  );
};

export default FriendSidebar;
