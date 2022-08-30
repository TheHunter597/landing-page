import styles from "./ThirdSection.module.scss";

function ThirdSection() {
  return (
    <section className={styles.thirdSection}>
      <div className={styles.thirdSection__content}>
        <h4 className={styles.thirdSection__title}>
          Simplify how your team works today.
        </h4>
        <div className={styles.thirdSection__container}>
          <button className={`button-primary ${styles.thirdSection__button}`}>
            Get started
          </button>
        </div>
      </div>
    </section>
  );
}

export default ThirdSection;
