import React from 'react';

function ProDJLeft (props) {
    function changeColor () {
         props.setColors([...props.colors.slice(0, 2), 'blue', props.colors[3]])
    //   props.setColors(current => [...current.slice(0, 2), 'blue', current])
        console.log('bottom left blue')
    }
    return (
        <button onClick={changeColor}>Pro DJ Left</button>
    )
}

export default ProDJLeft