import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/card";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  // let title = props.title;
  const clickHandler = () => {
    // title = "Updated!";
    setTitle("Updated!");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
      {/* <button
        onClick={() => {
          console.log("Clicked!");
        }}
      >
        Change Title
      </button> */}
      <button onClick={clickHandler}>Click Handler</button>
    </Card>
  );
}

export default ExpenseItem;
