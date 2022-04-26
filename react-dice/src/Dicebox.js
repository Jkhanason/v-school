import React from 'react';
import Dice from './Dice.js';

function Dicebox () {
    //generate inital dice numbers
    let nums = [];
    function randomNums () {
        let i = 5
        while (i > 0) {
            nums.push(Math.floor(Math.random() * 6))
            i--
        }
    }
    randomNums()

    //save the numbers in state
    const [dice, setDice] = React.useState(nums)

    const eachDice = dice.map((die, index) => {
        return (<Dice key = {index} num = {die}/>)
    })

    //update state with new numbers
    function newDice () {
            nums = [];
            randomNums()
            setDice(nums)
    }

    return (
        <div className="dice-container">
            {eachDice}
            <button onClick={newDice}> Roll Dice </button>
        </div>
    )
}

export default Dicebox