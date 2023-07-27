import React from "react";
import Header from "../../Common/Header/Header";
import Footer from "../../Common/Footer/Footer";
import Form from "./Components/Form";
const Registration = () => {
  return (
    <>
      <Header />
      <main className="main-container">
        <h1 className="main-container__header">Multi-step Form</h1>
        <p className="main-container__subheader">
          Please submit your details with CV !
        </p>
        <Form />
      </main>
      <Footer />
    </>
  );
};

export default Registration;
