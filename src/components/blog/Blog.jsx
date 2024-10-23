import PropTypes from "prop-types";
import { IoBookmarksOutline } from "react-icons/io5";

const Blog = ({blog,  handleBookmark, handleSpentTime}) => {
    // console.log(blog)
    const {cover, author, author_img, reading_time, posted_date, title, hashTags} = blog;
    // console.log(reading_time)
    return (
        <div className="mb-14">
            <img className="rounded-lg h-[450px] w-full" src={cover} alt="" />
            <div className="flex justify-between items-center mt-4">
                <div className="flex gap-4">
                    <img className="w-14 h-14 rounded-full" src={author_img} alt="" />
                    <div>
                        <h3 className="text-2xl font-semibold">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <span>{reading_time} Read</span>
                    <button 
                    onClick={ () => handleBookmark() } 
                    className="text-2xl"
                    ><IoBookmarksOutline /></button>
                </div>
            </div>
            <h1 className="text-3xl font-semibold mt-2">{title}</h1>
            <div className="mt-2 text-slate-400">
                {
                    hashTags.map((hash, idx) => <span key={idx}> <a href="">{hash} </a></span>)
                }
            </div>
            <button 
                className="text-purple-500 underline" 
                onClick={() => handleSpentTime(blog.id,reading_time)}
            >Mark as read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func.isRequired,
    handleSpentTime: PropTypes.func.isRequired
}


export default Blog;