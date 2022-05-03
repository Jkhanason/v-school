import React from 'react';

function Pet (props) {
    const pets = props.pets
    return (
       <div className="pet-container">
        <ul>
            <li> {pets.name} who is a {pets.breed}</li>
        </ul>
       </div>
    )
}

export default Pet