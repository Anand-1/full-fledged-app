import React, { useState } from "react";
import AddUser from "../AddUser/AddUser";
import "./ListPage.css";
const ListPage = (props: any) => {
  const [data, setData] = useState(props.expenseTitle);
  const clickHandler = () => {
    setData("Rahi");
  };
  return (
    <>
      <div className="list-page-view">
        <AddUser />
        <h1>You can see product List here ! </h1>
        <span>{props.userData}</span>
        <br />
        <span>The amount is {props.expenseAmount}</span>
        <br />
        <span>The title is {data}</span>
        <br />
        <span>The date is {props.expenseDate.toISOString()}</span>
        <hr />
        <button onClick={clickHandler} type="button">
          CLick Me !
        </button>
      </div>
    </>
  );
};

export default ListPage;
