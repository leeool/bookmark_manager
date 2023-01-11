import React from "react"
import styles from "./Error.module.scss"

const Error = ({ error }: { error: string }) => {
  if (!error) return null
  return <p className={styles.error}>{error}</p>
}

export default Error
