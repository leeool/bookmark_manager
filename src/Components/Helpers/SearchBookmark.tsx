import React from "react"
import styles from "./SearchBookmark.module.scss"
import { BookmarkContext } from "../../Context/BookmarkContext"

interface ISearchBookmark {
  search: string
  setBookmark: React.Dispatch<Bookmark[]>
  setSearch: React.Dispatch<string>
}

const SearchBookmark = ({
  search,
  setBookmark,
  setSearch
}: ISearchBookmark) => {
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
