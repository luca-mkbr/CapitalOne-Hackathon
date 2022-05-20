import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Budget.css';
import Piechart from './Piechart'
import AddBudget from './AddBudget'
import Header from './Header';
import { getCookie } from './Cookies'

const Budget = () => {
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
                        <Piechart />
                    </div>
                    <div className='flex-child'>
                        <div></div>
                        <AddBudget />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Budget