import React from 'react';
import './App.css';
import CurrencyElement from './CurrencyElement';


function App() {
  return (
    <div>
      <h1>CurrencyCliQ</h1>
      <p>Your go-to solution for fast and reliable currency conversion.</p>
      <h1>Convert</h1>
      <CurrencyElement />
      <CurrencyElement />
    </div> 
  );
}

export default App;
