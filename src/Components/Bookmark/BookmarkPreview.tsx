import React from "react"
import normalizeUrl from "../../utils/normalizeUrl"
import Card from "../Helpers/Card"

import styles from "./BookmarkPreview.module.scss"

const BookmarkPreview = ({ name, description, url, image }: Bookmark) => {
  return (
    <div className={styles.cardPreview}>
      <Card
        name={name.trim() ? name.trim() : "Nome do bookmark"}
        url={normalizeUrl(url)}
        image={image}
        description={description ? description.trim() : "Descrição do bookmark"}
      />
    </div>
  )
}

export default BookmarkPreview
