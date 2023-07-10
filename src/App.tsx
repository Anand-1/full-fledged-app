import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Admin from "./Components/Admin/Admin";
import Users from "./Components/Users/Users";
import Rootlayout from "./layouts/Root";
import Login from "./Components/Admin/Login/Login";
import Registration from "./Components/Admin/Registration/Registration";
import RegisteredUser from "./Components/Admin/RegisteredUsers/RegeisteredUsers";
import ListPage from "./Components/Users/ListPage/ListPage";
import ProductPage from "./Components/Users/Productpage/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      { path: "/admin", element: <Admin /> },
      { path: "/users", element: <Users /> },
    ],
  },
  {
    path: "/admin",
    element: <Rootlayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "registration", element: <Registration /> },
      { path: "users", element: <RegisteredUser /> },
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
      <RouterProvider router={router} />
    </>
  );
}

export default App;
