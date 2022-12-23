import React from "react"
import BookmarkItem from "./BookmarkItem"

const BookmarkList = ({ bookmarks }) => {
  return (
    <ul>
      {bookmarks.map(({ name, url, desc }) => (
        <BookmarkItem key={name} name={name} url={url} desc={desc} />
      ))}
    </ul>
  )
}

export default BookmarkList
