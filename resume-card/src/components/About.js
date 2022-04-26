import React from 'react'

function About() {
    return (
        <div className="aboutContainer">
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQE9zk4Pjqzlfg/profile-displayphoto-shrink_200_200/0/1649630611206?e=1656547200&v=beta&t=c8AN1QhJeWiabWQlutszFrFmiZSm108B5Z24uImTuvc" alt="head shot of Jason Khan"/>
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