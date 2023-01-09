import React, { useState } from "react";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItems from "./ExpenseItems";
import ExpensesList from "./ExpensesList";
import "./expenseStyle.css";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2023");
  const filterChangeHandler = (fromChild) => {
    setFilteredYear(fromChild);
  };

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className=" expenses">
      <ExpenseFilter selected={filteredYear} onSelect={filterChangeHandler} />
      <ExpensesList items={filteredExpense} />
    </Card>
  );
}

export default Expense;
