import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <Link to="/"><h1 className="appname">Capital One Budget Tracker</h1></Link>
                <div className="links">
                    <Link to="/home">Home</Link>
                    <Link to="/budget">Budget</Link>
                    <Link to="/rewards">Rewards</Link>
                </div>
        </div>
    )
}

export default Header