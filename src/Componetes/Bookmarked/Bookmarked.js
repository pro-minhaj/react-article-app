import React from 'react';

const Bookmarked = ({newBlog}) => {
    return (
        <div className='flex flex-col gap-[24px]'>
            <div className='bg-indigo-600 bg-opacity-10 rounded-lg border border-indigo-600 py-[20px]'>
                <h2 className='text-indigo-600 text-2xl font-bold'>Spent time on read : 177 min</h2>
            </div>
            <div className='flex flex-col gap-[16px] p-[30px] bg-neutral-900 bg-opacity-5 rounded-lg'>
                <h3 className='text-neutral-900 text-2xl font-bold'>Bookmarked Blogs : 8</h3>
                <div className='bg-white rounded-lg p-[20px] text-start text-neutral-900 text-lg font-semibold'>
                    {newBlog.title}
                </div>
            </div>
        </div>
    );
};

export default Bookmarked;