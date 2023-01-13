import React from "react"
import styles from "./Image.module.scss"

const Image = ({ src }: { src: string }) => {
  return (
    <>
      {src ? (
        <img src={src} alt="icone do bookmark" />
      ) : (
        <div className={styles.placeholder}></div>
      )}
    </>
  )
}

export default Image
