import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import styles from "./App.module.scss"
import "./Reset.scss"
import "./Global.scss"
import Feed from "./Components/Feed/Feed"
import Bookmark from "./Components/Bookmark/Bookmark"
import BookmarkStorage from "./BookmarkContext"
import Menu from "./Components/Menu/Menu"

const App = () => {
  const [mobile, setMobile] = React.useState(null)

  React.useEffect(() => {
    const handleResize = () => {
      const { matches } = window.matchMedia("(max-width: 1000px)")
      setMobile(matches)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <BookmarkStorage>
      <BrowserRouter>
        <main className={styles.app}>
          <Menu mobile={mobile} setMobile={setMobile} />
          <div className={styles.pages}>
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/criar" element={<Bookmark />} />
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </BookmarkStorage>
  )
}

export default App
