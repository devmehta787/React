import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  // can also be done by using only one state

  //   const [userInput, setUserInput] = useState({
  //     title: "",
  //     amount: "",
  //     date: "",
  //   });

  //   const titleChangehandler = (event) => {
  //     // normal way to use state

  //     // setUserInput({
  //     //   ...userInput,
  //     //   title: event.target.value,
  //     // });

  //     //   alternative way to use state (when you depend on previous state)

  //     setUserInput((prevState) => {
  //       return { ...prevState, title: event.target.value };
  //     });
  //   };
  //   const amountChangehandler = (event) => {
  //     setUserInput({
  //       ...userInput,
  //       amount: event.target.value,
  //     });
  //   };
  //   const dateChangehandler = (event) => {
  //     setUserInput({
  //       ...userInput,
  //       date: event.target.value,
  //     });
  //   };

  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");

  const titleChangehandler = (event) => {
    setTitle(event.target.value);
  };
  const amountChangehandler = (event) => {
    setAmount(event.target.value);
    // console.log(event.target.value);
  };
  const dateChangehandler = (event) => {
    setDate(event.target.value);
    // console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
    setAmount("");
    setTitle("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            placeholder="jabba jabba"
            onChange={titleChangehandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            step="0.5"
            onChange={amountChangehandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-10-03"
            onChange={dateChangehandler}
            value={enteredDate}
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
