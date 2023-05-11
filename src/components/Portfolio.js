import React from 'react';

function Portfolio({portfolio, removeFromPortfolio}){
    return(
        <div>
            <h2>Your Portfolio</h2>
            {
                portfolio.length === 0? (
                    <p>No stocks in your portfolio</p>
                ) :(
                    <ul>
                        {
                            portfolio.map(stock => (
                                <li key = {stock.symbol}>
                                    {stock.company}({stock.symbol}) {stock.price_2007}
                                    <button onClick={() => removeFromPortfolio(stock)}>Delete</button>
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