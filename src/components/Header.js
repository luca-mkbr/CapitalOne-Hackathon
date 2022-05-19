import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h1 className="appname">AppName</h1>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/budget">Budget</Link>
                    <Link to="/awards">Awards</Link>
                </div>
        </div>
    )
}

export default Header