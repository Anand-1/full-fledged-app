import React from "react";
// Step 1 Import for routes
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Admin from "./Components/Admin/Admin";
import Users from "./Components/Users/Users";
// Step 2 : Create and import RootLoyout,will serve as base
import Rootlayout from "./layouts/Root";
import Login from "./Components/Admin/Login/Login";
import Registration from "./Components/Admin/Registration/Registration";
import RegisteredUser from "./Components/Admin/RegisteredUsers/RegisteredUsers";
import ListPage from "./Components/Users/ListPage/ListPage";
import ProductPage from "./Components/Users/Productpage/ProductPage";
import LandingPage from "./Components/LandingPage/LandingPage";

// Step 3: Create Routes using createBrowserRouter
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      { path: "/admin", element: <Admin /> },
      { path: "login", element: <Login /> },
      { path: "registration", element: <Registration /> },
      { path: "/users", element: <Users /> },
      { path: "/", element: <LandingPage /> },
    ],
  },
  {
    path: "/admin",
    element: <Rootlayout />,
    children: [
      { path: "users", element: <RegisteredUser /> },
      { path: "registration", element: <Registration /> },
    ],
  },
  {
    path: "/users",
    element: <Rootlayout />,
    children: [
      { path: "productlist", element: <ProductPage /> },
      { path: "users", element: <ListPage /> },
    ],
  },
]);
function App() {
  return (
    <>
      {/*Step 4: routes needs to be passed to RouteProvider */}
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
