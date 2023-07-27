import React from "react";
import { Link } from "react-router-dom";
import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";

const Admin = () => {
  return (
    <>
      <Header />
      <h1>Admin Component </h1>
      <div className="center-aligned-element">
        <p>
          Go to <Link to="/admin/registration">Registration</Link>
        </p>
        <p>
          Go to <Link to="/admin/login">Login</Link>
        </p>
        <p>
          Go to <Link to="/admin/users">registered users</Link>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Admin;
