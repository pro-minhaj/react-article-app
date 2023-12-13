import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Bookmarked from '../Bookmarked/Bookmarked';
import toast, { Toaster } from 'react-hot-toast';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [newBlog, setNewBlog] = useState([]);
    const [time, setTime] = useState(0);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, []);

    const notifySucces = () => toast.success('Successfully Added!');
    const notifyError = () => toast.error('Already Added!');

    const bookMarked = (cardBlogs) =>{
        const newArray = [...newBlog, cardBlogs];
        const exited = newBlog.find(blog => blog.id === cardBlogs.id);
        if(exited){
            notifyError();
            return;
        }
        setNewBlog(newArray);
        notifySucces();
    }

    const markAsRead = (blog) => {
        const readTime = blog.readTime + time;
        setTime(readTime);
    }

    return (
        <div className='container mx-auto my-6 grid lg:grid-cols-[2fr_1fr] gap-[24px]'>
            <Toaster />
            <div className='flex flex-col gap-8'>
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog} bookMarked={bookMarked} markAsRead={markAsRead}></Blog>)
                }
            </div>
            <div className='sticky top-0 h-screen'>
                <Bookmarked newBlog={newBlog} time={time}></Bookmarked>
            </div>
        </div>
    );
};

export default Blogs;