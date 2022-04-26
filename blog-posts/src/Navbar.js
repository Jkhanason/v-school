import React from 'react';

function Navbar () {
    return (
        <div>
            <div className="nav-container">
                {/* eslint-disable-next-line */}
                <a className='nav-links first-link' href="#"><h3>Start Bootstrap</h3></a>
                {/* eslint-disable-next-line */}
                <a className='nav-links' href="#"><h5>Home</h5></a>
                {/* eslint-disable-next-line */}
                <a className='nav-links' href="#"><h5>About</h5></a>
                {/* eslint-disable-next-line */}
                <a className='nav-links' href="#"><h5>Sample Post</h5></a>
                {/* eslint-disable-next-line */}
                <a className='nav-links last-link' href="#"><h5>Contact</h5></a>
            </div>
        </div>
    )
}

export default Navbar