import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from "prop-types";

function Blogs({ handleBookmark, handleSpentTime }) {
    // console.log(handleBookmark)
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch("blogs.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="col-span-3">
            {
                blogs.map((blog) => <Blog 
                    key={blog.id} 
                    blog={blog}
                    handleBookmark={() => handleBookmark(blog)}
                    handleSpentTime={handleSpentTime}
                ></Blog>)
            }
        </div>
    );
}
Blogs.propTypes = {
    handleBookmark: PropTypes.func.isRequired,
    handleSpentTime: PropTypes.func.isRequired
}
export default Blogs;