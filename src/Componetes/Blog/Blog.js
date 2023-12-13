
const Blog = (props) => {
    const {images, userImg, name, postDate, readTime, title, tags} = props.blog;
    
    return (
        <div className="">
            <div className="w-full">
                <img className="w-full" src={images} alt="" />
            </div>
            <div className="flex items-center flex-wrap gap-3 justify-between py-6">
                <div className="flex items-center gap-5">
                    <img className="w-[60px] h-[60px] rounded-full" src={userImg} alt="" />
                    <div className="flex flex-col items-start gap-1">
                        <h4 className="text-neutral-900 text-2xl font-bold">{name}</h4>
                        <p className="text-neutral-900 text-opacity-60 text-base font-semibold">{postDate}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <p className="text-neutral-900 text-opacity-60 text-xl font-medium">{readTime} min read</p>
                    <button onClick={() => props.bookMarked(props.blog)} className='text-xl'>
                        <span className='focus:bg-green-600'><i className="fa-regular fa-bookmark"></i></span>
                    </button>
                </div>
            </div>
            <h2 className="text-neutral-900 text-[40px] font-bold text-start">{title}</h2>
            <div className="text-neutral-900 text-opacity-60 text-xl font-medium flex gap-3 mt-3">
                <a href="#">{tags[0]}</a>
                <a href="#">{tags[1]}</a>
            </div>
            <div className="text-start my-4">
            <button onClick={() => props.markAsRead(props.blog)} className="text-indigo-600 text-xl font-semibold font-['Exo 2'] underline ">Mark as read</button>
            </div>
        </div>
    );
};

export default Blog;