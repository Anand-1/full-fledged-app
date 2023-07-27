import React, { useState } from "react";
import "./AddUser.css";

const AddUser = () => {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [expense, setExpense] = useState("");
  const usernameHandler = (event: any) => {
    console.log(event.target.value);
    setUsername(event.target.value);
  };
  const expensehandler = (event: any) => {
    console.log(event.target.value);
    setExpense(event.target.value);
  };
  const phonehandler = (event: any) => {
    console.log(event.target.value);
    setPhone(event.target.value);
  };

  const onsubmithandler = (event: any) => {
    event?.preventDefault();
    let data = {
      username: username,
      expense: expense,
      phone: phone,
    };
    console.log(data);
  };

  return (
    <>
      <div className="add-user-block">
        <h1>Add Users here</h1>
        <div className="add-user-form">
          <form onSubmit={onsubmithandler}>
            <label htmlFor="username"> User Name :</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input onChange={usernameHandler} type="text" value={username} />
            <br />
            <label htmlFor="phonenumber">Phone Number :</label>
            <input type="text" onChange={phonehandler} value={phone} />
            <br />
            <label htmlFor="username">Expense :</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;
            <input
              type="number"
              onChange={expensehandler}
              min="1"
              max="10"
              value={expense}
            />
            <br />
            <button type="submit"> Submit Information</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddUser;
