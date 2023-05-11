import React from 'react';

function Description ({stock, onClose}){
    return(
        <div className='popup'>
            <div className='popup-content'> 
            <h2>{stock.company}</h2>
            <p>{stock.description}</p>
            <button onClick={onClose}>Close </button>

            </div>
        </div>
    )
}
export default Description;