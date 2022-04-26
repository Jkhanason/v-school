import React from 'react';

function ProDJRight (props) {
    function changeColor () {
        props.setColors(current => [...current.slice(0, 3), 'blue'])
            console.log('bottom right blue')
    }
    return (
        <button onClick={changeColor}>Pro DJ Right</button>
    )
}

export default ProDJRight