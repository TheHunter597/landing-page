import styles from "./Footer.module.scss";

import {
  logo,
  facebook,
  youtube,
  twitter,
  pinterest,
  instagram,
} from "../../../public/images/exporter";
import { useRef, useState } from "react";
import EmailValidator from "email-validator";
import Image from "next/image";

function Footer() {
  let emailInput = useRef();
  let [email, setEmail] = useState("");
  let [emailValid, setEmailValid] = useState(true);
  function validateEmail() {
    if (EmailValidator.validate(email)) {
      setEmailValid(true);
      setEmail("");
    } else {
      setEmailValid(false);
      setEmail("");
    }
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.footer__logo}>
          {/* <img src={logo} alt="logo" /> */}
          <Image src={logo} alt="logo" height={35} width={160} />
        </div>

        <div className={styles.footer__contacts}>
          <Image src={facebook} alt="facebook" height={80} width={160} />
          <Image src={youtube} alt="youtube" height={80} width={160} />
          <Image src={twitter} alt="twitter" height={80} width={160} />
          <Image src={pinterest} alt="pinterest" height={80} width={160} />
          <Image src={instagram} alt="instagram" height={120} width={160} />
        </div>

        <div className={styles.footer__nav}>
          <ul>
            <li>Home</li>
            <li>Pricing</li>
            <li>Products</li>
            <li>About Us</li>
          </ul>
        </div>

        <div className={styles.footer__info}>
          <ul>
            <li>Carrers</li>
            <li>Community</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <form
          className={styles.footer__email}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className={styles.footer__input}>
            <input
              placeholder={`${
                emailValid ? "Updates in your inbox..." : "email@example.com"
              }`}
              type="email"
              value={email}
              ref={emailInput}
              onChange={(e) => setEmail(e.target.value)}
              className={`${styles.input} ${
                !emailValid ? styles.input__active : ""
              }`}
            ></input>
            {!emailValid ? (
              <small className={styles.footer__email__error}>
                Please insert a valid email
              </small>
            ) : (
              ""
            )}
          </div>
          <button className="button-primary" onClick={validateEmail}>
            Go
          </button>
        </form>

        <div className={styles.footer__services}>
          Copyright 2022. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
