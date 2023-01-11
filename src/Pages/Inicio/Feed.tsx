import React from "react"
import styles from "./Feed.module.scss"
import MainTitle from "../../Components/MainTitle/MainTitle"
import SearchBookmark from "../../Components/Helpers/SearchBookmark"
import BookmarkList from "../../Components/Bookmark/BookmarkList"
import { BookmarkContext } from "../../Context/BookmarkContext"

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
