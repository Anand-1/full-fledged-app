import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchUserdata } from "../../Api/userData";
import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";

const Users = () => {
  const [userData, setUserDate] = useState(null);
  useEffect(() => {
    UserData();
  }, []);
  const UserData = async () => {
    try {
      let response = await fetchUserdata();
      setUserDate(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Header />
      <span>This is the user Component</span>
      <span>{userData}</span>
      <div className="center-aligned-element">
        <p>
          Go to <Link to="/">Landing Page</Link>
        </p>
        <p>
          Go to <Link to="/admin">Admin</Link>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Users;
