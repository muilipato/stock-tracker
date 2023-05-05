import { click } from '@testing-library/user-event/dist/click';
import React, { useState, useEffect } from 'react';


function Portfolio(){
    const[userStocks , setPortfolio] = useState([]);
    
    
    const options = {
        method: 'GET'
    };


    function getPortfolio(){
        fetch(`http://localhost:8001/users`, options)
        .then((res)=>res.json())
        .then((mydata)=>{setPortfolio(mydata)})
    }
    useEffect(()=>{
        getPortfolio();
    },[]);
    

        return(
      <>
      
        
      <table className='portfolio-table'>
        <thead>
            <tr>
                <th>Company Name</th>
                <th>Symbol</th>
                <th>Price</th>
                
            </tr>
        </thead>
        <tbody>
            {userStocks.map(stonk=>(
            <tr key ={stonk.symbol}>
            <td>{stonk.company}</td>
            <td>{stonk.symbol}</td>
            <td>{stonk.price_2007}</td>
            </tr>
            ))}

        </tbody>
      </table>
    
     
      
      </>
    )
}
export default Portfolio;