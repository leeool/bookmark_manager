import React from "react"
import { BookmarkContext } from "../../BookmarkContext"
import BookmarkList from "../Bookmark/BookmarkList"

const Feed = () => {
  const { saveBookmark, bookmarks } = React.useContext(BookmarkContext)

  return (
    <div className={`${"feed-container"}`}>
      {bookmarks && <BookmarkList bookmarks={bookmarks} />}
    </div>
  )
}

export default Feed
