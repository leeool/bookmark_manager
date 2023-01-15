import React from "react"
import styles from "./Menu.module.scss"
import { NavLink } from "react-router-dom"
import { ReactComponent as PlusSVG } from "../../assets/images/plus-solid.svg"
import { ReactComponent as MarkSVG } from "../../assets/images/bookmark-solid.svg"
import { ReactComponent as HomeSVG } from "../../assets/images/house-solid.svg"
import { ReactComponent as SettingsSVG } from "../../assets/images/gear-solid.svg"
import { ReactComponent as SetaDireita } from "../../assets/images/seta-direta.svg"
import { ReactComponent as SetaEsquerda } from "../../assets/images/seta-esquerda.svg"
import { useLocation } from "react-router-dom"
import MainTitle from "../MainTitle/MainTitle"
import Button from "../Form/Button"

const Menu = ({ mobile }: { mobile: boolean | null }) => {
  const [mobileMenu, setMobileMenu] = React.useState(false)
  const [toggleMenu, setToggleMenu] = React.useState(true)
  const location = useLocation()

  const handleClick = () => {
    setMobileMenu((prev) => !prev)
  }

  React.useEffect(() => {
    setMobileMenu(false)
  }, [location])

  const handleToggleMenu = () => {
    setToggleMenu((prev) => !prev)
  }

  return (
    <div className={styles.menuContainer}>
      {mobile && (
        <div className={`${styles.mobileHeader}`}>
          <MainTitle children={"Bookmark Handle"} />
          <button className={styles.btn} onClick={handleClick}></button>
        </div>
      )}

      <section
        className={` ${mobile ? styles.mobileMenu : styles.menu} ${
          mobileMenu && styles.mobileMenuActive
        } ${!toggleMenu && styles.closed}`}
      >
        <div className={styles.menuNav}>
          {!mobile && <MainTitle children={"Bookmark Handle"} />}
          <div className={styles.menu1}>
            <NavLink end to={"/"}>
              <HomeSVG />
              <p children={"Início"} />
            </NavLink>
            <NavLink to={"/biblioteca"}>
              <MarkSVG />
              <p children={"Biblioteca"} />
            </NavLink>
            <NavLink to={"/criar"}>
              <PlusSVG />
              <p children={"Criar Bookmark"} />
            </NavLink>
          </div>
          <div className={styles.menu2}>
            <NavLink to={"/config"}>
              <SettingsSVG />
              <p children={"Configurações"} />
            </NavLink>
          </div>
        </div>
      </section>
      {!mobile && (
        <div className={styles.button}>
          <Button
            children={toggleMenu ? <SetaEsquerda /> : <SetaDireita />}
            onClick={handleToggleMenu}
          />
        </div>
      )}
    </div>
  )
}

export default Menu
