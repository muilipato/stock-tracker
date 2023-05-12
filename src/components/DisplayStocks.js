import React from 'react';
import  {useState, useEffect} from 'react'
import Portfolio from './Portfolio'
import Description from './Description';

function DisplayStocks(){
    const[stockdata , setData] = useState([]);
    const [portfolio, setPortfolio] = useState([]);
    const [selectedStock, setSelectedStock] = useState(null);
 
    
    
    const options = {
        method: 'GET'
    };


    function getData(){
        fetch(`https://stocks-hqcq.onrender.com/stocks`, options)
        .then((res)=>res.json())
        .then((mydata)=>{setData(mydata)})
    }
    useEffect(()=>{
        getData();
    },[]);
    console.log(stockdata);

    const addToPortfolio = stock => {
        if(!portfolio.includes(stock)){
            setPortfolio([...portfolio, stock]);
        }

    }
    const removeFromPortfolio =stock => {
        const updatedPortfolio =portfolio.filter(item => item !== stock)
        setPortfolio(updatedPortfolio)
    }
   const handleViewDesrciption = stock => {
    setSelectedStock(stock)

   }
   const handleCloseDescription = () =>{
   setSelectedStock(null)
   }

    
    return(
        <><h1 className='header' > Stocks </h1>
       <div className='container'>
        
        
                <div className='table-container'>
                <table>
                    <thead>
                    <tr>
                        <th>Company</th>
                        
                        <th>Symbol</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {stockdata.map(stock => (
                        <tr key ={stock.symbol}>
                            <td >{stock.company}</td>
                        
                            <td>{stock.symbol}</td>
                            <td className='prices'>{stock.price_2007}</td>
                            <td className ="description">{
                            stock.description.length>50?(
                                <>
                                {stock.description.substring(0, 50)}...
                                <button onClick={() => handleViewDesrciption(stock)}>View Description</button>
                                </>
                            ):(
                                stock.description
                            )
                            }
                            </td>
                            <td>
                                <button onClick={() => addToPortfolio(stock)}>Add</button>
                            </td>

                        </tr>
                    ))}

                    </tbody>
                </table>
                
            </div>
            <div className='portfolio-container'>
            <Portfolio portfolio={portfolio} removeFromPortfolio={removeFromPortfolio}/>
                        </div>
            <div>
                    
                {
                    selectedStock &&(
                        <Description stock={selectedStock} onClose={handleCloseDescription}/>
                    )
                }
                </div>
            
        
          
        
    
        
       </div>
       </>
    )

}
    
export default DisplayStocks;