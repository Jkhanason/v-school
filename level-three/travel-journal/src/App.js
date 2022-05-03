import React from 'react'
import Location from './Location.js'
import Header from './Header.js'
import data from './data.js'

function App () {
    const places = data.map((place, index) => {
        return (
            <Location
                key = {index}
                place = {place}
            />
        )
    })
    return (
        <div>
            <Header/>
            {places}
        </div>
    );
}

export default App