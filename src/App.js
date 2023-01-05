import './App.css';
import Expense from './components/Expense';
import './components/expenseStyle.css'
import NewExpense from './components/NewExpense';

function App() {
  const expenses = [
    {
      id:'e1',
      title:"Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14)
    },
    {
      id:'e2',
      title:"New TV",
      amount: 499.79,
      date: new Date(2021, 2, 12)
    },
    {
      id:'e3',
      title:"Car Insurance",
      amount: 294.12,
      date: new Date(2021, 2, 28)
    },
    {
      id:'e4',
      title:"New Desk",
      amount: 450,
      date: new Date(2021, 5, 12)
    }
  ]

  const addExpenseHandler = expense => { 
    console.log(expense)
  }

  return(
    <div className='app'>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expense items={expenses}/>

    </div>
  )
}

export default App;
