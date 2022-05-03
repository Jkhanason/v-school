import React from 'react'
import Song from '../assets/go-down-deh-slowed.mp3'

function Sound () {
    let notPlayedYet = true
    function playMusic () {
        const music = new Audio(Song)
        notPlayedYet ? music.play() : console.log('already played')
        notPlayedYet = false

        console.log('Sound on')
        console.log({Song})
    }

    return (
        <button onClick={playMusic} className="soundBtn" value="sound">Play Sound</button>
    )
}

export default Sound

