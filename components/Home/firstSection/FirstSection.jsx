import { useContext } from "react";
import context from "../../../context/context";
import styles from "./FirstSection.module.scss";
function FirstSection() {
  let data = [
    {
      number: "01",
      title: "Track company-wide progress",
      describe:
        "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details.Never lose sight of the bigger picture again",
    },
    {
      number: "02",
      title: "Advanced built-in reports",
      describe:
        "See interval delivery estimates and track progress towards company goals.Our customasible dashboard helps you to build out the reports to keep key stakeholders informed ",
    },
    {
      number: "03",
      title: "Everything you need in one place",
      describe:
        "Stop jumping from one service to another to communicate,store files,track tasks and share documents. Mange offer an all-in-one team productivity solution",
    },
  ];
  const contextData = useContext(context);
  const { state } = contextData;
  const { phoneUser } = state;
  return (
    <div className={styles.firstSection}>
      <div className={styles.firstSection__left}>
        <h2>What is different about Manage ?</h2>
        <p>
          Manage provides all functionality your team needs Without complexity .
          Our software is tailor made for modern digital product teams
        </p>
      </div>
      <div className={styles.firstSection__right}>
        <ul className={styles.firstSection__container}>
          {data.map((entry) => (
            <li className={styles.firstSection__element} key={entry.number}>
              {!phoneUser ? ( //if the user is using a phone the html structure will change
                <>
                  <button className={styles.firstSection__element__number}>
                    {entry.number}
                  </button>
                  <div className={styles.firstSection__element__info}>
                    <h2 className={styles.firstSection__element__header}>
                      {entry.title}
                    </h2>
                    <p className={styles.firstSection__element__paragraph}>
                      {entry.describe}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className={`${styles.firstSection__element__info}`}>
                    <button className={styles.firstSection__element__number}>
                      {entry.number}
                    </button>
                    <h2 className={styles.firstSection__element__header}>
                      {entry.title}
                    </h2>
                  </div>
                  <p className={styles.firstSection__element__paragraph}>
                    {entry.describe}
                  </p>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default FirstSection;
