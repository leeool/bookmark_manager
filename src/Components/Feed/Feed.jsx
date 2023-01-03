import React from "react"
import { BookmarkContext } from "../../BookmarkContext"
import BookmarkList from "../Bookmark/BookmarkList"
import SearchBookmark from "../Helpers/SearchBookmark"
import MainTitle from "../Text/MainTitle"
import styles from "./Feed.module.scss"

const Feed = () => {
  const [search, setSearch] = React.useState("")
  const { bookmarks } = React.useContext(BookmarkContext)
  const [searchBookmark, setSearchBookmark] = React.useState(bookmarks)

  return (
    <div className={`${"feed-container"} ${styles.feed}`}>
      <div className={styles.feedHeader}>
        <MainTitle children={"Início"} />
        <SearchBookmark
          search={search}
          setSearch={setSearch}
          setBookmark={setSearchBookmark}
        />
      </div>

      {bookmarks && <BookmarkList bookmarks={searchBookmark} />}
    </div>
  )
}

export default Feed
