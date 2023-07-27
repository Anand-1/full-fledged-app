import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchUserdata } from "../../Api/userData";
import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";
import ProductPage from "./Productpage/ProductPage";
import "./users.css";

const Users = () => {
  const expenseDate = new Date(2012, 2, 28);
  const expenseTitle = "Car insurane";
  const expenseAmount = 234;
  const [userData, setUserDate] = useState();
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
      <div className="user-data-view">
        <span>This is the user View</span>
        <br></br>
        <span>{userData}</span>
        <br />
        <span>The date is {expenseDate.toISOString()}</span>
        <br />
        <span>The amount is {expenseAmount}</span>
        <br />
        <span>The title is {expenseTitle}</span>
        <div className="product-page-view">
          <div>
            <ProductPage
              userData={userData}
              expenseAmount={expenseAmount}
              expenseDate={expenseDate}
              expenseTitle={expenseTitle}
            />
          </div>
        </div>
      </div>

      <hr></hr>
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
