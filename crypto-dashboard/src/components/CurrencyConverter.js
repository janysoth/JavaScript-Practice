import React from "react";
import ExchangeRate from "./ExchangeRate";

function CurrencyConverter() {
  return (
    <div className="currency-converter">
      <h2>CurrencyConverter</h2>

      <div>
        <table>
          <body>
            <tr>
              <td>Primary Currency:</td>
              <td>
                <input type="number" name="currency-amount-1" value={""} />
              </td>
            </tr>
          </body>
        </table>
      </div>

      <ExchangeRate />
    </div>
  );
}

export default CurrencyConverter;
