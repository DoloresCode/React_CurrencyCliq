import React from 'react'

export default function CurrencyElement(props) {
    const {
        currencyChoices
    } = props
  return (
    <div>
        <input type="number" className="input"/>
        <select>
            {currencyChoices.map((option, index) => (
                <option key={index + 1} value={option}>{option}</option>
                ))}
        </select>
    </div>
  )
}
