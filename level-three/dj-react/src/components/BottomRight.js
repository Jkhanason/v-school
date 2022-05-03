import React from 'react'

function BottomRight (props) {
    const colors = props.colors
    function changeColor () {
        props.setColors([...colors.slice(0, 3), '#40E0D0'])
        console.log('bottom right')
    }
    return (
        <button onClick={changeColor}>Bottom Right</button>
    )
}

export default BottomRight