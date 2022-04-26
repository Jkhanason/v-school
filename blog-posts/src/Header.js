import React from 'react';
import Navbar from './Navbar.js'

function Header () {
    return (
        <div className="header-container">
            <Navbar />
            <div className="nav-title">
                <h1> Clean Blog </h1>
                <p> A Blog Theme by Start Bootstrap </p>
            </div>
        </div>
    )
}

export default Header