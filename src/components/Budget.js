import React from 'react'
import './Budget.css'
import Piechart from './Piechart'
import AddBudget from './AddBudget'
import Header from './Header';
import GetPoints from './PickReward';

const Budget = () => {
    return (
        <div className="og">
            <Header />
            <div className="main-container">
                <div className="flex-container">
                    <div className="flex-child">
                        <Piechart />
                    </div>
                    <div className='flex-child'>
                        <AddBudget />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Budget