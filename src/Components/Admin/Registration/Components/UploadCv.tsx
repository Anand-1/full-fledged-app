import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { stepperActions } from "../../../../store/stepper";
import { Stepper } from "react-form-stepper";
import "../Registration.css";
import { useNavigate } from "react-router-dom";
//component for CV upload
const UploadCv = () => {
  const navigate = useNavigate();
  const [CvFile, setCvValue] = useState(Object);
  const [CoverFile, setCoverValue] = useState(Object);
  const dispatch = useDispatch();
  const backHandler = (e: any) => {
    e.preventDefault();
    dispatch(stepperActions.decrement());
  };

  const onFileCvChange = (e: any) => {
    setCvValue(e.target.files[0]);
  };
  const onFileCoverChange = (e: any) => {
    setCoverValue(e.target.files[0]);
  };

  const formData1 = new FormData();
  formData1.append("file1", CvFile);
  formData1.append("fileName", CvFile.name);

  const formData2 = new FormData();
  formData2.append("file1", CoverFile);
  formData2.append("fileName", CoverFile.name);

  const first_name = useSelector((state: any) => state.userData.firstname);
  const last_name = useSelector((state: any) => state.userData.lastname);
  const email = useSelector((state: any) => state.userData.email);
  const phone = useSelector((state: any) => state.userData.phone);
  const isCitizen = useSelector((state: any) => state.userData.isCitizen);
  const gitProfile = useSelector((state: any) => state.userData.gitProfile);
  const loadeddata = [
    { FirstName: first_name },
    { LastName: last_name },
    { Email: email },
    { Phone: phone },
    { isCitizen: isCitizen },
    { gitProfile: gitProfile },
    { CvValue: formData1 },
    { CoverValue: formData2 },
  ];

  async function sendDataHandler(e: any) {
    e.preventDefault();
    console.log(loadeddata);
    try {
      const response = await fetch("http://localhost:8080/post", {
        method: "POST",
        body: JSON.stringify(loadeddata),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
      navigate("/admin/users");
    }
  }

  return (
    <div className="form">
      <form>
        <Stepper
          steps={[
            { label: "Personal details" },
            { label: "Info details" },
            { label: "Uploads" },
          ]}
          activeStep={2}
          className={"stepper"}
          stepClassName={"stepper__step"}
        />

        <div className="form-group">
          <div className="form-group__element">
            <label htmlFor="first name" className="form-group__label">
              Upload CV
            </label>
            <input
              type="file"
              name="git Profile"
              onChange={onFileCvChange}
              className="form-group__input"
            />
          </div>
        </div>

        <div className="form-group">
          <div className="form-group__element">
            <label htmlFor="first name" className="form-group__label">
              Upload cover letter
            </label>
            <input
              type="file"
              name="git Profile"
              onChange={onFileCoverChange}
              className="form-group__input"
            />
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <button
            className="buttons__button buttons__button--back"
            onClick={backHandler}
          >
            Back
          </button>
          <button
            className="buttons__button buttons__button--back"
            onClick={sendDataHandler}
          >
            Send Data
          </button>
        </div>
      </form>
    </div>
  );
};
export default UploadCv;
