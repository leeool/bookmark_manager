import React from "react"
import Card from "../Helpers/Card"

const BookmarkItem = ({ name, url, desc }) => {
  return (
    <li>
      <Card desc={desc} name={name} url={url} />
    </li>
  )
}

export default BookmarkItem
