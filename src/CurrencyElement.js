import React from 'react'

export default function CurrencyElement(props) {
    const {
        currencyChoices,
        pickedCurrency,
        /* Action when change currency */ 
        onChangeCurrency,
        onChangeAmountMoney,
        amount
    } = props
  return (
    <div>
        <input type="number" className="input" value={amount} onChange={onChangeAmountMoney}/>
        <select value={pickedCurrency} onChange={onChangeCurrency}>
            {currencyChoices.map((option, index) => (
                <option key={index + 1} value={option}>{option}</option>
                ))}
        </select>
    </div>
  )
}
