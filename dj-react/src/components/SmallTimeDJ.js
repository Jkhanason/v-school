import React from 'react';

function SmallTimeDJ (props) {
    function changeColor () {
        let color
        props.colors[0] === 'white' ? color = 'black' : color = 'white'
        props.setColors([color, color, color, color])
        console.log("all white or black")
    }
    return (
        <button onClick={changeColor}>Small Time DJ</button>
    )
}

export default SmallTimeDJ