import React from 'react';
import './BlogDetails.css'
const BlogDetails = ({blog}) => {
    return (
        <div style={{width:'22rem', boxSizing: 'border-box'}} className={`text-white col-md-4 card m-2 m-auto my-2 color-${blog.bgColor}`}>
            <div className='d-flex'>
                <div>
                    <img src={blog.img} alt="" className="img-fluid p-2" />
                </div>
                <div className='p-3'>
                    <h5>{blog.name}</h5>
                    <p>29 May 2021</p>
                </div>
            </div>
            <div className='p-3'>
                <h4>{blog.blogTitle}</h4>
                <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum sint aspernatur et dolores tempora ducimus facilis vel nisi repudiandae molestias ex ratione perferendis, autem nesciunt necessitatibus quo minima laboriosam repellat.</p>
            </div>
        </div>
    );
};

export default BlogDetails;