import debounce from "lodash.debounce"
import React from "react"
import { BookmarkContext } from "../../Context/BookmarkContext"
import UseForm from "../../Hooks/UseForm"
import UseImage from "../../Hooks/UseImage"
import normalizeUrl from "../../utils/normalizeUrl"
import Button from "../Form/Button"
import Input from "../Form/Input"
import InputFile from "../Form/InputFile"
import BookmarkPreview from "./BookmarkPreview"

import styles from "./CriarBookmark.module.scss"

const CriarBookmark = ({ preview }: { preview: boolean }) => {
  const { saveBookmark } = React.useContext(BookmarkContext)
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
    <>
      <div className={styles.bookmarkCreate}>
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
            label={"Descrição"}
            type="text"
            id="desc"
            placeholder="Uma excelente receita de pizza"
            maxLength={40}
            {...description}
          />
          <InputFile
            id="file1"
            onChange={file.onChange}
            accept={"image/*"}
            data={file.data}
            error={file.erro}
          />
          <Button children={"Salvar"} />
        </form>
      </div>
      {preview && (
        <BookmarkPreview
          name={name.value}
          url={debouncedUrl}
          description={description.value}
          image={file.data}
        />
      )}
    </>
  )
}

export default CriarBookmark
