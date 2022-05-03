import React from 'react';
import Friend from './Friend.js';
import Header from './Header.js';
import data from './data.js';

function Friendlist () {
    const eachFriend = data.map((friend, index) => {
        return (
            <Friend
                key = {index}
                friend = {friend}
            />
        )
    })
    return (
        <div>
            <Header/>
            {eachFriend}
        </div>
    );
}

export default Friendlist