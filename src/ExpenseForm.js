import React, { useRef, useState } from 'react'

function ExpenseForm({onAddExpense}) {
    const[title,settitle]=useState('');
    const[amount,setamount]=useState('');
    const titleRef=useRef();
    const handleSubmit=(e)=>{
        e.preventDefault();
         if(!title || !amount) return alert("Please fill all fields!")

        const newExpense = {
            id: Date.now(),
            title,
            amount: parseFloat(amount)
        } 
        
        onAddExpense(newExpense)
        settitle("")
        setamount("")
        titleRef.current.focus();
    }

  return (
    <form className='Expense-form' onSubmit={handleSubmit}>
          <input type="text" ref={titleRef} className="title" placeholder='Title' value={title} onChange={(e)=>{settitle(e.target.value)}}/>
           <input type="number" className="Amount" placeholder='Amount ₹'value={amount} onChange={(e)=>{setamount(e.target.value)}}/>
           <button type='submit'>Add Expense</button>
        </form>
  )
}

export default ExpenseForm