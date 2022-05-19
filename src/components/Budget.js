import React from 'react'
import './Budget.css'
import Piechart from './Piechart'
import AddBudget from './AddBudget'

const Budget = () => {
    return (
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
    )
}

export default Budget