import { createContext, useReducer, useEffect } from "react";

interface props {
  children: JSX.Element;
}
interface state {
  phoneUser: boolean;
  showNavBar: boolean;
}

export enum actionTypes {
  CHANGE_PHONE_USER = "CHANGE_PHONE_USER",
  CHANGE_SHOW_NAV_BAR = "CHANGE_SHOW_NAV_BAR",
}

interface action {
  type: actionTypes;
  value: boolean;
}

export interface contextType {
  dispatch: ({ type, value }: { type: actionTypes; value: boolean }) => void;
  state: state;
}

const context = createContext({});

function reducer(state: state, action: action): state {
  const { value, type } = action;
  switch (type) {
    case actionTypes.CHANGE_PHONE_USER:
      return { ...state, phoneUser: value };
    case actionTypes.CHANGE_SHOW_NAV_BAR:
      return { ...state, showNavBar: value };
    default:
      return state;
  }
}

export function ContextProvider(props: props) {
  let initialState = {
    phoneUser: false,
    showNavBar: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    window.innerWidth < 600
      ? dispatch({ type: actionTypes.CHANGE_PHONE_USER, value: true })
      : dispatch({ type: actionTypes.CHANGE_PHONE_USER, value: false });
    window.addEventListener("resize", () =>
      window.innerWidth < 600
        ? dispatch({ type: actionTypes.CHANGE_PHONE_USER, value: true })
        : dispatch({ type: actionTypes.CHANGE_PHONE_USER, value: false })
    );
    return () => {
      window.removeEventListener("resize", () =>
        window.innerWidth < 600
          ? dispatch({ type: actionTypes.CHANGE_PHONE_USER, value: true })
          : dispatch({ type: actionTypes.CHANGE_PHONE_USER, value: false })
      );
    };
  }, []);
  return (
    <context.Provider value={{ dispatch, state }}>
      {props.children}
    </context.Provider>
  );
}

export default context;
