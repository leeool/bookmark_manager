import React from "react"
import styles from "./Card.module.scss"
import Image from "./Image"

const link = "https://www.google.com/s2/favicons?sz=256&domain_url="

const Card = ({ name, url, description, image }: Bookmark) => {
  return (
    <div className={styles.card}>
      <a target={"_blank"} href={url}>
        <div className={styles.img}>
          {image ? (
            <img src={String(image)} />
          ) : (
            <img src={url && link + url} />
          )}
        </div>
        <div className={styles.cardInfo}>
          <h2>{name}</h2>
          {description && <p>{description}</p>}
        </div>
      </a>
    </div>
  )
}

export default Card
