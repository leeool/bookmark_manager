import React, { FormEvent } from "react"
import UseForm from "../../Hooks/UseForm"
import Button from "../../Components/Form/Button"
import Input from "../../Components/Form/Input"
import Card from "../../Components/Helpers/Card"
import MainTitle from "../../Components/MainTitle/MainTitle"
import styles from "./BookmarkCreate.module.scss"
import debounce from "lodash.debounce"
import BookmarkList from "../../Components/Bookmark/BookmarkList"
import { BookmarkContext } from "../../Context/BookmarkContext"

const BookmarkCreate = () => {
  const name = UseForm(null)
  const url = UseForm("url")
  const description = UseForm(null)
  const { saveBookmark, recentBookmark } = React.useContext(BookmarkContext)
  const [debouncedUrl, setDebouncedUrl] = React.useState<string>("")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (url.validate()) {
      saveBookmark(name.value, url.value, description.value)
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
    <div className={`${styles.bookmarkCreate} feed-container`}>
      <MainTitle children={"Crie um Bookmark"} />
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          label={"Nome do bookmark"}
          type="text"
          id="criar"
          placeholder="Receita de Pizza"
          maxLength={25}
          required
          {...name}
        />
        <Input
          label={"URL"}
          type="link"
          id="link"
          placeholder="https://exemplo.com/pizza-gostosa"
          required
          {...url}
        />
        <Input
          label={"Descrição (opcional)"}
          type="text"
          id="desc"
          placeholder="Uma excelente receita de pizza"
          maxLength={40}
          {...description}
        />
        <div>
          <label htmlFor="file" className={styles.imageUpload}>
            Selecione uma imagem (opcional)
            <input type="file" id="file" hidden />
          </label>
        </div>
        <Button children={"Salvar"} />
      </form>
      <div className={styles.cardPreview}>
        <Card
          name={name.value.trim()}
          url={debouncedUrl}
          description={description.value.trim() || "Descrição do bookmark"}
        />
      </div>
      <div className={styles.cards}>
        <BookmarkList bookmarks={recentBookmark} />
      </div>
    </div>
  )
}

export default BookmarkCreate
