import React from "react"
import BookmarkCreate from "./BookmarkCreate"
import styles from "./Bookmark.module.scss"

const Bookmark = () => {
  return (
    <section className={`${"feed-container"} ${styles.bookmark}`}>
      <BookmarkCreate />
    </section>
  )
}

export default Bookmark
