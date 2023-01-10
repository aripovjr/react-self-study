import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./expenseStyle.css";
import "./AddButton.css";

function NewExpense(props) {
  const [buttonValue, setButtonVale] = useState(false);

  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  const clickAddButton = () => {
    setButtonVale(true);
  };

  const clickCancelButton = () => {
    setButtonVale(false);
  };

  if (buttonValue) {
    return (
      <div className=" new-expense">
        <ExpenseForm
          onSaveExpenseData={SaveExpenseDataHandler}
          onCancel={clickCancelButton}
        />
      </div>
    );
  }

  return (
    <div className=".flex-center new-expense">
      <button className="button" type="submit" onClick={clickAddButton}>
        add new expense
      </button>
    </div>
  );
}

export default NewExpense;
