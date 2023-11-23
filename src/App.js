import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import CurrencyElement from './CurrencyElement';

/* Fetch API currency data */ 
const BASE_API_URL =`http://api.exchangeratesapi.io/latest?access_key=${process.env.REACT_APP_API_KEY}`;

function App() {
  /* currency choices initialisation to empty array*/ 
    const [currencyChoices, setCurrencyChoices] = useState([])
    
    /* Fetch API currency data */
  useEffect(() => {
    fetch(BASE_API_URL)
      .then(res => res.json())
      .then(data => {
        setCurrencyChoices([data.base, ...Object.keys(data.rates)])
      })
  }, [])


  return (
    <div>
    <h1>CurrencyCliQ</h1>
    <p>Your go-to solution for fast and reliable currency conversion.</p>
    <img src="/images/img_currency_cliq.png" alt="Currency_images" className="currency-image" />
    <h1>Convert</h1>
    <div>
    <label className="currency-label">From </label>
      <CurrencyElement currencyChoices={currencyChoices} />
    </div>
    <div>
    <label className="currency-label">To </label>
      <CurrencyElement currencyChoices={currencyChoices} />
    </div>
  </div> 
  );
}

export default App;
