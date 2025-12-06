// SellActionWindow.js
import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css"; // reuse your modal CSS

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [loading, setLoading] = useState(false);
  const { closeSellWindow, triggerHoldingsRefresh } = useContext(GeneralContext);

  const handleSellClick = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // verify holding exists & qty by asking the backend
      const holdingsRes = await axios.get("http://localhost:3002/holdings");
      const holdings = holdingsRes.data || [];
      const existing = holdings.find((h) => h.name === uid);

      if (!existing) {
        alert(`You do not own ${uid}. Cannot SELL.`);
        setLoading(false);
        return;
      }

      if (Number(existing.qty) < Number(stockQuantity)) {
        alert(`Insufficient quantity. You have ${existing.qty} shares.`);
        setLoading(false);
        return;
      }

      // send SELL order
      const payload = {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: "SELL",
      };

      const resp = await axios.post("http://localhost:3002/newOrder", payload);
      console.log("SELL response:", resp.data);

      // refresh holdings and close modal
      triggerHoldingsRefresh();
      closeSellWindow();
    } catch (err) {
      console.error("Sell order error:", err);
      alert("Sell failed. See console for details.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    closeSellWindow();
  };


  return (
    <div className="buy-window-container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              min="1"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin / Proceeds estimate</span>
        <div>
          <button className="btn btn-blue" onClick={handleSellClick} disabled={loading}>
            {loading ? "Sending..." : "Sell"}
          </button>

          <button className="btn btn-grey" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;