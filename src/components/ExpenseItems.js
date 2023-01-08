import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import "./expenseStyle.css";

function ExpenseItems(props) {
  //useState is a hook in react that's built-in function
  //it is assigned to the array where accepts two arguments
  //1. variable that stores data 2.function that changes the value
  //2. the function not only changes but also updates
  //more clearly re-executes whole component (JSX)
  //hanler also can change the value but however can not refresh the component
  //that's why the handler can be triggered but the value remains as it was before

  return (
    <Card className=" expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item-description">
        <h1>{props.title}</h1>
        <div className="expense-item-price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItems;
