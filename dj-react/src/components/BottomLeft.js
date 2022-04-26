import React from 'react'

function BottomLeft (props) {
    const colors = props.colors
    function changeColor () {
        props.setColors([...colors.slice(0, 2), 'Chartreuse', colors[3]])
        console.log('bottom left')
    }
    return (
        <button onClick={changeColor}>Bottom Left</button>
    )
}

export default BottomLeft