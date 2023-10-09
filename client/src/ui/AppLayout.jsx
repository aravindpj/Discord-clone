import Friends from "../pages/Friends";
import MainSidebar from "./MainSidebar";

const AppLayout = () => {
  return (
    <>
      <MainSidebar />
      <div className="ml-16 text-white">
        {/* pages */}
        <Friends />
      </div>
    </>
  );
};

export default AppLayout;
