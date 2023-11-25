# CurrencyCliQ App

CurrencyCliQ is a convenient currency conversion app that provides real-time currency exchange rates. It is built using React and leverages the `exchangeratesapi.io` API to fetch the latest currency rates. Users can easily convert amounts from one currency to another.

## Features

- Dynamic currency conversion between various currencies.
- Real-time exchange rate updates.
- User-friendly interface for selecting currencies and inputting amounts.
- Display of converted amounts based on current exchange rates.

## Dependencies

- React
- exchangeratesapi.io API

## Technologies

- React.js
- HTML
- CSS
- JavaScript
- npm
- Git
- GitHub

## Image

<img width="604" alt="Screenshot 2023-11-25 at 18 47 17" src="https://github.com/DoloresCode/React_CurrencyCliq/assets/117631390/f516fa43-1716-40af-bec8-26e6052959dd">

## Installation

1. **Clone the Repository**:

git clone https://github.com/DoloresCode/React_CurrencyCliq

2. **Navigate to the App Directory**:

cd path/to/react_currencycliq

3. **Install Dependencies**:

npm install

4. **Set Up Environment Variables**:

Create a `.env` file in the root directory and add your `exchangeratesapi.io` API key:

REACT_APP_API_KEY=your_api_key_here

5. **Start the Application**:

npm start

The app should now be running on `localhost:3000`.

## Usage

- Select the currency you want to convert from and to using the dropdown menus.
- Enter the amount to be converted in the 'From' input field.
- The converted amount will automatically be displayed in the 'To' input field.

## Disclaimer

- The free version of the `exchangeratesapi.io` API only allows conversions from Euro to other currencies.

## Improvements

- **Bi-directional Conversion**: Allow conversion from 'To' currency to 'From' currency.
- **Historical Data**: Implement a feature to view historical exchange rates.
- **Currency Trends**: Add functionality to analyze currency performance over time.
