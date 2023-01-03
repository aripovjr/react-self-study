import './App.css';
import Expense from './components/Expense';
import './components/expenseStyle.css'

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
  return(
    <div className='app'>
      <h1>Let's get started</h1>
      <Expense items={expenses}/>

    </div>
  )
}

export default App;
