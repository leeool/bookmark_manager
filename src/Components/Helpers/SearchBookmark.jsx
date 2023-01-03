import React from "react"
import { BookmarkContext } from "../../BookmarkContext"
import styles from "./SearchBookmark.module.scss"
import { ReactComponent as Search } from "../../assets/images/magnifying-glass-solid.svg"

const SearchBookmark = ({ search, setBookmark, setSearch }) => {
  const { bookmarks } = React.useContext(BookmarkContext)

  React.useEffect(() => {
    setBookmark(bookmarks.filter(({ name }) => name.includes(search)))
  }, [search])

  return (
    <div className={styles.search}>
      <input
        id={"pesquisa"}
        placeholder="Pesquisar..."
        type={"text"}
        onChange={({ target }) => setSearch(target.value)}
      />
    </div>
  )
}

export default SearchBookmark
