import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";

const Main = () => {
  return (
    <>
      <Header />
      <div className="center-aligned-element">
        <p>
          Go to <Link to="/users">users</Link>
        </p>
        <p>
          Go to <Link to="/admin">Admin</Link>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Main;
