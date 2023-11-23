import React from 'react'

export default function CurrencyElement(props) {
    const {
        currencyChoices
    } = props
  return (
    <div>
        <input type="number" className="input"/>
        <select>
            {currencyChoices.map(option => (
                <option key={option} value={option}>{option}</option>
                ))}
        </select>
    </div>
  )
}
