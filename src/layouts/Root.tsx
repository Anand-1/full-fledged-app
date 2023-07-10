import { Outlet } from "react-router-dom";
import MainNavigation from "../Components/MainNavigation/MainNavigation";
const Rootlayout = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
};

export default Rootlayout;
