import React from 'react';
import Box from './components/Box.js';
import SmallTimeDJ from './components/SmallTimeDJ';
import PartyDJ from './components/PartyDJ.js';
import ProDJLeft from './components/ProDJLeft.js';
import ProDJRight from './components/ProDJRight.js';
import TopLeft from './components/TopLeft.js';
import TopRight from './components/TopRight.js';
import BottomLeft from './components/BottomLeft.js';
import BottomRight from './components/BottomRight.js';
import Sound from './components/Sound.js';


function App () {
    const [colors, setColors] = React.useState(['white', 'white', 'white', 'white'])
    const boxColors = colors.map((color, index) => {
        return (
            <Box
                key = {index}
                color = {color}
            />
        )
    })

    return (
        <div className="app-container">
            {boxColors}
            <SmallTimeDJ colors={colors} setColors={setColors}/>
            <PartyDJ colors={colors} setColors={setColors}/>
            <ProDJLeft colors={colors} setColors={setColors}/>
            <ProDJRight colors={colors} setColors={setColors}/>
            <TopLeft colors={colors} setColors={setColors}/>
            <TopRight colors={colors} setColors={setColors}/>
            <BottomLeft colors={colors} setColors={setColors}/>
            <BottomRight colors={colors} setColors={setColors}/>
            <Sound/>
        </div>
    );
}

export default App