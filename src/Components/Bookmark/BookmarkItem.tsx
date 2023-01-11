import React from "react"
import Card from "../Helpers/Card"

const BookmarkItem = ({ name, url, description }: Bookmark) => {
  return (
    <li>
      <Card description={description} name={name} url={url} />
    </li>
  )
}

export default BookmarkItem
