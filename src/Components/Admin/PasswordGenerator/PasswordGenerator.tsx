import React, { useState } from "react";
import "./PasswordGenerator.css";

import Checkbox from "./CheckBox";
import Button from "./Button";

import usePasswordGenerator from "./password-generator";
import PasswordStrengthIndicator from "./strengthchecker";

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
          <div className="password">{password ? password : "- - - - - "}</div>
          <div className="button-box">
            <Button
              text={copied ? "Copied" : "copy"}
              onClick={handleCopy}
              customClass="button-box"
            />
          </div>
        </div>
        <div className="header">
          <div>Character Length</div>
          <div>
            <label>{length ? length : 4}</label>
          </div>
        </div>
        <div>
          <input
            type="range"
            className="input-range"
            min="0"
            max="20"
            value={length ? length : 4}
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
        <PasswordStrengthIndicator
          errorMessage={errorMessage}
          password={password}
        />
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
