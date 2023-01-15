import React from "react"
import UseForm from "../../Hooks/UseForm"
import Button from "../../Components/Form/Button"
import Input from "../../Components/Form/Input"
import MainTitle from "../../Components/MainTitle/MainTitle"
import BookmarkList from "../../Components/Bookmark/BookmarkList"
import { BookmarkContext } from "../../Context/BookmarkContext"
import InputFile from "../../Components/Form/InputFile"
import UseImage from "../../Hooks/UseImage"
import normalizeUrl from "../../utils/normalizeUrl"
import BookmarkPreview from "../../Components/Bookmark/BookmarkPreview"
import debounce from "lodash.debounce"
import styles from "./Criar.module.scss"
import CriarBookmark from "../../Components/Bookmark/CriarBookmark"

const BookmarkCreate = () => {
  const { saveBookmark, recentBookmark } = React.useContext(BookmarkContext)
  const [debouncedUrl, setDebouncedUrl] = React.useState<string>("")

  // Hooks
  const name = UseForm(null)
  const url = UseForm("url")
  const description = UseForm(null)
  const file = UseImage()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (url.validate() && name.value) {
      saveBookmark(
        name.value,
        normalizeUrl(url.value),
        description.value,
        file.data
      )
    }
  }

  const debouncedValue = React.useCallback(
    debounce((value, setValue) => setValue(value), 1000),
    []
  )

  React.useEffect(() => {
    debouncedValue(url.value, setDebouncedUrl)
  }, [url.value])

  return (
    <div className={`feed-container ${styles.criarContainer}`}>
      <MainTitle children={"Crie um Bookmark"} />

      <div className={styles.criar}>
        <CriarBookmark preview={true} />
      </div>

      <div>
        <BookmarkList bookmarks={recentBookmark} />
      </div>
    </div>
  )
}

export default BookmarkCreate
