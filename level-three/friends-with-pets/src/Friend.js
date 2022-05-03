import React from 'react';
import Pet from './Pet.js';

function Friend (props) {
    const friend = props.friend
    const petsArr = friend.pets.map((pet, index) => {
        return (
            <Pet
                key = {index}
                pets = {pet}
            />
        )
    })
    let pets
    let isOrAre
    let breedOrBreeds
    let nameOrNames
    friend.pets.length === 1 ? pets = 'pet' : pets = 'pets'
    friend.pets.length === 1 ? isOrAre = 'is' : isOrAre = 'are'
    friend.pets.length === 1 ? breedOrBreeds = 'breed' : breedOrBreeds = 'breeds'
    friend.pets.length === 1 ? nameOrNames = 'name' : nameOrNames = 'names'
    return (
        <div className="friend-container">
        <h3> I am friends with {friend.name}, who is {friend.age} years old. </h3>
        <p> {friend.name} lives {54 - friend.age} minutes away from me and owns {friend.pets.length} {pets}! </p>
        <p> Their pets {nameOrNames} and {breedOrBreeds} {isOrAre}, </p>
        {petsArr}
        </div>
    )
}

export default Friend