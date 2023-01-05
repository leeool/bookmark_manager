import React from "react"
import BookmarkItem from "./BookmarkItem"
import styles from "./BookmarkList.module.scss"

const BookmarkList = ({ bookmarks }) => {
  if (!bookmarks) return null
  return (
    <ul className={styles.list}>
      {bookmarks.map(({ name, url, desc }, index) => (
        <BookmarkItem key={index} name={name} url={url} desc={desc} />
      ))}
    </ul>
  )
}

export default BookmarkList
