import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Home.css'
import './AddBudget'
import Piechart from './Piechart'
import Header from './Header';
import { getCookie } from "./Cookies";

const Home = () => {
    let navigate = useNavigate();
    useEffect(() => {
    if (getCookie("ver") === null) {
        navigate("../", ({replace:true}));
    }
    })
    return (
        <div className="og">
            <Header />
            <div className="main-container">
                <div className="flex-container">
                    <div className="flex-child">
                        <CategoryBox label="Savings" amount={getCookie("savingsAmount")}>

                        </CategoryBox>
                        <CategoryBox label="Mandatory" amount={getCookie("necessitiesAmount")}>

                        </CategoryBox>
                        <CategoryBox label="Discretionary" amount={getCookie("discretionaryAmount")}>

                        </CategoryBox>
                        <CategoryBox label="Loan Payments" amount={getCookie("loanPayments")}>

                        </CategoryBox>
                        <Link to="/budget"><div className="showmore">Show More</div></Link>
                    </div>
                    <div className="flex-child">
                        <Piechart />
                    </div>
                </div>
            </div>
        </div>
    )
}

function CategoryBox(props) {
    return (
        <div className="categorybox">
            <h2>{props.label}: ${props.amount}</h2>
        </div>
    );
}

export default Home