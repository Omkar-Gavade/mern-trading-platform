import React from 'react';

function Pricing() {
    return (
        <div className='container mb-5'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-3 pb-3 fs-2'>Unbeatable pricing</h1>
                    <p className='text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' className='' style={{ textDecoration: "none" }}>See pricing<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6 mb-5'>
                    <div className='row text-center'>
                        <div className='col border p-4'>
                            <h1><i class="fa fa-inr" aria-hidden="true"></i>O</h1>
                            <p className='mb-3'>Free equity delivery
                                and direct mutual funds</p>
                        </div>
                        <div className='col border p-4'>
                            <h1><i class="fa fa-inr" aria-hidden="true"></i>20</h1>
                            <p className='mb-3'>Intraday and
                                F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;