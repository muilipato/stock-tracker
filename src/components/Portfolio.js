import React from 'react';

function Portfolio({portfolio, removeFromPortfolio}){
    return(
        <div>
            <h2 className='portfolio-title'>Your Portfolio</h2>
            {
                portfolio.length === 0? (
                    <p>No stocks in your portfolio</p>
                ) :(
                    <ul className='portfolio-list'>
                        {
                            portfolio.map(stock => (
                                <li key = {stock.symbol} className='stock-item'>
                                   <div>
                                     <span className='stock-item-company'> {stock.company}  </span>
                                     <span className='stock-item-symbol'>{stock.symbol}</span>
                                      <span className='stock-item-price'>{stock.price_2007}</span>
                                     
                                     </div>
                                     <div className='stock-item-actions'>
                                    <button onClick={() => removeFromPortfolio(stock)}>Delete</button>
                                    </div>
                                </li>
                                ))
                        }
                    </ul>
                )
            }

        </div>
    )
}
export default Portfolio;