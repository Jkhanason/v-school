import React from 'react'

function TopLeft (props) {
    function changeColor () {
        props.setColors(['tan', ...props.colors.slice(1)])
        console.log('top left')
    }
    return (
        <button onClick={changeColor}>TopLeft</button>
    )
}

export default TopLeft