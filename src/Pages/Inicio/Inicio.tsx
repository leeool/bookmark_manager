import React from "react"
import Button from "../../Components/Form/Button"
import MainTitle from "../../Components/MainTitle/MainTitle"
import styles from "./Inicio.module.scss"
import { Link } from "react-router-dom"

const Inicio = () => {
  return (
    <section className={`${"feed-container"} ${styles.inicio}`}>
      <MainTitle children={"Início"} />
      <div className={styles.introducao}>
        <h2>Crie um bookmark</h2>
        <p>Customize do seu jeito.</p>
        <Link to={"/criar"}>
          <Button children={"Criar"} />
        </Link>
      </div>
    </section>
  )
}

export default Inicio
