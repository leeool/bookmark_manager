import React from "react"
import styles from "./Menu.module.scss"
import { NavLink } from "react-router-dom"
import Button from "../Form/Button"

export const Menu = () => {
  return (
    <section className={`${styles.menu}`}>
      <NavLink to={"/"}>
        <Button children={"Home"} />
      </NavLink>
      <NavLink to={"/criar"}>
        <Button children={"Criar bookmark"} />
      </NavLink>
    </section>
  )
}
