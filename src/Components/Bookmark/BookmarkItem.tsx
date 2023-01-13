import React from "react"
import Card from "../Helpers/Card"

const BookmarkItem = ({ name, url, description, image }: Bookmark) => {
  return (
    <li>
      <Card description={description} image={image} name={name} url={url} />
    </li>
  )
}

export default BookmarkItem
