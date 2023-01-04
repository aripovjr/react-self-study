import React from 'react'
import './expenseStyle.css'

function ExpenseForm() {
  return (
    <form>
        <div className='new-expense-controls'>
            <div className='new-expense-control'>
                <label>title</label>
                <input type="text"/>
            </div>
            <div className='new-expense-control'>
                <label>amount</label>
                <input type="number" min='0.01' step="0.01"/>
            </div>
            <div className='new-expense-control'>
                <label>date</label>
                <input type="date" min='2019-01-01' max="2023-12-31"/>
            </div>
        </div>
        <div className='new-expense-actions'>
            <button type='submit'> Add Expense</button>

        </div>
    </form>
  )
}

export default ExpenseForm
