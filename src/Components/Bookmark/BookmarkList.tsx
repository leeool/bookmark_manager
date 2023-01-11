import React from "react"
import styles from "./BookmarkList.module.scss"
import BookmarkItem from "./BookmarkItem"

const BookmarkList = ({ bookmarks }: { bookmarks: Bookmark[] }) => {
  if (!bookmarks) return null
  return (
    <ul className={styles.list}>
      {bookmarks.map(({ name, url, description }, index) => (
        <BookmarkItem
          key={index}
          name={name}
          url={url}
          description={description}
        />
      ))}
    </ul>
  )
}

export default BookmarkList
