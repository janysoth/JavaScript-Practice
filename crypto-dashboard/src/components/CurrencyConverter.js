<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
import { useState, useEffect } from "react";
>>>>>>> cb48c55 (Use useEffect to only set primaryCurrency and secondaryCurrrency once.)
import ExchangeRate from "./ExchangeRate";

const CurrencyConverter = () => {
  const [primaryCurrency, setPrimaryCurrency] = useState('');
  const [secondaryCurrency, setSecondaryCurrency] = useState('');
  const currencies = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA"];
<<<<<<< HEAD

=======
  const [primaryCurrency, setPrimaryCurrency] = useState(null);
  const [secondaryCurrency, setSecondaryCurrency] = useState(null);

  useEffect(() => {
    console.log(primaryCurrency);
  }, [primaryCurrency]);

  useEffect(() => {
    console.log(secondaryCurrency);
  }, [secondaryCurrency]);
>>>>>>> cb48c55 (Use useEffect to only set primaryCurrency and secondaryCurrrency once.)

  return (
    <div className="currency-converter">
      <h2>Currency Converter</h2>

      <div className="input-box">
        <table>
<<<<<<< HEAD
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
=======
          <tbody>
            <tr>
              <td>Primary Currency</td>
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
                  {currencies.map((currency, _index) => (
                    <option key={_index}>{currency}</option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>Secondary Currency</td>
              <td>
                <input type="number" name="currency-amount-2" value={""} />
              </td>
              <td>
                <select
                  value={secondaryCurrency}
                  name="currency-option-2"
                  className="currency-options"
                  onChange={(event) =>
                    setSecondaryCurrency(event.target.value)
                  }
                >
                  {currencies.map((currency, _index) => (
                    <option key={_index}>{currency}</option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
>>>>>>> cb48c55 (Use useEffect to only set primaryCurrency and secondaryCurrrency once.)
        </table>
      </div>

      <ExchangeRate />
    </div>
  );
};

export default CurrencyConverter;
