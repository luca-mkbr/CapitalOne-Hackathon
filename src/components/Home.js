import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import './AddBudget'
import Piechart from './Piechart'
import { budgetData } from '../data/budgetData'

const Home = () => {
    return (
        <div className="main-container">
            <div className="flex-container">
                <div className="flex-child">
                    <CategoryBox label="Savings" amount={budgetData[0].necessitiesAmount}>

                    </CategoryBox>
                    <CategoryBox label="Necessities" amount={budgetData[0].savingsAmount}>
                        
                    </CategoryBox>
                    <CategoryBox label="Discretionary" amount={budgetData[0].discretionaryAmount}>

                    </CategoryBox>
                    <Link to="/budget"><div className = "showmore">Show More</div></Link>
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
            ${props.amount}
        </div>
    );
}

export default Home