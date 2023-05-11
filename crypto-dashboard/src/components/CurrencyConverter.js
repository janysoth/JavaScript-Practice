import React, { useState, useEffect } from "react";
import ExchangeRate from "./ExchangeRate";

const CurrencyConverter = () => {
  const [primaryCurrency, setPrimaryCurrency] = useState('');
  const [secondaryCurrency, setSecondaryCurrency] = useState('');
  const currencies = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA"];


  return (
    <div className="currency-converter">
      <h2>Currency Converter</h2>

      <div className="input-box">
        <table>
          <tr>
            <td>Primary Currency:</td>
            <td>
              <input type="number" name="currency-amount-1" value={""} />
            </td>
            <td>
              <select
                value={primaryCurrency}
                name="currency-option-1"
                className="currency-options"
                onChange={(e) => setPrimaryCurrency(e.target.value)}
              >
                {currencies.map((currency) => (
                  <option>{currency}</option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>Secondary Currency:</td>
            <td>
              <input type="number" name="currency-amount-1" value={""} />
            </td>
            <td>
              <select
                value={secondaryCurrency}
                name="currency-option-2"
                className="currency-options"
                onChange={(e) => setSecondaryCurrency(e.target.value)}
              >
                {currencies.map((currency) => (
                  <option>{currency}</option>
                ))}
              </select>
            </td>
          </tr>
        </table>
      </div>

      <ExchangeRate />
    </div>
  );
};

export default CurrencyConverter;
