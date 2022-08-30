import { logo, test, close } from "../../public/images/exporter";
import styles from "./Navbar.module.scss";
import context, { actionTypes } from "../../context/context";
import { useContext } from "react";
import Image from "next/image";
function Navbar() {
  const data = useContext(context);
  const { state, dispatch } = data;
  const { phoneUser, showNavBar } = state;
  return (
    <nav className={styles.Navbar}>
      <div className={styles.Navbar__logo}>
        <Image src={logo} width={130} height={30} alt="logo" />
      </div>
      {!phoneUser ? (
        <>
          <ul role="list fs-large">
            <li>Pricing</li>
            <li>Product</li>
            <li>About us</li>
            <li>Careers</li>
            <li>Community</li>
          </ul>
          <button className={`${styles.Navbar__button} button-primary`}>
            Get started
          </button>
        </>
      ) : (
        <>
          <div
            className={styles.Navbar__phone}
            onClick={() =>
              dispatch({
                type: actionTypes.CHANGE_SHOW_NAV_BAR,
                value: !showNavBar,
              })
            }
          >
            {!showNavBar ? (
              <Image src={test} height={25} width={30} alt="" />
            ) : (
              <Image src={close} height={25} width={30} alt="" />
            )}
          </div>
          {showNavBar ? (
            <ul role="list fs-large Navbar__list">
              <li>Pricing</li>
              <li>Product</li>
              <li>About us</li>
              <li>Careers</li>
              <li>Community</li>
            </ul>
          ) : (
            ""
          )}
        </>
      )}
    </nav>
  );
}

export default Navbar;
