import React, { ReactNode } from "react"
import styles from "./Button.module.scss"

const Button = ({
  children,
  onClick
}: {
  children: ReactNode
  onClick?: React.MouseEventHandler
}) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  )
}

export default Button
