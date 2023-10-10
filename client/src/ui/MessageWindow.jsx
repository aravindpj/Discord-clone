const MessagesWindow = ({children}) => {
  return (
    <div id="message-window"className="scroll-smooth shadow-inner bg-transparent p-4 mr-1 flex-1 overflow-y-scroll flex gap-5 flex-col">
      {children}
    </div>
  );
};

export default MessagesWindow;
