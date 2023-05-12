import React from 'react';
import DisplayStocks from './DisplayStocks';
import Portfolio from './Portfolio'
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import {Switch} from 'react-router-dom';
import Home from './Home';


function App(){
    return(
        <>
        <Router>
        <nav className='navbar'>
            <ul className='nav-links'>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/stocks">Stocks</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
            </ul>
        </nav>
        <Routes>
            <Route exact path='/' element={<Home/>}>
                
            </Route>
            <Route path='/stocks' element={<DisplayStocks/>}>
                
            </Route>
           
        </Routes>
        </Router>
    </>
    )
}
export default App;