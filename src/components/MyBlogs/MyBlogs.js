import React from 'react';
import Blogs from '../Home/Blogs/Blogs';
import Navbar from '../Home/Navbar/Navbar';

const MyBlogs = () => {
    return (
        <div>
            <Navbar />
            <div className='mt-3'>
                <Blogs />
            </div>
           
        </div>
    );
};

export default MyBlogs;