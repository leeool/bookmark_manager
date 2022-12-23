import React from "react"
import styles from "./MainTitle.module.scss"

const MainTitle = ({ children }) => {
  return <h1 className={styles.mainTitle}>{children}</h1>
}

export default MainTitle
