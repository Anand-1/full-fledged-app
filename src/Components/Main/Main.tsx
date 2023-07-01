import React from "react";
import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import Users from "../Users/Users";
import Admin from "../Admin/Admin";

const Main = () => {
  return (
    <>
      <Header />
      <Users />
      <Admin />
      <Footer />
    </>
  );
};

export default Main;
