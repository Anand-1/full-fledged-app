import React from "react";
import ListPage from "../ListPage/ListPage";
import "./ProductPage.css";
const ProductPage = (props: any) => {
  return (
    <>
      <div className="product-page-view">
        <div>This is the data in the product list page</div>
        <span>{props.userData}</span>
        <br />
        <span>The amount is {props.expenseAmount}</span>
        <br />
        <span>The title is {props.expenseTitle}</span>
        <br />
        <span>The date is {props.expenseDate.toISOString()}</span>
        <hr />
        <ListPage
          userData={props.userData}
          expenseAmount={props.expenseAmount}
          expenseDate={props.expenseDate}
          expenseTitle={props.expenseTitle}
        />
      </div>
    </>
  );
};

export default ProductPage;
