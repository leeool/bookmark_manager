import React from "react"
import MainTitle from "../../Components/MainTitle/MainTitle"
import styles from "./Inicio.module.scss"

const Inicio = () => {
  return (
    <section className={`${"feed-container"} ${styles.inicio}`}>
      <MainTitle children={"Início"} />
    </section>
  )
}

export default Inicio
