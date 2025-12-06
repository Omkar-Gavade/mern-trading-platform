import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";

const Summary = () => {
  const [holdings, setHoldings] = useState([]);

  const { refreshHoldings } = useContext(GeneralContext);

  useEffect(() => {
    axios.get("http://localhost:3002/holdings").then((res) => {
      setHoldings(res.data);
    });
  }, [refreshHoldings]);

  // ----------- Dynamic Calculations -----------
  const totalInvestment = holdings.reduce(
    (sum, h) => sum + h.avg * h.qty,
    0
  );

  const currentValue = holdings.reduce(
    (sum, h) => sum + h.price * h.qty,
    0
  );

  const totalPnl = currentValue - totalInvestment;

  const pnlPercent =
    totalInvestment > 0 ? (totalPnl / totalInvestment) * 100 : 0;

  const pnlClass = totalPnl >= 0 ? "profit" : "loss";

  const format = (num) =>
    Number(num).toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  // ----------------------------------------------
  return (
    <>
      <div className="username">
        <h6>Hi, User!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>
            </p>
            <p>
              Opening balance <span>3.74k</span>
            </p>
          </div>
        </div>

        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({holdings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={pnlClass}>
              {format(totalPnl)}{" "}
              <small>
                {pnlPercent >= 0 ? "+" : ""}
                {pnlPercent.toFixed(2)}%
              </small>
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>{format(currentValue)}</span>
            </p>
            <p>
              Investment <span>{format(totalInvestment)}</span>
            </p>
          </div>
        </div>

        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;