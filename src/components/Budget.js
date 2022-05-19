import React from 'react'
import './Budget.css'
import Piechart from './Piechart'
import AddBudget from './AddBudget'
import Header from './Header';

const Budget = () => {
    return (
        <div>
            <Header/>
            <div className="main-container">
                <div className="flex-container">
                    <div className="flex-child">
                        <Piechart />
                    </div>
                    <div className='flex-child'>
                        <div>Update Budget</div>
                        <AddBudget />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Budget