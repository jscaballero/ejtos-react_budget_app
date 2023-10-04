
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);

    const handleCurrencyChange = (event) => {
        let curCurrency=event.target.value;
        setNewCurrency(curCurrency);
        dispatch({
             type: 'CHG_CURRENCY',
            payload: curCurrency,
        });
        
    }
    
    return (
        <div className='alert alert-secondary'>
        <span>Currency: </span>
        <select id="currencySelect01" value={newCurrency} onChange={(event) =>handleCurrencyChange(event) }>
                <option value="$" name="dollar">$ Dollar</option>
                <option value="£" name="pound">£ Pound</option>
                <option value="€" name="euro">€ Euro</option>
                <option value="₹" name="ruppee">₹ Ruppee</option>
        </select>
        </div>
       
    );
};
export default Currency;