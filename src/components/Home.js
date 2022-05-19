import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import './AddBudget'
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
                    <CategoryBox label="Savings" amount="$69">

                    </CategoryBox>
                    <CategoryBox label="Necessities" amount="$69">
                        
                    </CategoryBox>
                    <CategoryBox label="Discretionary" amount="$69">

                    </CategoryBox>
                    <Link to="/Budget"><div className = "showmore">Show More</div></Link>
                </div>
                <div className="flex-child">
                <Piechart/>
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