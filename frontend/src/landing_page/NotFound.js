import React from 'react';

function NotFound() {
    return ( 
         <div className='container p-5 mb-5'>
            <div className='row text-center'>
               
                <h2 className='mt-5 mb-4 text-muted' style={{textSizeAdjust:"80%"}}>
                    404 Page Not Found
                </h2>
                <p className='mb-4 text-muted'>
                    sorry,the page ypu are looking for does not exist.


                </p>
                
            </div>
        </div>
     );
}

export default NotFound;