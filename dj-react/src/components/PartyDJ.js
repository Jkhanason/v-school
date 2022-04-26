import React from 'react';

function PartyDJ (props) {
    function changeColor () {
        props.setColors(['purple', 'purple',...props.colors.slice(2)])
        console.log('top two purple')
    }
    return (
        <button onClick={changeColor}>Party DJ</button>
    )
}

export default PartyDJ