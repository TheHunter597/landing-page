import Card from "./Card";
import styles from "./SecondSection.module.scss";
import {
  firstImage,
  secondImage,
  thirdImage,
  fourthImage,
} from "../../../public/images/exporter";
import { useRef } from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import context from "../../../context/context";
import { nanoid } from "nanoid";
function SecondSection() {
  const contextData = useContext(context);
  const { state: contextState } = contextData;
  const { phoneUser } = contextState;
  let cards = useRef();
  let data = [
    {
      name: "Anisha Li",
      describe:
        "We have been able to cancel so many other subscriptions since using Manage. there is no more cross-channel confusion and everyone is much more focused",
      avatar: firstImage,
      number: 1,
    },
    {
      name: "Ali Bravo",
      describe:
        "Manage has supercharged our team workflow. The ability to maintain visibilty on large milestones at all times keeps everyone motivated",
      avatar: secondImage,
      number: 2,
    },
    {
      name: "Richard watts",
      describe:
        "Manage allows us to provide structure and process. It keeps us organized and focused. I cant stop recommending them to everyone I talk to",
      avatar: thirdImage,
      number: 3,
    },
    {
      name: "Shanai Gough",
      describe:
        "Their software allows us to track Manage and collaborate on our projects from anywhere.It keeps the whole team in-sync without being intrusive",
      avatar: fourthImage,
      number: 4,
    },
  ];
  let dotsNum = [];
  data.map((dot, index) => {
    dotsNum.push({ number: index + 1, id: nanoid() });
  });
  useEffect(() => {
    let timer = setInterval(() => {
      if (state.activeNum != data.length) {
        dispatch({ type: "CHANGE_ACTIVE_IMAGE_PHONE" });
      } else {
        dispatch({ type: "REST_IMAGES" });
      }
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  });
  let reducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_ACTIVE_IMAGE_PHONE":
        return { ...state, activeNum: state.activeNum + 1 };
      case "REST_IMAGES":
        return { ...state, activeNum: 1 };
      case "CHOSE_ACTIVE_NUM":
        return { ...state, activeNum: action.value };
      case "SHOW_SCROLL_BUTTONS":
        return { ...state, showButtons: action.value };
      default:
        return state;
    }
  };
  let [state, dispatch] = useReducer(reducer, {
    activeNum: 1,
    showButtons: false,
  });
  console.log(state.showButtons);
  let result = data.map((entry) => {
    return (
      <Card
        entry={entry}
        activeNum={state.activeNum}
        phoneUser={phoneUser}
        key={entry.name}
      />
    );
  });
  return (
    <section
      className={styles.secondSection}
      onMouseEnter={() =>
        dispatch({ type: "SHOW_SCROLL_BUTTONS", value: true })
      }
      onMouseLeave={() =>
        dispatch({ type: "SHOW_SCROLL_BUTTONS", value: false })
      }
    >
      <h4 className={styles.secondSection__title}>What they have said</h4>
      <div className={styles.secondSection__cards} ref={cards}>
        {result}
      </div>
      {state.showButtons && !phoneUser ? (
        <div className={styles.secondSection__cards__buttons}>
          <button onClick={() => (cards.current.scrollLeft -= 500)}>
            &larr;
          </button>
          <button onClick={() => (cards.current.scrollLeft += 500)}>
            &rarr;
          </button>
        </div>
      ) : (
        ""
      )}
      {phoneUser ? (
        <div className={styles.secondSection__dots}>
          {dotsNum.map((dot) => {
            console.log(dot);
            return (
              <div
                key={dot.id}
                className={`${
                  dot.number === state.activeNum ? styles.active : ""
                }`}
                onClick={() =>
                  dispatch({ type: "CHOSE_ACTIVE_NUM", value: dot.number })
                }
              ></div>
            );
          })}
        </div>
      ) : (
        ""
      )}
      <button className={`button-primary ${styles.secondSection__button}`}>
        Get started
      </button>
    </section>
  );
}

export default SecondSection;
