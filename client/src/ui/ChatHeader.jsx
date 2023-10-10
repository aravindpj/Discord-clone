import Friend from "./Friend";
import CallIcon from "../assets/icons/call.svg";
import VideoIcon from "../assets/icons/video.svg";
import PinIcon from "../assets/icons/pin.svg";
import AddFriendIcon from "../assets/icons/add-friend.svg";
import InboxIcon from "../assets/icons/inbox.svg";
import HelpIcon from "../assets/icons/help.svg";
import Searchbar from "./Searchbar";
const ChatHeader = () => {
  return (
    <div className="py-2 px-4 border-b-2 border-discordDark-400 flex justify-between items-center">
      <div>
        <Friend imgSize={24} enableHoverEffect={false} />
      </div>
      <div className="flex gap-4 items-center">
        <button>
          <img src={CallIcon} alt="" />
        </button>
        <button>
          <img src={VideoIcon} alt="" />
        </button>
        <button>
          <img src={PinIcon} alt="" />
        </button>
        <button>
          <img src={AddFriendIcon} alt="" />
        </button>
        <Searchbar />
        <button>
          <img src={InboxIcon} alt="" />
        </button>
        <button>
          <img src={HelpIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
