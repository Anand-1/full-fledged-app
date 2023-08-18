import React from "react";

const PasswordStrengthIndicator = ({ errorMessage, password }: any) => {
  const getPasswordStrength = () => {
    const passwordLength = password.length;
    if (passwordLength < 1) {
      return "";
    } else if (passwordLength < 4) {
      return "Very Weak";
    } else if (passwordLength < 8) {
      return "Poor";
    } else if (passwordLength < 12) {
      return "Medium";
    } else if (passwordLength < 16) {
      return "Strong";
    } else {
      return "Very Strong";
    }
  };

  const passwordStrength = getPasswordStrength();
  // if (!passwordStrength) return <React.Fragment />;
  if (!passwordStrength)
    return (
      <div className="password-strength">
        Strength: <span style={{ fontWeight: "bold" }}>{errorMessage}</span>
      </div>
    );

  return (
    <div className="password-strength">
      Strength:
      <span style={{ fontWeight: "bold" }}>
        {passwordStrength.length ? passwordStrength : "Not Available !"}
      </span>
    </div>
  );
};

export default PasswordStrengthIndicator;
