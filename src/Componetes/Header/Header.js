import React from 'react';
import ProfilePic from '../../img/20231021_120024_0000.png';

const Header = () => {
    return (
        <div className='container mx-auto flex items-center justify-between py-6 border-b flex-wrap gap-4'>
            <div className=''>
                <h1 className='text-neutral-900 text-[40px] font-bold'>React Article App</h1>
            </div>
            <div>
                <img className='w-[60px] h-[60px] rounded-full' src={ProfilePic} alt="" />
            </div>
        </div>
    );
};

export default Header;