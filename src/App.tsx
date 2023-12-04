import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Admin from "./Components/Admin/Admin";
import Users from "./Components/Users/Users";
import Rootlayout from "./layouts/Root";
import Login from "./Components/Admin/Login/Login";
import Registration from "./Components/Admin/Registration/Registration";
import RegisteredUser from "./Components/Admin/RegisteredUsers/RegisteredUsers";
import ListPage from "./Components/Users/ListPage/ListPage";
import ProductPage from "./Components/Users/Productpage/ProductPage";
import LandingPage from "./Components/LandingPage/LandingPage";
import GrandParent from "./Components/HooksUsage/GrandParent";
import Parent from "./Components/HooksUsage/Parent";
import Child from "./Components/HooksUsage/Child";

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
  {
    path: "/hooks",
    element: <Rootlayout />,
    children: [
      { path: "grandparent", element: <GrandParent /> },
      { path: "parent", element: <Parent /> },
      { path: "child", element: <Child /> },
      { path: "*", element: <GrandParent /> },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
