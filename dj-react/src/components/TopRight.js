import React from 'react'

function TopRight (props) {
    const colors = props.colors
    function changeColor () {
        props.setColors([colors[0], 'maroon', ...colors.slice(2)])
        console.log('top right')
    }
    return (
       <button onClick={changeColor}>Top Right</button>
   )
}

export default TopRight