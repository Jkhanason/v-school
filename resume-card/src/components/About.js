import React from 'react';
import Img from '../assets/profile.jpg';

function About() {
    return (
        <div className="aboutContainer">
            <img src={Img} alt="head shot of Jason Khan"/>
            <h3>Jason Khan</h3>
            <p>Frontend Developer</p>
            <p>jasonkhan.dev</p>
            <div className="buttons">
                <button><i className="fa-solid fa-envelope"></i>Email</button>
                <button><i className="fa-brands fa-linkedin"></i>Linkedin</button>
            </div>
        </div>
    )
}

export default About