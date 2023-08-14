import React, { useState, useEffect } from "react";
import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";
import "./LandingPage.css";
import { Button, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useWindowResize from "./useWindowSize";

const LandingPage = () => {
  const navigate = useNavigate();
  const { width, height } = useWindowResize();
  console.log(width, height);

  return (
    <>
      <div className="window-size">
        <span>
          {width} * {height}
        </span>
      </div>
      <Header />
      <div className="main-section">
        <div className="heading-section">
          <Heading>Hi Anand , Welcome to the project !</Heading>
          <div className="action-section">
            <Button
              colorScheme="blue"
              type="button"
              onClick={() => navigate("/login")}
            >
              Login Now !
            </Button>
            <Button type="button" onClick={() => navigate("/registration")}>
              Register Now !
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
