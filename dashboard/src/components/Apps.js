import React from "react";
import "./Apps.css";

const APPS = [
  {
    name: "Kite Connect API",
    desc: "Build powerful trading apps with our low-latency APIs.",
    icon: "https://cdn-icons-png.flaticon.com/512/2981/2981011.png",
    action: "Explore"
  },
  {
    name: "Streak",
    desc: "Algo-trading made insanely simple. Create & deploy strategies.",
    icon: "https://cdn-icons-png.flaticon.com/512/4712/4712100.png",
    action: "Launch"
  },
  {
    name: "Sensibull",
    desc: "Options trading platform — strategies, analysis & more.",
    icon: "https://cdn-icons-png.flaticon.com/512/4712/4712035.png",
    action: "Launch"
  },
  {
    name: "Smallcase",
    desc: "Invest in ready-made portfolios based on a theme or strategy.",
    icon: "https://cdn-icons-png.flaticon.com/512/711/711284.png",
    action: "Open"
  },
  {
    name: "Tickertape",
    desc: "Stock screeners, financial data, investment insights.",
    icon: "https://cdn-icons-png.flaticon.com/512/2620/2620389.png",
    action: "Open"
  }
];

const Apps = () => {
  return (
    <div className="apps-container">
      <h2>Apps & Tools</h2>

      <div className="apps-list">
        {APPS.map((app, i) => (
          <div className="app-card" key={i}>
            <img src={app.icon} alt={app.name} className="app-icon" />

            <div className="app-info">
              <h3>{app.name}</h3>
              <p>{app.desc}</p>
            </div>

            <button className="app-btn">{app.action}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;