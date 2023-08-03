import React, { useState } from "react";
import "./PasswordGenerator.css";
import Checkbox from "./CheckBox";
import usePasswordGenerator from "./password-generator";
import Button from "./Button";
const PasswordGenerator = () => {
  const [length, setLength] = useState(Number);
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);
  const [copied, setCopied] = useState(false);

  const handleCheckboxChange = (i: any) => {
    const updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[i].state = !updatedCheckboxData[i].state;
    setCheckboxData(updatedCheckboxData);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const { password, errorMessage, generatePassword } = usePasswordGenerator();
  return (
    <>
      <div className="generator-section">
        <div className="password-box">Password Generator</div>
        <div className="header">
          <div className="password">{password}</div>
          <div className="copybtn">
            <Button
              text={copied ? "Copied" : "copy"}
              onClick={handleCopy}
              customClass="copyBtn"
            />
          </div>
        </div>
        <div className="header">
          <div>Character Length</div>
          <div>
            <label>{length}</label>
          </div>
        </div>
        <div>
          <input
            type="range"
            className="input-range"
            min="4"
            max="20"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </div>
        <div className="checkboxes">
          {checkboxData.map((checkbox, index) => {
            return (
              <Checkbox
                key={index}
                title={checkbox.title}
                onChange={() => handleCheckboxChange(index)}
                state={checkbox.state}
              />
            );
          })}
        </div>
        <Button
          className="button-box"
          text="Generate Password"
          customClass="generateBtn"
          onClick={() => generatePassword(checkboxData, length)}
        />
      </div>
    </>
  );
};

export default PasswordGenerator;
