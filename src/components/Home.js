import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import './AddBudget.js'
import Piechart from './Piechart'

const Home = () => {
    const data = [
        {name: 'Savings', percent:20 },
        {name: 'Necessities', percent:50},
        {name: 'Discretionary Spending', percent:30}
    ];
    return (
        <div className="main-container">
            <div className="flex-container">
                <div className="flex-child">
                    
                    <div className = "essentials"><h1>Essentials</h1> </div>
                    <div></div>
                    <div className = "essentials"><h1>Utilities</h1> </div>
                    <div className = "essentials"><h1>Medical</h1> </div>
                    <div className = "essentials"><h1>Insurance</h1> </div>
                    <div className = "link"><Link to="/Budget"><h1>Show More</h1></Link></div>
                
                </div>
                
                <div className="flex-child">
                </div>
            </div>
        </div>
    )
}

function CategoryBox(props) {
    return (
        <div className="categorybox">
            <h2>{props.label}</h2>
            {props.amount}
        </div>
    );
}

export default Home