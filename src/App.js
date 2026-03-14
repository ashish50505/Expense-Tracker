
import { useState ,useEffect} from 'react';
import './App.css';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';

function App() {
  const [expenses,setexpenses]= useState(() => {
    const saved = localStorage.getItem("expenses")
    return saved ? JSON.parse(saved) : [];
  })
   useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses))
  },[expenses])
  const AddExpense=(expense)=>{
    setexpenses((prev)=>[...prev,expense]

    )

  }
   const DeleteExpense=(id)=>{
    setexpenses((prev) => prev.filter((item) => item.id != id) )
  }
   const totalExpenses  = expenses.reduce((sum, item) => sum + item.amount, 0)
  return (
    <div className="App-Container">
        <h1> 💰 Expense Tracker </h1>
        <ExpenseForm onAddExpense={AddExpense}/>
           <h3 className="total">Total Expense: ₹{totalExpenses.toFixed(2)}</h3>
        <ExpenseList expenses={expenses} onDelete={DeleteExpense}/>
      </div>
  );
}

export default App;
