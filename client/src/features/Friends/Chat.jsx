import ChatHeader from "../../ui/ChatHeader";
import MessageBox from "../../ui/MessageBox";
import MessagesWindow from "../../ui/MessageWindow";
import sergio from "../../assets/sergio.jpg";
import { useEffect, useRef } from "react";

const Chat = () => {
  const Ref= useRef();
  useEffect(() => {
    Ref.current?.lastElementChild.scrollIntoView({
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="flex relative flex-col bg-discordDark-200 h-screen flex-1">
      <ChatHeader />
      <MessagesWindow topRef={Ref}>
        <div className="flex flex-col gap-3">
          <img
            src={sergio}
            alt=""
            className="rounded-full w-20 h-20 object-cover"
          />
          <p className="font-bold text-3xl">Sergio</p>
          <p className="font-bold text-lg">sergio@1245</p>
          <p className="text-sm text-gray-300">
            This is the beginning of your direct message history with{" "}
            <span className="font-medium">Sergio</span>
          </p>
          <div className="flex gap-2 items-center mt-2">
            <button className="px-5 py-[1px] bg-discordDark-100 text-sm rounded-sm">
              Add Friend
            </button>
            <button className="px-5 py-[1px] bg-discordDark-100 text-sm rounded-sm">
              Block
            </button>
          </div>
        </div>

        {/* message */}
        {Array(14)
          .fill(0)
          .map(() => {
            return (
              <>
                <div className="flex gap-4">
                  <div>
                    <img
                      src={sergio}
                      alt=""
                      className="rounded-full w-9 h-9 object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-base">
                      sergio{" "}
                      <time className="text-gray-400 text-xs">10/10/2023</time>
                    </p>
                    <p className="p-0 text-sm text-gray-200">Hey man goodmorning what is your plan today</p>
                  </div>
                </div>
              </>
            );
          })}
      </MessagesWindow>
      <MessageBox />
    </div>
  );
};

export default Chat;
