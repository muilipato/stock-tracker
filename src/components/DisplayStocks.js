import React from 'react';
import  {useState, useEffect} from 'react'
import Portfolio from './Portfolio'

function DisplayStocks(){
    const[stockdata , setData] = useState([]);
    
    
    const options = {
        method: 'GET'
    };


    function getData(){
        fetch(`http://localhost:8001/stocks`, options)
        .then((res)=>res.json())
        .then((mydata)=>{setData(mydata)})
    }
    useEffect(()=>{
        getData();
    },[]);
    console.log(stockdata);
    return(
       <div>
     
        
                <div>
                <table>
                    <thead>
                    <tr>
                        <th>Company</th>
                        
                        <th>Symbol</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    {stockdata.map(stock => (
                        <tr key ={stock.symbol}>
                            <td >{stock.company}</td>
                        
                            <td>{stock.symbol}</td>
                            <td className='prices'>{stock.price_2007}</td>
                            <td className ="description">{stock.description}</td>

                        </tr>
                    ))}

                    </tbody>
                </table>
                
            
            </div>
            
        
          
        
    
        
       </div>
    )

}
    
export default DisplayStocks;