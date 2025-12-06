import React from 'react';
import { Link } from "react-router-dom";

function OpenAccount() {
    return (
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5' />
                <h2 className='mt-5 mb-4 text-muted' style={{ textSizeAdjust: "80%" }}>
                    Open a Zerodha account
                </h2>
                <p className='mb-4 text-muted'>
                    Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.


                </p>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{ width: "20%", margin: "0 auto" }}>
                    <Link to="/signup" style={{ color: "white", textDecoration: "none" }}>
                        Sign up for free
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default OpenAccount;