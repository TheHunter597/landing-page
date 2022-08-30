import styles from "./Header.module.scss";
import { analytic } from "../../../public/images/exporter";
import Image from "next/image";
function Header() {
  return (
    <header
      className={styles.Header}
      style={{ backgroundColor: "transparent" }}
    >
      <div className={styles.Header__left}>
        <Image src={analytic} height={540} width={540} alt="analytic" />
      </div>
      <div className={styles.Header__right}>
        <h1 className={styles.Header__title}>
          Bring everyone together to build better products
        </h1>
        <p className={styles.Header__paragraph}>
          Manage makes it simple for software teams to plan day-to day tasks
          while keeping the large team goals in view
        </p>
        <button className={`button-primary ${styles.Header__button}`}>
          Get started
        </button>
      </div>
    </header>
  );
}

export default Header;
