import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import CurrencyElement from './CurrencyElement';

/* Fetch API currency data */ 
const BASE_API_URL =`http://api.exchangeratesapi.io/latest?access_key=${process.env.REACT_APP_API_KEY}`;

function App() {
  /* currency choices initialisation to empty array*/ 
    const [currencyChoices, setCurrencyChoices] = useState([])
  
    /* define the currency we want to convert from
  and to as well as the amount we want to convert */
    const [fromCurrency, setFromCurrency] = useState()
    const [toCurrency, setToCurrency] = useState()
    const [amountFrom, setAmountFrom] = useState(1)
    // eslint-disable-next-line 
    const [resultAmount, setResultAmount] = useState(true)

    /* define the exchange rate and the date of the last update */
    const [exchangeRate, setExchangeRate] = useState()
    console.log(exchangeRate)
  
    /* Determine from amount and to amount using the exchangeRate */ 
    let toAmount, fromAmount
    if (fromCurrency && toCurrency) {
      fromAmount = amountFrom
      toAmount = amountFrom * exchangeRate
    } else {
      fromAmount = amountFrom / exchangeRate
      toAmount = amountFrom
    }

    /* Fetch API currency data */
  useEffect(() => {
    fetch(BASE_API_URL)
      .then(res => res.json())
      .then(data => {
        /* Set the initial values from Euros to USD */
        const initialCurrency = Object.keys(data.rates)[149]
        setCurrencyChoices([data.base, ...Object.keys(data.rates)])
        setFromCurrency(data.base)
        setToCurrency(initialCurrency)
        setExchangeRate(data.rates[initialCurrency])
      })
  }, [])

  /* When we want to convert an amount, we enter the amount in the input box and the value added trigged the event*/
  /* we get the convertion of the value from the input box "from" and not from the input box "to" */
  function handleFromAmountMoneyConvert(e) {
    setAmountFrom(e.target.value)
    setResultAmount(true)
  }
  
  function handleToAmountMoneyConvert(e) {
    setAmountFrom(e.target.value)
    setResultAmount(false)
  }

  return (
    <div>
    <h1>CurrencyCliQ</h1>
    <p>Your go-to solution for fast and reliable currency conversion.</p>
    <img src="/images/img_currency_cliq.png" alt="Currency_images" className="currency-image" />
    <h1>Convert</h1>
    <div>
    <label className="currency-label">From </label>
    
      <CurrencyElement 
      currencyChoices={currencyChoices}
      pickedCurrency={fromCurrency}
      /*When we change the currency, we have an event and we get the value of the currency selected */  
      onChangeCurrency={e => setFromCurrency(e.target.value)} 
      onChangeAmountMoney={handleFromAmountMoneyConvert}
      amount={fromAmount}
      />
    </div>
    <div>
    <label className="currency-label">To </label>
      <CurrencyElement 
      currencyChoices={currencyChoices}
      pickedCurrency={toCurrency}
      /*When we change the currency, we have an event and we get the value of the currency selected */  
      onChangeCurrency={e => setToCurrency(e.target.value)}
      onChangeAmountMoney={handleToAmountMoneyConvert}
      amount={toAmount}
      />
      
    </div>
  </div> 
  );
}

export default App;
