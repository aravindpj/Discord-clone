// eslint-disable-next-line react/prop-types
const MessagesWindow = ({ children, topRef }) => {
  return (
    <>
      <div
        ref={topRef}
        id="message-window"
        className="scroll-smooth shadow-inner bg-transparent p-4 mr-1 flex-1 overflow-y-scroll flex gap-5 flex-col"
      >
        {children}
      </div>
    </>
  );
};

export default MessagesWindow;
