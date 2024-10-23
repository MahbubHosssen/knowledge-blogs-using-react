import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [spentTime, setSpentTime] = useState(0)
  
  const handleSpentTime = (id,reading_time) => {
    const newSpent = spentTime + Number(reading_time);
    setSpentTime(newSpent)

    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmarks)
  }

  const handleBookmark = (blog) => {
    const findItem = bookmarks.find(bookmark => bookmark.id === blog.id)
    {
      findItem ? alert("not to create double") : setBookmarks([...bookmarks, blog])
    }
  }

  return (
    <>
      <div>
        <div className='w-10/12 mx-auto'>
          <Header></Header>
          <div className='grid grid-cols-4 my-4 gap-4'>
            <Blogs 
              handleBookmark={handleBookmark}
              handleSpentTime={handleSpentTime}
            ></Blogs>
            <Bookmarks 
            spentTime={spentTime}
            bookmarks={bookmarks}></Bookmarks>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
