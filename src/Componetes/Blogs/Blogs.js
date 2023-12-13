import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Bookmarked from '../Bookmarked/Bookmarked';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, []);
    
    const [newBlog, setNewBlog] = useState([]);
    const bookMarked = (id) =>{
        const blogTitle = blogs.find(blog => blog.id === id);
        setNewBlog(blogTitle);
    }

    return (
        <div className='container mx-auto my-6 grid lg:grid-cols-[2fr_1fr] gap-[24px]'>
            <div className='flex flex-col gap-8'>
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog} bookMarked={bookMarked}></Blog>)
                }
            </div>
            <div className='sticky top-0 h-screen'>
                <Bookmarked newBlog={newBlog}></Bookmarked>
            </div>
        </div>
    );
};

export default Blogs;