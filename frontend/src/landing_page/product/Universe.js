import React from "react";

function Universe() {
  return (
    <div className="container mt-5 mb-5 ">
      <div className="text-center">
        <h3 className="fw-semibold">The Zerodha Universe</h3>
        <p className="text-muted">
          Extend your trading and investment experience even further with our partner platforms
        </p>
      </div>

      <div className="row text-center mt-5">

        {/* Zerodha Fund House */}
        <div className="col-md-4 mb-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            className="img-fluid"
            style={{ maxWidth: "130px" }}
            alt="Fund House"
          />
          <p className="text-muted small mt-3">
            Our asset management venture that is creating simple and transparent index
            funds to help you save for your goals.
          </p>
        </div>

        {/* Sensibull */}
        <div className="col-md-4 mb-5">
          <img
            src="media/images/sensibullLogo.svg"
            className="img-fluid"
            style={{ maxWidth: "130px" }}
            alt="Sensibull"
          />
          <p className="text-muted small mt-3">
            Options trading platform that lets you create strategies, analyze positions,
            and examine data points like open interest, FII/DII, and more.
          </p>
        </div>

        {/* Tijori */}
        <div className="col-md-4 mb-5">
          <img
            src="media/images/tijori.svg"
            className="img-fluid"
            style={{ maxWidth: "130px" }}
            alt="Tijori"
          />
          <p className="text-muted small mt-3">
            Investment research platform that offers detailed insights on stocks,
            sectors, supply chains, and more.
          </p>
        </div>

        {/* Streak */}
        <div className="col-md-4 mb-5">
          <img
            src="media/images/streak-logo.png"
            className="img-fluid"
            style={{ maxWidth: "130px" }}
            alt="Streak"
          />
          <p className="text-muted small mt-3">
            Systematic trading platform that allows you to create and backtest strategies
            without coding.
          </p>
        </div>

        {/* Smallcase */}
        <div className="col-md-4 mb-5">
          <img
            src="media/images/smallcaseLogo.png"
            className="img-fluid"
            style={{ maxWidth: "130px" }}
            alt="Smallcase"
          />
          <p className="text-muted small mt-3">
            Thematic investing platform that helps you invest in diversified baskets of
            stocks on ETFs.
          </p>
        </div>

        {/* Ditto */}
        <div className="col-md-4 mb-5">
          <img
            src="media/images/dittoLogo.png"
            className="img-fluid"
            style={{ maxWidth: "130px" }}
            alt="Ditto"
          />
          <p className="text-muted small mt-3">
            Personalized advice on life and health insurance. No spam and no mis-selling.
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="text-center mt-3">
        <button className="btn btn-primary fs-5 px-4 py-2">Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;