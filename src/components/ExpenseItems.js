import React, { useState } from "react";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseFilter from "./ExpenseFilter";
import './expenseStyle.css'

function ExpenseItems(props) {
  //useState is a hook in react that's built-in function
  //it is assigned to the array where accepts two arguments
  //1. variable that stores data 2.function that changes the value 
  //2. the function not only changes but also updates
  //more clearly re-executes whole component (JSX)
  //hanler also can change the value but however can not refresh the component
  //that's why the handler can be triggered but the value remains as it was before
  const [title, setTitle] = useState(props.title)

  const clickHandler = () => {
    setTitle('Updated!')
    console.log('Clicked!')
  }
  return (
    <Card className=" expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item-description">
        <h1>{title}</h1>
        <div className="expense-item-price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItems;
