import React from 'react';
import Blogpost from './Blogpost.js'
import data from './data.js';

function Bloglist () {
    let id = 0;
    const blogItem = data.map(blog => {
        return (
            <Blogpost
                key = {id++}
                blog={blog}
            />
        )
    })
    return (
        <div className="blog-container">
            {blogItem}
            <div className="blog-post" id="button">
                <button>OLDER POSTS →</button>
            </div>
        </div>
    )
}

export default Bloglist