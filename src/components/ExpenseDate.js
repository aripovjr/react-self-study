import React from 'react'

function ExpenseDate(props) {

  const month = props.date.toLocaleString("en-US", {month: 'long'})
  const day = props.date.toLocaleString("en-US", {day: '2-digit'})
  const year = props.date.getFullYear()

  return (
    <div className="expense-item-date">
        <div>{month}</div>
        <div>{year}</div>
        <div className='day'>{day}</div>
      </div>
  )
}

export default ExpenseDate