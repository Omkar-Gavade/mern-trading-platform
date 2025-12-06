import React from "react";
import "./support.css";

function Hero() {
  return (
    <div className="support-top-container">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="support-title">Support Portal</h1>

        <button className="btn btn-primary px-4 py-2">My tickets</button>
      </div>

      {/* Search Bar */}
      <div className="support-search-wrapper mt-4">
        <i className="fa fa-search search-icon"></i>
        <input
          type="text"
          className="support-search-bar"
          placeholder="Eg: How do I open my account, How do I activate F&O..."
        />
      </div>
    </div>
  );
}


export default Hero;