import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import './componentcss/style.css';


const Budget = () => {
    const { budget, expenses, currency} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const handleBudgetChange = (event) => {

        if(event.target.value > 20000){
            alert("Budget can't exceed 20000");
        }

        if(event.target.value < totalExpenses){
            console.log(totalExpenses);
            alert("You cannot reduce the budget lower than the spending");
        }
        setNewBudget(event.target.value);
        
    }
    return (
<div className='alert alert-secondary'>
    <span>Budget: {currency.charAt(0)}</span><input type="number" step="10" value={newBudget} onChange={handleBudgetChange} max="20000"></input>
</div>
    );
};
export default Budget;
