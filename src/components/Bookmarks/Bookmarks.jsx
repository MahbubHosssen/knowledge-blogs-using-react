import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

function Bookmarks({bookmarks, spentTime}) {
    return (
        <div>
            <div className="p-4 bg-purple-300">
                <h2 className="text-lg text-gray-600 font-semibold">Spent time on read : {spentTime} min</h2>
            </div>
            <div className="border-2 bg-gray-200 h-fit mt-4"> 
                <h2 className="text-2xl font-semibold pt-4 pl-4">Bookmark: {bookmarks.length}</h2>
                <div className="bg-gray-200 p-4 pt-0">
                    {
                        bookmarks.map((mark, idx) => <Bookmark key={idx} mark={mark}></Bookmark>)
                    }
                </div>
            </div>
        </div>
    );
}
Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    spentTime: PropTypes.number.isRequired
}


export default Bookmarks;