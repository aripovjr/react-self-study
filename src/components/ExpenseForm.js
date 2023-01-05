import React, { useState } from 'react'
import './expenseStyle.css'

function ExpenseForm(props) {
    const [titleValue, setTitle] = useState('')
    const [amountValue, setAmount] = useState('')
    const [dateValue, setDate] = useState('')

    const inputHandler = e => {
        setTitle(e.target.value)
    }

    const amountChangeHandler = e => {
        setAmount(e.target.value)
    }

    const dateChangeHanlder = e => {
        setDate(e.target.value)
    }

    const submitHandler = e => {
        e.preventDefault()

        const expenseData = {
            title: titleValue,
            amount: amountValue,
            date: new Date(dateValue)
        }

        props.onSaveExpenseData(expenseData)
        setTitle('')
        setAmount('')
        setDate('')
    }



  return (
    <form onSubmit={submitHandler}>
        <div className='new-expense-controls'>
            <div className='new-expense-control'>
                <label>title</label>
                <input onChange={inputHandler} value={titleValue} type="text"/>
            </div>
            <div className='new-expense-control'>
                <label>amount</label>
                <input onChange={amountChangeHandler} value={amountValue} type="number" min='0.01' step="0.01"/>
            </div>
            <div className='new-expense-control'>
                <label>date</label>
                <input onChange={dateChangeHanlder} value={dateValue} type="date" min='2019-01-01' max="2023-12-31"/>
            </div>
        </div>
        <div className='new-expense-actions'>
            <button type='submit'> Add Expense</button>

        </div>
    </form>
  )
}

export default ExpenseForm