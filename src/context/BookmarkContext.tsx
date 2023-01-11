import React, { ReactNode } from "react"

interface IBookmarkContext {
  saveBookmark: (name: string, url: string, description: string) => void
  bookmarks: Bookmark[]
  recentBookmark: Bookmark[]
}

export const BookmarkContext = React.createContext({} as IBookmarkContext)

const localBookmarks = localStorage.getItem("bookmarks")

export const BookmarkStorage = ({ children }: { children: ReactNode }) => {
  const [bookmarks, setBookmarks] = React.useState<Bookmark[] | []>(
    localBookmarks ? JSON.parse(localBookmarks) : []
  )
  const [recentBookmark, setRecentBookmark] = React.useState<Bookmark[] | []>(
    []
  )

  const saveBookmark = (name: string, url: string, description: string) => {
    if (name && url) {
      setBookmarks((prev) => [{ name, url, description }, ...prev])
      setRecentBookmark((prev) => [{ name, url, description }, ...prev])
    }
  }

  React.useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
  }, [bookmarks])

  return (
    <BookmarkContext.Provider
      value={{ saveBookmark, bookmarks, recentBookmark }}
    >
      {children}
    </BookmarkContext.Provider>
  )
}

export default BookmarkStorage
