import PropTypes from 'prop-types';

function Bookmark({mark}) {
    // console.log(mark)
    return (
        <div>
            <h4 className="bg-white p-4 rounded-md my-4">{mark.title}</h4>
        </div>
    );
}
Bookmark.propTypes = {
    mark: PropTypes.object.isRequired
}


export default Bookmark;