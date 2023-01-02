import React from "react"

export const BookmarkContext = React.createContext()

const localBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || []

export const BookmarkStorage = ({ children }) => {
  const [bookmarks, setBookmarks] = React.useState(localBookmarks)

  const saveBookmark = (name, url, desc, img) => {
    if ((name, url)) {
      setBookmarks((prev) => [{ name, url, desc, ...prev }, ...prev])
    }
  }

  React.useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
  }, [bookmarks])

  return (
    <BookmarkContext.Provider value={{ saveBookmark, bookmarks }}>
      {children}
    </BookmarkContext.Provider>
  )
}

export default BookmarkStorage
