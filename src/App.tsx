import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import styles from "./App.module.scss"
import "./Reset.scss"
import "./Global.scss"
import Menu from "./Components/Menu/Menu"
import BookmarkStorage from "./Context/BookmarkContext"
import Feed from "./Pages/Inicio/Feed"
import BookmarkCreate from "./Pages/Criar/BookmarkCreate"

const App = () => {
  const [mobile, setMobile] = React.useState<boolean | null>(null)

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
          <Menu mobile={mobile} />
          <div className={styles.pages}>
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/criar" element={<BookmarkCreate />} />
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </BookmarkStorage>
  )
}

export default App
