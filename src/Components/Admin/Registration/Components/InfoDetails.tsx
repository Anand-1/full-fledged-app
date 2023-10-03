import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { userDataActions } from "../../../../store/userData";
import { stepperActions } from "../../../../store/stepper";
import { Stepper } from "react-form-stepper";
import "../Registration.css";
const InfoDetails = () => {
  const dispatch = useDispatch();

  const continueHandler = (e: any) => {
    e.preventDefault();
    dispatch(stepperActions.increment());
  };

  const backHandler = (e: Event) => {
    e.preventDefault();
    dispatch(stepperActions.decrement());
  };

  const onCitizenValueChange = (e: any) => {
    if (e.target.value === "true") {
      dispatch(userDataActions.setCitizenTrue());
    } else {
      dispatch(userDataActions.setCitizenFalse());
    }
  };

  const handleGitChange = (e: any) => {
    dispatch(userDataActions.setGitValue(e.target.value));
  };

  const isCitizen = useSelector((state: any) => state.userData.isCitizen);
  const gitProfile = useSelector((state: any) => state.userData.gitProfile);

  return (
    <div className="form">
      <form>
        <Stepper
          steps={[
            { label: "Personal details" },
            { label: "Info details" },
            { label: "Uploads" },
          ]}
          activeStep={1}
          className={"stepper"}
          stepClassName={"stepper__step"}
        />

        <div className="form-group">
          <div className="form-group__element">
            <label htmlFor="first name" className="form-group__label">
              Do you live in the US?
            </label>
            <div className="form-radio-fix">
              <input
                type="radio"
                value="true"
                checked={isCitizen === true}
                onChange={onCitizenValueChange}
                className="form-group__radio"
              />
              Yes
              <input
                type="radio"
                value="false"
                checked={isCitizen === false}
                onChange={onCitizenValueChange}
                className="form-group__radio"
              />
              No
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="form-group__element">
            <label htmlFor="first name" className="form-group__label">
              Git profile
            </label>
            <input
              type="text"
              value={gitProfile}
              name="git Profile"
              onChange={handleGitChange}
              className="form-group__input"
            />
            {/* <p className="error">{isErrorFirstName && errorMessageFirstName}</p> */}
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <button
            className="buttons__button buttons__button--back"
            onClick={() => backHandler}
          >
            Back
          </button>
          <button
            className="buttons__button buttons__button--next"
            onClick={continueHandler}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};
export default InfoDetails;
