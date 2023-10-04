
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        let curBudget=event.target.value;
        if(curBudget> 20000)
        {
            alert("The maximum budget allowed is £20,000.");
        }
        else if(curBudget < totalExpenses)
        {
            alert("You cannot reduce the budget value lower than the spending.");
        }
        else{
            setNewBudget(curBudget);
            dispatch({
                type: 'SET_BUDGET',
                payload: curBudget,
            });
        }
    }
    

    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;