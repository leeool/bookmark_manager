import React from "react"
import { Menu } from "./Components/Menu/Menu"
import { BrowserRouter } from "react-router-dom"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import styles from "./App.module.scss"
import "./Reset.scss"
import "./Global.scss"
import Feed from "./Components/Feed/Feed"
import Bookmark from "./Components/Bookmark/Bookmark"
import BookmarkStorage from "./BookmarkContext"

const App = () => {
  return (
    <BookmarkStorage>
      <BrowserRouter>
        <main className={styles.app}>
          <Menu />
          <div className={styles.content}>
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
