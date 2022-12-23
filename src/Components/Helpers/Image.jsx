import React from "react"
import styles from "./Image.module.scss"

const link = "https://www.google.com/s2/favicons?sz=256&domain_url="

const Image = ({ src }) => {
  return (
    <>
      {src ? (
        <img src={link + src} alt="icone do bookmark" />
      ) : (
        <div className={styles.placeholder}></div>
      )}
    </>
  )
}

export default Image
