import React from "react";
import ExpenseDate from "./ExpenseDate";
import './expenseStyle.css'

function ExpenseItems(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item-description">
        <h1>{props.title}</h1>
        <div className="expense-item-price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItems;
