import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { userDataActions } from "../../../../store/userData";
import { stepperActions } from "../../../../store/stepper";
import { Stepper } from "react-form-stepper";
import "../Registration.css";

const PersonalDetails = () => {
  const dispatch = useDispatch();

  const continueHandler = (e: any) => {
    e.preventDefault();
    dispatch(stepperActions.increment());
  };

  const handleFirstNameChange = (e: any) => {
    dispatch(userDataActions.setFirstName(e.target.value));
  };

  const handleLastNameChange = (e: any) => {
    dispatch(userDataActions.setLastName(e.target.value));
  };

  const handleEmailChange = (e: any) => {
    dispatch(userDataActions.setEmail(e.target.value));
  };

  const handlePhoneChange = (e: any) => {
    dispatch(userDataActions.setPhone(e.target.value));
  };

  const first_name = useSelector((state: any) => state.userData.firstname);
  const last_name = useSelector((state: any) => state.userData.lastname);
  const email = useSelector((state: any) => state.userData.email);
  const phone = useSelector((state: any) => state.userData.phone);

  return (
    <div className="form">
      <form>
        <Stepper
          steps={[
            { label: "Personal details" },
            { label: "Info details" },
            { label: "Uploads" },
          ]}
          activeStep={0}
          className={"stepper"}
          stepClassName={"stepper__step"}
        />

        <div className="form-group">
          <div className="form-group__element">
            <label htmlFor="first name" className="form-group__label">
              First name
            </label>
            <input
              type="text"
              value={first_name}
              name="first_name"
              onChange={handleFirstNameChange}
              className="form-group__input"
            />
          </div>

          <div className="form-group__element">
            <label htmlFor="last name" className="form-group__label">
              Last name
            </label>
            <input
              type="text"
              value={last_name}
              name="last_name"
              onChange={handleLastNameChange}
              className="form-group__input"
            />
          </div>

          <div className="form-group__element">
            <label htmlFor="email" className="form-group__label">
              Email
            </label>
            <input
              type="email"
              value={email}
              name="email"
              onChange={handleEmailChange}
              className="form-group__input"
            />
          </div>

          <div className="form-group__element">
            <label htmlFor="phone" className="form-group__label">
              Phone
            </label>
            <input
              type="text"
              value={phone}
              name="phone"
              onChange={handlePhoneChange}
              className="form-group__input"
            />
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
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

export default PersonalDetails;
