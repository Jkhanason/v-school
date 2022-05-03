import React from 'react';

function Blogpost (props) {
    const blog = props.blog
    return (
        <div className="blog-post">
            <h1> {blog.title} </h1>
            <p> {blog.subTitle} </p>
            <p className="blog-date"> Posted by <span>Start BootStrap</span> on {blog.date} </p>
        </div>
    )
}

export default Blogpost