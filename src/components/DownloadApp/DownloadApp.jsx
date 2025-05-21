import React from "react";
import styles from "./DownloadApp.module.css";
import Button from "../Button/Button";
import inner from "../../assets/DownloadApp/inner.png";
import outer from "../../assets/DownloadApp/outer.png";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

function DownloadApp() {
  return (
    <div className={styles.container}>
      <div className={styles.leftDiv}>
        <div className={styles.inner1}>
          <img src={inner} alt="innerimg" />
        </div>
        <div className={styles.outer1}>
          <img src={outer} alt="outerimg" />
        </div>
        <div className={styles.inner2}>
          <img src={inner} alt="innerimg" />
        </div>
        <div className={styles.outer2}>
          <img src={outer} alt="outerimg" />
        </div>
      </div>
      <div className={styles.rightDiv}>
        <h2>Download the</h2>
        <h2>
          <span>Medify</span> App
        </h2>
        <p
          style={{
            fontWeight: "700",
            fontSize: "16px",
            color: "#1B3C74",
          }}
        >
          Get the link to download the app
        </p>
        <div className={styles.inputDiv}>
          <div className={styles.code}>+91</div>
          <input type="text" placeholder="Enter phone number" />
          <Button text="Send SMS" width="6rem"></Button>
        </div>
        <div className={styles.downloadBtn}>
          <button>
            <FaGooglePlay color="white" size={20}/>
            <span style={{color: "white"}}>Google Play</span>
          </button>
          <button>
            <FaApple color="white" size={22}/>
            <span style={{color: "white"}}>App Store</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DownloadApp;
