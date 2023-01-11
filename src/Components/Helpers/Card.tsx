import React from "react"
import styles from "./Card.module.scss"
import Image from "./Image"

const Card = ({ name, url, description }: Bookmark) => {
  return (
    <div className={styles.card}>
      <a target={"_blank"} href={url}>
        <div className={styles.img}>
          <Image src={url} />
        </div>
        <div className={styles.cardInfo}>
          <h2>{name.length > 0 ? name : "Nome do Bookmark"}</h2>
          {description && <p>{description}</p>}
        </div>
      </a>
    </div>
  )
}

export default Card
