import React from "react";
import { useSelector } from "react-redux";
import PersonalDetails from "./PersonalDetails";
import InfoDetails from "./InfoDetails";
import UploadCv from "./UploadCv";

const Form = () => {
  const stepValue = useSelector((state: any) => state.stepper.step);
  switch (stepValue) {
    case 1:
      return <PersonalDetails />;
    case 2:
      return <InfoDetails />;
    case 3:
      return <UploadCv />;
    default:
      return null;
  }
};

export default Form;
