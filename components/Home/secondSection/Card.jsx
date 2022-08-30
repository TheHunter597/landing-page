import Image from "next/image";
import styles from "./SecondSection.module.scss";

function Card({ entry, activeNum, phoneUser }) {
  let { avatar, describe, name } = entry;
  return (
    <div
      className={`${styles.card} ${
        entry.number == activeNum && phoneUser ? styles.card__active : ""
      }`}
    >
      <Image
        src={avatar}
        height={75}
        width={75}
        className={styles.card__image}
        alt="avatar"
      />
      <h4 className={styles.card__title}>{name}</h4>
      <p className={styles.card__paragraph}>{describe}</p>
    </div>
  );
}

export default Card;
