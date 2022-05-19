import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <Link to="/"><h1 className="appname">CapitalOne Budget Tracker</h1></Link>
            <img src = "https://d1.awsstatic.com/Customer%20References%20Directory%20Logos/Capital-One_Logo_%401x.0aef0b700254d3f618484ff03747100753de3d64.png"></img>
                <div className="links">
                    <Link to="/home">Home</Link>
                    <Link to="/budget">Budget</Link>
                    <Link to="/rewards">Rewards</Link>
                </div>
        </div>
    )
}

export default Header