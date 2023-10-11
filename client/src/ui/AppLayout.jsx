import { Outlet } from "react-router-dom";
import MainSidebar from "./MainSidebar";

const AppLayout = () => {
  return (
    <>
      <MainSidebar />
      <div className="ml-16 text-white">
        {/* pages */}
        <Outlet/>
      </div>
    </>
  );
};

export default AppLayout;
