import sergio from "../assets/sergio.jpg";
import online from "../assets/online-icon.png";
import offline from "../assets/offline-icon.png";

// eslint-disable-next-line react/prop-types
const Friend = ({imgSize , enableHoverEffect=true }) => {
  const buttonClassName = enableHoverEffect
  ? "flex w-full gap-2 items-center py-1 pl-2 rounded-sm hover:bg-discordDark-200"
  : "flex w-full gap-2 items-center py-1 pl-2 rounded-sm";
  const imgStyle = {
    width: `${imgSize}px`,
    height: `${imgSize}px`,
  };
  return (
    <button className={buttonClassName}>
      <div className="relative">
        <img
          src={sergio}
          alt=""
          style={imgStyle} className="rounded-full object-cover"
        />
        <img
          src={online}
          alt=""
          className="w-[10px] absolute right-0 bottom-0"
        />
      </div>
      <span>sergio</span>
    </button>
  );
};

export default Friend;
