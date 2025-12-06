import React, { useState, useEffect, useContext } from "react";
import axios, { all } from "axios";
import GeneralContext from "./GeneralContext";
import { VerticalGraph } from "./VerticalGraph";
// import { holdings } from "../data/data";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const { refreshHoldings } = useContext(GeneralContext);

  useEffect(() => {
    // axios.get("http://localhost:3002/holdings")
    axios.get("https://mern-trading-platform-g2v4.onrender.com/holdings").then((res) => {
    console.log(res.data);
      setAllHoldings(res.data);
    });
  }, [refreshHoldings]); // <--- re-fetch whenever BUY/SELL triggers refresh

  const totalInvestment = allHoldings.reduce(
    (sum, s) => sum + s.avg * s.qty,
    0
  );

  const currentValue = allHoldings.reduce((sum, s) => sum + s.price * s.qty, 0);

  const totalPnl = currentValue - totalInvestment;

  const pnlPercent =
    totalInvestment > 0 ? (totalPnl / totalInvestment) * 100 : 0;

  const pnlClass = totalPnl >= 0 ? "profit" : "loss";

  const format = (num) =>
    Number(num).toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  //     const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
 const labels = allHoldings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  // export const data = {
  //   labels,
  //   datasets: [
  // {
  //   label: 'Dataset 1',
  //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //   backgroundColor: 'rgba(255, 99, 132, 0.5)',
  // },
  //     {
  //       label: 'Dataset 2',
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
  //     },
  //   ],
  // };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

          {allHoldings.map((stock, index) => {
            const curValue = stock.price * stock.qty;

            // P&L numeric
            const pnl = curValue - stock.avg * stock.qty;
            const pnlClass = pnl >= 0 ? "profit" : "loss";

            // Parse net change (strings like "+2.99%" or "-0.34%")
            const parsePercentOrNumber = (v) => {
              if (v === null || v === undefined) return 0;
              // v might be number already or string like "+2.99%" or "-1.6%" or "-60.20"
              if (typeof v === "number") return v;
              // remove percent sign and commas then parse
              const cleaned = String(v)
                .replace(/,/g, "")
                .replace("%", "")
                .trim();
              const n = parseFloat(cleaned);
              return isNaN(n) ? 0 : n;
            };

            const netValue = parsePercentOrNumber(stock.net);
            const netClass = netValue >= 0 ? "profit" : "loss";

            const dayValue = parsePercentOrNumber(stock.day);
            const dayClass = dayValue >= 0 ? "profit" : "loss";

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{Number(stock.avg).toFixed(2)}</td>
                <td>{Number(stock.price).toFixed(2)}</td>
                <td>{curValue.toFixed(2)}</td>

                {/* P&L column */}
                <td className={pnlClass}>{pnl.toFixed(2)}</td>

                {/* Net change: use netClass, not pnlClass */}
                <td className={netClass}>{stock.net}</td>

                {/* Day change: use dayClass */}
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>

      <div className="row">
        {/* Total Investment */}
        <div className="col">
          <h5>{format(totalInvestment)}</h5>
          <p>Total investment</p>
        </div>

        {/* Current Value */}
        <div className="col">
          <h5>{format(currentValue)}</h5>
          <p>Current value</p>
        </div>

        {/* P&L */}
        <div className="col">
          <h5 className={pnlClass}>
            {format(totalPnl)} ({pnlPercent.toFixed(2)}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
