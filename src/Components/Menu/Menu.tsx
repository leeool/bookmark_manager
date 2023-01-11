import React from "react"
import styles from "./Menu.module.scss"
import { NavLink } from "react-router-dom"
import { ReactComponent as Plus } from "../../assets/images/plus-solid.svg"
import { ReactComponent as Mark } from "../../assets/images/bookmark-solid.svg"
import { ReactComponent as Home } from "../../assets/images/house-solid.svg"
import { ReactComponent as Settings } from "../../assets/images/gear-solid.svg"
import { useLocation } from "react-router-dom"
import MainTitle from "../Text/MainTitle"

const Menu = ({ mobile }: { mobile: boolean | null }) => {
  const [mobileMenu, setMobileMenu] = React.useState(false)
  const location = useLocation()

  const handleClick = () => {
    setMobileMenu((prev) => !prev)
  }

  React.useEffect(() => {
    setMobileMenu(false)
  }, [location])

  return (
    <div>
      {mobile && (
        <div className={`${styles.mobileHeader}`}>
          <button className={styles.btn} onClick={handleClick}></button>
          <MainTitle children={"Bookmark Handle"} />
        </div>
      )}

      <section
        className={` ${mobile ? styles.mobileMenu : styles.menu} ${
          mobileMenu && styles.mobileMenuActive
        }`}
      >
        <div className={styles.menuNav}>
          {!mobile && <MainTitle children={"Bookmark Handle"} />}
          <div className={styles.menu1}>
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
          <div className={styles.menu2}>
            <NavLink to={"/config"}>
              <Settings />
              <p children={"Configurações"} />
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Menu
