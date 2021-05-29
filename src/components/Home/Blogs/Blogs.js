import React from 'react';
import author1 from '../../../images/Ellipse 1.png'
import author2 from '../../../images/Ellipse 2.png'
import author3 from '../../../images/Ellipse 3.png'
import BlogDetails from '../BlogDetails/BlogDetails';
const blogData = [
    {
        name: 'Winson Harry',
        blogTitle: 'Check At least a doctor in a year for your teeth',
        img: author1,
        bgColor: 'dark'
    },
    {
        name: 'Selena Gomez',
        blogTitle: '2 times brush in a day for keep you healthy',
        img: author2,
        bgColor: 'info'
    },
    {
        name: 'Georgina Farnandez',
        blogTitle: 'The tooth cancer is taken a challenge',
        img: author3,
        bgColor: 'dark'
    }
]
const Blogs = () => {
    return (
        <section className='blog-section'>
            <div className="container">
                <h4 style={{color:'#17d3c2',textAlign:'center'}}>OUR BLOGS</h4>
                <h1 style={{textAlign:'center'}}>From Our Blogs News</h1>
                <div className="row my-5">
                    {
                        blogData.map(blog => <BlogDetails blog={blog} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blogs;