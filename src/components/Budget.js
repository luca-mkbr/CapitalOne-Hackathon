import React from 'react'
import './Budget.css'
import Piechart from './Piechart'

const Budget = () => {
    return (
        <div className="main-container">
            <div className="flex-container">
                <div className="flex-child">
                    <Piechart />
                </div>
                <div>Budget</div>
                <div className='flex-child'>
                    <div>Update Budget</div>

                </div>
            </div>
        </div>
    )
}

export default Budget