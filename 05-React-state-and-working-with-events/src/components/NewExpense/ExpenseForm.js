import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  // can also be done by using only one state
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangehandler = (event) => {
    setUserInput({
      ...userInput,
      title: event.target.value,
    });
  };
  const amountChangehandler = (event) => {
    setUserInput({
      ...userInput,
      amount: event.target.value,
    });
  };
  const dateChangehandler = (event) => {
    setUserInput({
      ...userInput,
      date: event.target.value,
    });
  };

  //   const [title, setTitle] = useState("");
  //     const [amount, setAmount] = useState("");
  //     const [date, setDate] = useState("");

  //   const titleChangehandler = (event) => {
  //     setTitle(event.target.value);
  //   };
  //   const amountChangehandler = (event) => {
  //     setAmount(event.target.value);
  //     // console.log(event.target.value);
  //   };
  //   const dateChangehandler = (event) => {
  //     setDate(event.target.value);
  //     // console.log(event.target.value);
  //   };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            placeholder="jabba jabba"
            onChange={titleChangehandler}
            value={userInput.title}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            step="0.5"
            onChange={amountChangehandler}
            value={userInput.amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-10-03"
            onChange={dateChangehandler}
            value={userInput.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
