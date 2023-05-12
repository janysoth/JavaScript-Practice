import React, { useState, useEffect } from "react";

import ExchangeRate from "./ExchangeRate";

const CurrencyConverter = () => {
  const currencies = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA"];

  const [primaryCurrency, setPrimaryCurrency] = useState(null);
  const [secondaryCurrency, setSecondaryCurrency] = useState(null);

  // useEffect(() => {
  //   console.log(primaryCurrency);
  // }, [primaryCurrency]);

  // useEffect(() => {
  //   console.log(secondaryCurrency);
  // }, [secondaryCurrency]);

  useEffect(() => {
    console.log(primaryCurrency);
  }, [primaryCurrency]);

  useEffect(() => {
    console.log(secondaryCurrency);
  }, [secondaryCurrency]);

  return (
    <div className="currency-converter">
      <h2>Currency Converter</h2>

      <div className="input-box">
        <table>
          <tbody>
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
          </tbody>
        </table>
      </div>

      <ExchangeRate />
    </div>
  );
};

export default CurrencyConverter;
