import React from 'react';
import Header from './Header.js';
import Places from './Places.js';
import data from './data.js';


function App () {
    let id = 0;
    const places = data.map(place => {
        return (
            <Places
                key = {id++}
                place = {place}
            />
        )
    })
    return (
        <div>
            <Header/>
            <div className="all-locations">
                {places}
            </div>
        </div>
    );
}

export default App