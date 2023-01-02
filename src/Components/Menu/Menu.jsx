import React from "react"
import styles from "./Menu.module.scss"
import { NavLink } from "react-router-dom"
import { ReactComponent as Plus } from "../../assets/images/plus-solid.svg"
import { ReactComponent as Mark } from "../../assets/images/bookmark-solid.svg"
import { ReactComponent as Home } from "../../assets/images/house-solid.svg"

export const Menu = () => {
  return (
    <section className={`${styles.menu}`}>
      <h1>Bookmark Handle</h1>
      <div className={styles.menuNav}>
        <NavLink end to={"/"}>
          <Home />
          <p children={"Início"} />
        </NavLink>
        <NavLink to={"/editar"}>
          <Mark />
          <p children={"Meus Bookmarks"} />
        </NavLink>
        <NavLink to={"/criar"}>
          <Plus />
          <p children={"Criar Bookmark"} />
        </NavLink>
      </div>
    </section>
  )
}
