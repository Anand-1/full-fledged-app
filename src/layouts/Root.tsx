import { Outlet } from "react-router-dom";
// RootLayour returns Outlet , it serves as window for routes
const Rootlayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Rootlayout;
