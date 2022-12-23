import React from "react"

export const BookmarkContext = React.createContext()

export const BookmarkStorage = ({ children }) => {
  const [bookmarks, setBookmarks] = React.useState([])

  const saveBookmark = (name, url, desc, img) => {
    if ((name, url)) {
      setBookmarks((previus) => [
        {
          name,
          url,
          desc
        },
        ...previus
      ])

      console.log(bookmarks)
    }
  }

  return (
    <BookmarkContext.Provider value={{ saveBookmark, bookmarks }}>
      {children}
    </BookmarkContext.Provider>
  )
}

export default BookmarkStorage
