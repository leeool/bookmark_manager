import React, { ReactNode } from "react"
import styles from "./Button.module.scss"

const Button = ({ children, ...props }: { children: ReactNode }) => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  )
}

export default Button
