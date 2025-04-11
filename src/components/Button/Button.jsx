import React from "react";
import styles from "./Button.module.css";

function Button({ width }) {
  return (
    <div className={styles.buttonDiv}>
      <button
        style={{
          width: width,
        }}
      >
        My Bookings
      </button>
    </div>
  );
}

export default Button;
