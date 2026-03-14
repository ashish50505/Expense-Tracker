import React from 'react'

function ExpenseItem({item,onDelete}) {
  return (
    
    <div className="Expense-item">
        <span>{item.title}</span> 
        <span>{item.amount}</span>
        <button onClick={() => onDelete(item.id)}>❌</button>
        </div>
    
 )
}

export default ExpenseItem