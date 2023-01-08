import React, { useState } from "react";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItems from "./ExpenseItems";
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
      {filteredExpense.map((expense) => (
        <ExpenseItems
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expense;
